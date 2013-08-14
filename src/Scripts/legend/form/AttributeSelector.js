define(["dojo/_base/declare", "dijit/form/NumberSpinner"], function (declare, NumberSpinner) {
    return declare("legend.form.AttributeSelector", [NumberSpinner], {
        value: 8,
        smallDelta: 2,
        intermediateChanges: true,
        constructor: function () {
            this.constraints = { min: 8, max: 18, places: 0 };
        },
        constraints: { min: 8, max: 18, places: 0 },
        getPointCost: function () {
            return this.getValue() - 8;
        }
    });
});