define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/TrackPanel.html',
    "dojo/string",
    "dojo/_base/lang",
    "dojo/dom-class",
    "dojo/store/Memory",
    "./data/currentCharacter",
    "./form/AttributeSelector"
], function (
	declare,
	ContentPane,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	template,
    string,
    lang,
    domClass,
    Memory,
    currentCharacter,
    AttributeSelector) {
    var attributes = ["Str", "Dex", "Con", "Int", "Wis", "Cha"];
    return declare('legend.TrackPanel', [ContentPane, _TemplatedMixin, _WidgetsInTemplateMixin],
        {
            templateString: template,
            postCreate: function () {
                this.inherited(arguments);
                currentCharacter.watch("fastTrack", lang.hitch(this, this._setupFastTrack));
                currentCharacter.watch("mediumTrack", lang.hitch(this, this._setupMediumTrack));
                currentCharacter.watch("slowTrack", lang.hitch(this, this._setupSlowTrack));
                currentCharacter.watch("fullBuyInTrack", lang.hitch(this, this._setupFullBuyInTrack));
                currentCharacter.watch("selectedClass", lang.hitch(this, this._classChanged));
                var this$ = this;
                currentCharacter.watch("level", function (name, oldValue, newValue) {
                    domClass.remove(this$.tracks, "level" + oldValue);
                    domClass.add(this$.tracks, "level" + newValue);
                });
                this.recalculate();
            },
            recalculate: function () {
                this._setupFastTrack();
                this._setupMediumTrack();
                this._setupSlowTrack();
            },
            _classChanged: function() {
                this.circleName.innerHTML = "";
                this.circleText.innerHTML = "";
                domClass.add(this.circleChoice, "hidden");
            },
            _setupTrack: function (name) {
                var track = currentCharacter.get(name);
                if (typeof (track) == "string") {
                    this[name + "Head"].innerHTML = track;
                    for (var i = 1; i <= 7; i++) {
                        var cell = this[name + i];
                        domClass.remove(cell)
                        cell.innerHTML = "Circle " + i;
                    }
                    return;
                }
                this[name + "Head"].innerHTML = track.name;
                for (var i = 1; i <= 7; i++) {
                    var cell = this[name + i];
                    cell.innerHTML = track.circles[i - 1].name;
                    if (track.circles[i - 1].choice) {
                        domClass.add(cell, "hasChoice")
                    }
                    else {
                        domClass.remove(cell, "hasChoice")
                    }
                }
            },
            _setupFastTrack: function () {
                this._setupTrack("fastTrack");
            },
            _setupMediumTrack: function () {
                this._setupTrack("mediumTrack");
            },
            _setupSlowTrack: function () {
                this._setupTrack("slowTrack");
            },
            _setupFullBuyInTrack: function () {
                this._setupTrack("fullBuyIn");
            },
            _onTrackClick: function (event) {
                var attachPoint = event.target.dataset["dojoAttachPoint"];
                
                var track = currentCharacter.get(attachPoint.substr(0, attachPoint.length - 1));
                var circleNum = Number(attachPoint.substr(attachPoint.length - 1, 1));
                if (typeof (track) == "string") {
                    this.circleName.innerHTML = track + ": Circle " + circleNum;
                    this.circleText.innerHTML = "See book";
                    return;
                }
                var circle = track.circles[circleNum - 1];
                var text = circle.text;

                if (circle.options) {
                    for (var i = 0; i < circle.options.length; i++) {
                        text += string.substitute("<br/><span class='title'>&nbsp;&nbsp;&nbsp;&raquo;&nbsp;${name}</span>&ndash;${text}", circle.options[i]);
                    }
                }

                this.circleName.innerHTML = circle.name;
                this.circleText.innerHTML = text;

                if (circle.choice) {
                    domClass.remove(this.circleChoice, "hidden");
                    if (circle.choice)
                        domClass.remove(this.circleChoiceMessage, "hidden");
                    else
                        domClass.add(this.circleChoiceMessage, "hidden");
                    var data = [];
                    var selectedChoice = currentCharacter.getCircleChoice(circle.name);
                    var selectedId = 1;
                    for (var i = 0; i < circle.choice.length; i++) {
                        data.push({ id: i + 1, name: circle.choice[i].name });
                        if (selectedChoice && selectedChoice == circle.choice[i].name)
                            selectedId = i + 1;
                    }
                    var store = new Memory({ data: data });
                    this.circleChoiceSelect.setStore(store);
                    this.circleChoiceSelect.circle = circle;
                    this.circleChoiceSelect.set("value", selectedId);
                    this._onCircleChoiceSelect(selectedId);
                }
                else {
                    domClass.add(this.circleChoice, "hidden");
                }
            },
            _onCircleChoiceSelect: function (value) {
                var circle = this.circleChoiceSelect.circle;
                var choice = circle.choice[value - 1];
                currentCharacter.addCircleChoice(circle.name, choice.name)
                this.circleChoiceText.innerHTML = choice.text;
            }
        });
})