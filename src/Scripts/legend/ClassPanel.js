define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/ClassPanel.html',
    "./data/classService",
    "dojo/string",
    "./data/advancementService",
    "./data/currentCharacter",
    "dijit/form/Select"
], function (
	declare,
	ContentPane,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	template,
    classService,
    string,
    advancementService,
    currentCharacter,
    Select) {
    return declare('legend.ClassPanel', [ContentPane, _TemplatedMixin, _WidgetsInTemplateMixin],
        {
            classStore: undefined,
            templateString: template,
            selectedClass: undefined,
            postCreate: function () {
                this.inherited(arguments);
                this.classStore = classService.getStore();
                this.selectClass.setStore(this.classStore);
                this._onClassChange(this.selectClass.getValue());
                var this$ = this;
                currentCharacter.watch("selectedRace", function () {
                    this$._onClassChange(currentCharacter.selectedClass.id);
                });
            },
            _onClassChange: function (value) {
                currentCharacter.set("selectedClass", this.classStore.get(value));
                var c = currentCharacter.selectedClass;
                this.hitPoints.innerHTML = c.hp;
                this.skills.innerHTML = c.skills;
                this._setupKAM(this.kom, c.kom);
                this._setupKAM(this.kdm, c.kdm);
                this._setupTrackSelection(this.fastTrack, c.fastTrack);
                this._setupTrackSelection(this.mediumTrack, c.mediumTrack);
                this._setupTrackSelection(this.slowTrack, c.slowTrack);
                this._setupAdvancementTable(c);
            },
            _setupKAM: function (td, data) {
                if (Array.isArray(data)) {
                    var select = "<select>";
                    for (var i = 0; i < data.length; i++) {
                        select += string.substitute("<option value='${0}'>${0}</option>", [data[i]]);
                    }
                    select += "</select>";
                    td.innerHTML = select;
                }
                else {
                    td.innerHTML = data;
                }
            },
            _setupTrackSelection: function (td, data, multiClass) {
                var select = "<select>";
                for (var i = 0; i < data.length; i++) {
                    select += string.substitute("<option value='${0}'>${0}</option>", [data[i]]);
                }
                if (currentCharacter.selectedRace.racialTrack) {
                    select += string.substitute("<option value='${0}'>${0}</option>", [currentCharacter.selectedRace.name]);
                }
                select += "</select>";
                td.innerHTML = select;
            },
            _setupAdvancementTable: function (c) {
                var table = string.substitute("<tr><th>Level</th><th>BAB</th><th>${0}</th><th>${1}</th><th>${2}</th></tr>",
                    [c.goodSaves[0], c.goodSaves[1], c.poorSave]);
                for (var i = 1; i <= 20; i++) {
                    table += string.substitute("<tr><td>${0}</td><td>+${1}</td><td>+${2}</td><td>+${2}</td><td>+${3}</td></tr>",
                        [i, advancementService.getAb(c.ab, i), advancementService.getSave("Good", i), advancementService.getSave("Poor", i)]);
                }
                this.advancement.innerHTML = table;
            }
        });
})