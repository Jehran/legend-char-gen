define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/TrackPanel.html',
    "dojo/string",
    "dojo/_base/lang",
    "dojo/dom-class",
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
                this.recalculate();
            },
            recalculate: function () {
                this._setupFastTrack();
                this._setupMediumTrack();
                this._setupSlowTrack();
            },
            _setupTrack: function (name) {
                var track = currentCharacter.get(name);
                this[name + "Head"].innerHTML = track.name;
                for (var i = 1; i <= 7; i++) {
                    this[name + i].innerHTML = track.circles[i - 1].name;
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
            }
        });
})