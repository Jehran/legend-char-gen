define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/BasicInfoPanel.html',
    "dojo/string",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "./data/currentCharacter",
    "dijit/form/NumberSpinner",
    "dijit/form/TextBox"
], function (
	declare,
	ContentPane,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    template,
    string,
    lang,
    domConstruct,
    currentCharacter,
    NumberSpinner,
    TextBox) {
    return declare('legend.BasicInfoPanel', [ContentPane, _TemplatedMixin, _WidgetsInTemplateMixin],
        {
            templateString: template,
            postCreate: function () {

            },
            _onPlayerNameChange: function (value) {
                currentCharacter.set("playerName", value);
            },
            _onCharacterNameChange: function (value) {
                currentCharacter.set("characterName", value);

            },
            _onLevelChange: function (value) {
                currentCharacter.set("level", value);
            }
        });
})