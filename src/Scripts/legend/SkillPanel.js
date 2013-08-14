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
            postCreate: function () {
                this.inherited(arguments);
                currentCharacter.watch(lang.hitch(this, this.recalculate));
                this.recalculate();
            },
            recalculate: function () {
                this.destroyDescendants(false);
                domConstruct.empty(this.domNode);
                for (var i = 0; i < currentCharacter.getNumberOfSkills() ; i++) {
                    var select = new Select({ labelAttr: "name", sortByLabel: false });
                    select.setStore(skillStore);
                    select.set("value", skillStore.data[i].id);
                    select.placeAt(this.domNode);
                    domConstruct.create("br", {}, this.domNode);
                }
            }
        });
})