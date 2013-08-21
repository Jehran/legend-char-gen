define([
    "dojo/_base/declare",
    "dijit/form/_FormWidget",
    "dijit/_WidgetsInTemplateMixin",
    "dojo/text!./templates/AttributeSelector.html",
    "dijit/form/NumberTextBox",
    "dijit/form/HorizontalSlider"], function (declare, _FormWidget, _WidgetsInTemplateMixin, template) {
        return declare("legend.form.AttributeSelector", [_FormWidget, _WidgetsInTemplateMixin], {
        templateString: template,
        constructor: function () {
           
        },
        getPointCost: function () {
            return this.numberSpinner.getValue() - 8;
        },
        onChange: function (value) {
            this.slider.set("value", value);
            
        },
        onSliderChange: function (value) {
            this.numberSpinner.set("value", value);
        },
        getValue: function () {
            return this.numberSpinner.getValue();
        }
    });
});