define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
    "dojo/string",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "./data/currentCharacter",
    "./data/skillService",
    "dijit/form/Select"
], function (
	declare,
	ContentPane,
    string,
    lang,
    domConstruct,
    currentCharacter,
    skillService,
    Select) {
    var skillStore = skillService.getStore();
    return declare('legend.SkillPanel', [ContentPane],
        {
            baseClass: "skillPanel",
            postCreate: function () {
                this.inherited(arguments);
                currentCharacter.watch("selectedClass", lang.hitch(this, this.recalculate));
                currentCharacter.watch("selectedRace", lang.hitch(this, this.recalculate));
                this.recalculate();
            },
            _selects: [],
            recalculate: function () {
                this.destroyDescendants(false);
                domConstruct.empty(this.domNode);
                this._selects = [];
                for (var i = 0; i < currentCharacter.getNumberOfSkills() ; i++) {
                    var select = new Select({ labelAttr: "name", sortByLabel: false, forceWidth: true });
                    select.setStore(skillStore);
                    select.set("value", skillStore.data[i].name);
                    select.placeAt(this.domNode);
                    select.startup();
                    select.on("change", lang.hitch(this, this._setSkills));
                    domConstruct.create("br", {}, this.domNode);
                    this._selects.push(select);
                }
                this._setSkills()
            },
            _setSkills: function () {
                var skills = [];
                for (var i = 0; i < this._selects.length; i++) {
                    skills.push(this._selects[i].getValue());
                }
                currentCharacter.set("skills", skills);
            }
        });
})