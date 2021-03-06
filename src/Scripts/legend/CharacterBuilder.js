define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dijit/_WidgetsInTemplateMixin',
	'dojo/text!./templates/CharacterBuilder.html',
    "dijit/layout/TabContainer",
    "./RacePanel",
    "./ClassPanel",
    "./AttributePanel",
    "./TrackPanel",
    "./SkillPanel",
    "./BasicInfoPanel",
    "./SummaryPanel"
], function (
	declare,
	_WidgetBase,
	_TemplatedMixin,
	_WidgetsInTemplateMixin,
	template,
    TabContainer,
    RacePanel,
    ClassPanel,
    AttributePanel,
    TrackPanel,
    SkillPanel,
    BasicInfoPanel,
    SummaryPanel) {
    return declare('legend.CharacterBuilder', [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin],
        {
            templateString: template
        });
})