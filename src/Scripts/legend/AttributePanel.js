define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/AttributePanel.html',
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
    return declare('legend.AttributePanel', [ContentPane, _TemplatedMixin, _WidgetsInTemplateMixin],
        {
            templateString: template,
            postCreate: function () {
                this.inherited(arguments);
                currentCharacter.watch(lang.hitch(this, this.recalculate));
                this.recalculate();
            },
            recalculate: function () {
                for (var i = 0; i < attributes.length; i++) {
                    var attr = attributes[i];
                    var raceMod = currentCharacter.getRaceMod(attr);
                    this[attr + "Race"].innerHTML = raceMod == 0 ? "" : (raceMod > 0 ? ("+" + raceMod) : raceMod);
                    this[attr + "Total"].innerHTML = this[attr].getValue() + raceMod;
                    var row = this[attr + "Row"];
                    domClass.remove(row);
                    if (currentCharacter.getKOM() == attr)
                        domClass.add(row, "kom");
                    if (currentCharacter.getKDM() == attr)
                        domClass.add(row, "kdm");
                }
            }
        });
})