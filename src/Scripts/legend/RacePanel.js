define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/RacePanel.html',
    "./data/raceService",
    "dojo/string",
    "dojo/dom-construct",
    "dojo/dom-class",
    "./data/currentCharacter",
    "./data/advancementService",
    "dijit/form/Select"
], function (
	declare,
	ContentPane,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	template,
    raceService,
    string,
    domConstruct,
    domClass,
    currentCharacter,
    advancementService,
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
                var this$ = this;
                currentCharacter.watch("level", function (name, oldValue, newValue) {
                    domClass.remove(this$.advancement, "level" + oldValue);
                    domClass.add(this$.advancement, "level" + newValue);
                });
            },
            _onRaceChange: function (value) {
                currentCharacter.set("selectedRace", this.raceStore.get(value));
                var r = currentCharacter.selectedRace;
                this._setupAttributeBox(this.attributeBonus1, r.attributeBonuses[0], true);
                this._setupAttributeBox(this.attributeBonus2, r.attributeBonuses[1], true);
                this._setupAttributeBox(this.attributePenalty, r.attributePenalty, false);
                this._setupSizeBox(this.size, r.size);
                
                this.type.innerHTML = string.substitute("[${0}] type", [r.type]);
                var bonuses = [];
                for (var key in r.bonuses) {
                    bonuses.push([key, r.bonuses[key]]);
                }
                this._setupBonusBox(this.raceBonus1, bonuses[0]);
                this._setupBonusBox(this.raceBonus2, bonuses[1]);
                this._setupFeatBox(r.bonusFeats);
                if (r.racialTrack) {
                    domClass.remove(this.racialTrack, "hidden");
                    var c = r.racialTrack;
                    this.hitPoints.innerHTML = c.hp;
                    this.skills.innerHTML = c.skills;
                    this._setupKAM(this.kom, c.kom);
                    this._setupKAM(this.kdm, c.kdm);
                    this._setupAdvancementTable(c);
                } else {
                    domClass.add(this.racialTrack, "hidden");
                }
            },
            _setupAttributeBox: function (panel, data, isBonus) {
                panel.destroyDescendants(false);
                domConstruct.empty(panel.domNode);
                if (data == "") {
                    return;
                }
                if (Array.isArray(data)) {
                    var options = [];
                    for (var i = 0; i < data.length; i++) {
                        options.push({ value: data[i], label: data[i] });
                    }
                    panel.domNode.innerHTML = string.substitute("${0}2<br/>", [isBonus ? "+" : "-"]);
                    var select = new Select({ options: options });
                    select.on("change", function (attr) {
                        currentCharacter.set("raceAttributeOverride", { attr: attr, value: isBonus ? 2 : -2 });
                    });
                    select.placeAt(panel.domNode);
                    select.startup();
                    currentCharacter.set("raceAttributeOverride", { attr: select.getValue(), value: isBonus ? 2 : -2 });
                } else {
                    panel.domNode.innerHTML = string.substitute("${0}2<br/>${1}", [isBonus ? "+" : "-", data]);
                }
            },
            _setupSizeBox: function (panel, data) {
                panel.destroyDescendants(false);
                domConstruct.empty(panel.domNode);

                if (Array.isArray(data)) {
                    var options = [];
                    for (var i = 0; i < data.length; i++) {
                        options.push({ value: data[i], label: "[" + data[i] + "]" });
                    }
                    var select = new Select({ options: options });
                    select.on("change", function (value) {
                        currentCharacter.set("size", value);
                    });
                    select.placeAt(panel.domNode);
                    select.startup();
                    domConstruct.create("span", { innerHTML: " size" }, panel.domNode)
                }
                else {
                    this.size.domNode.innerHTML = string.substitute("[${0}] size", [data]);
                }
            },
            _setupBonusBox: function (td, data) {
                if (!data) {
                    td.innerHTML = "";
                    return;
                }
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