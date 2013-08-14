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
                var pointsSpent = 0;
                var standardArray = [16, 14, 14, 12, 10, 10];
                for (var i = 0; i < attributes.length; i++) {
                    var attr = attributes[i];
                    var raceMod = currentCharacter.getRaceMod(attr);
                    this[attr + "Race"].innerHTML = raceMod == 0 ? "" : (raceMod > 0 ? ("+" + raceMod) : raceMod);
                    this[attr + "Total"].innerHTML = this.get(attr);
                    var row = this[attr + "Row"];
                    domClass.remove(row);
                    var kamCell = this[attr + "KAM"];
                    kamCell.innerHTML = "";
                    if (currentCharacter.getKOM() == attr)
                        kamCell.innerHTML += "KOM";
                    if (currentCharacter.getKDM() == attr)
                        kamCell.innerHTML += "KDM";
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
            },
        });
})