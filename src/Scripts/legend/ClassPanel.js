define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/ClassPanel.html',
    "./data/classService",
    "dojo/string",
    "./data/advancementService",
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
            },
            _onClassChange: function (value) {
                this.selectedClass = this.classStore.get(value);
                var c = this.selectedClass;
                this.hitPoints.innerHTML = c.hp;
                this.skills.innerHTML = c.skills;
                this._setupKAM(this.kom, c.kom);
                this._setupKAM(this.kdm, c.kdm);
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