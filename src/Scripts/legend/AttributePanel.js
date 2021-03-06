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
    "./form/AttributeSelector",
    "dijit/form/CheckBox"
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
    AttributeSelector,
    CheckBox) {
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
                this.kom.innerHTML = currentCharacter.getKOM();
                this.kdm.innerHTML = currentCharacter.getKDM();
                var pointsSpent = 0;
                var standardArray = [16, 14, 14, 12, 10, 10];
                for (var i = 0; i < attributes.length; i++) {
                    var attr = attributes[i];
                    var raceMod = currentCharacter.getRaceMod(attr);
                    this[attr + "Race"].innerHTML = raceMod == 0 ? "" : (raceMod > 0 ? ("+" + raceMod) : raceMod);
                    this[attr + "Total"].innerHTML = currentCharacter.get(attr);
                    var row = this[attr + "Row"];
                    domClass.remove(row);
                    var index = standardArray.indexOf(this[attr].getValue());
                    if (index >= 0)
                        standardArray.splice(index, 1);
                    pointsSpent += this[attr].getPointCost();
                }
                if (standardArray.length == 0) {
                    this.pointBuySpent.innerHTML = "Standard Array";
                }
                else {
                    this.pointBuySpent.innerHTML = pointsSpent;
                }
            },
            _onStrChange: function () {
                currentCharacter.set("Str", this.Str.getValue());
            },
            _onDexChange: function () {
                currentCharacter.set("Dex", this.Dex.getValue());
            },
            _onConChange: function () {
                currentCharacter.set("Con", this.Con.getValue());
            },
            _onIntChange: function () {
                currentCharacter.set("Int", this.Int.getValue());
            },
            _onWisChange: function () {
                currentCharacter.set("Wis", this.Wis.getValue());
            },
            _onChaChange: function () {
                currentCharacter.set("Cha", this.Cha.getValue());
            }
        });
})