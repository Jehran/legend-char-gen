define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/ClassPanel.html',
    "./data/classService",
    "dojo/string",
    "dijit/form/Select"
], function (
	declare,
	ContentPane,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	template,
    classService,
    string,
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
            }
        });
})