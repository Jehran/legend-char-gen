define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/ClassPanel.html',
    "./data/classService",
    "dojo/string",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/dom-class",
    "./data/advancementService",
    "./data/currentCharacter",
    "./data/trackService",
    "dijit/form/Select",
    "dojo/store/Memory"
], function (
	declare,
	ContentPane,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	template,
    classService,
    string,
    lang,
    domConstruct,
    domClass,
    advancementService,
    currentCharacter,
    trackService,
    Select,
    Memory) {
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
                currentCharacter.watch("level", function (name, oldValue, newValue) {
                    domClass.remove(this$.advancement, "level" + oldValue);
                    domClass.add(this$.advancement, "level" + newValue);
                });
                this.fastTrack.on("change", this._onTrackChange);
                this.mediumTrack.on("change", this._onTrackChange);
                this.slowTrack.on("change", this._onTrackChange);
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
            _setupTrackSelection: function (select, data, multiClass) {
                var options = [];
                //var select = "<select>";
                for (var i = 0; i < data.length; i++) {
                    options.push({ name: data[i], id: data[i] });
                    //select += string.substitute("<option value='${0}'>${0}</option>", [data[i]]);
                }
                if (currentCharacter.selectedRace.racialTrack) {
                    options.push({ name: currentCharacter.selectedRace.name, id: currentCharacter.selectedRace.name });
                    //select += string.substitute("<option value='${0}'>${0}</option>", [currentCharacter.selectedRace.name]);
                }
                //select += "</select>";
                var store = new Memory({ data: options });
                select.setStore(store);
                lang.hitch(select, this._onTrackChange)();
            },
            _setupAdvancementTable: function (c) {
                var table = string.substitute("<tr><th>Level</th><th>BAB</th><th>${0}</th><th>${1}</th><th>${2}</th></tr>",
                    [c.goodSaves[0], c.goodSaves[1], c.poorSave]);
                for (var i = 1; i <= 20; i++) {
                    table += string.substitute("<tr><td>${0}</td><td>+${1}</td><td>+${2}</td><td>+${2}</td><td>+${3}</td></tr>",
                        [i, advancementService.getAb(c.ab, i), advancementService.getSave("Good", i), advancementService.getSave("Poor", i)]);
                }
                this.advancement.innerHTML = table;
                
            },
            _onTrackChange: function () {
                currentCharacter.set(this.speed, trackService.getTrack(this.getValue()));
            }
        });
})