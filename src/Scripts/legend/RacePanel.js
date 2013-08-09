define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/RacePanel.html',
    "./data/raceService",
    "dojo/string",
    "./data/currentCharacter",
    "dijit/form/Select"
], function (
	declare,
	ContentPane,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	template,
    raceService,
    string,
    currentCharacter,
    Select) {
    return declare('legend.RacePanel', [ContentPane, _TemplatedMixin, _WidgetsInTemplateMixin],
        {
            raceStore: undefined,
            templateString: template,
            postCreate: function () {
                this.inherited(arguments);
                this.raceStore = raceService.getStore();
                this.selectRace.setStore(this.raceStore);
                this._onRaceChange(this.selectRace.getValue());
            },
            _onRaceChange: function (value) {
                currentCharacter.set("selectedRace", this.raceStore.get(value));
                var r = currentCharacter.selectedRace;
                this._setupAbilityBox(this.abilityBonus1, r.abiltyBonuses[0], true);
                this._setupAbilityBox(this.abilityBonus2, r.abiltyBonuses[1], true);
                this._setupAbilityBox(this.abilityPenalty, r.abilityPenalty, false);
                this.size.innerHTML = string.substitute("[${0}] size", [r.size]);
                this.type.innerHTML = string.substitute("[${0}] type", [r.type]);
                this._setupBonusBox(this.raceBonus1, r.bonuses[0]);
                this._setupBonusBox(this.raceBonus2, r.bonuses[1]);
                this._setupFeatBox(r.bonusFeats);
            },
            _setupAbilityBox: function (td, data, isBonus) {
                if (data == "") {
                    td.innerHTML = "";
                    return;
                }
                if (Array.isArray(data)) {
                    var select = "<select>";
                    for (var i = 0; i < data.length; i++) {
                        select += string.substitute("<option value='${0}'>${0}</option>", [data[i]]);
                    }
                    select += "</select>";
                    td.innerHTML = string.substitute("${0}2<br/>${1}", [isBonus ? "+" : "-", select]);
                } else {
                    td.innerHTML = string.substitute("${0}2<br/>${1}", [isBonus ? "+" : "-", data]);
                }
            },
            _setupBonusBox: function (td, data) {
                switch (data[0]) {
                    case "skillBonus":
                        td.innerHTML = string.substitute("+1 (+1/8 levels) racial bonus to ${0}", [data[1]]);
                        break;
                    case "extraVision":
                        td.innerHTML = data[1];
                        break;
                    case "resistance":
                        td.innerHTML = string.substitute("[Lesser resistance] to [${0}]", [data[1]]);
                        break;
                    case "speed":
                        td.innerHTML = string.substitute("${0} ft movement speed", [data[1]]);
                        break;
                    case "raceBonus":
                        var select = "<select>";
                        for (var i = 0; i < data[1].length; i++) {
                            select += string.substitute("<option value='${0}'>${0}</option>", [data[1][i]]);
                        }
                        select += "</select>";
                        td.innerHTML = string.substitute("+1 racial bonus to ${0}", [select]);
                        break;
                }
            },
            _setupFeatBox: function (data) {
                if (Array.isArray(data))
                    this.bonusFeats.innerHTML = data.join("<br/>");
                else
                    this.bonusFeats.innerHTML = data;
            }
        });
})