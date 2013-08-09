define(["dojo/_base/declare", "dojo/Stateful"], function (declare, Stateful) {
    var _CurrentCharacter = declare([Stateful], {
        selectedRace: undefined,
        selectedClass: undefined
    });
    return new _CurrentCharacter();
});