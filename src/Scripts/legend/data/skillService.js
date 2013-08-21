define([
    "dojo/store/Memory",
    "api/skills"
], function (
    Memory,
    list
    ) {
    var store = new Memory({ data: list, idProperty: "name" });
    return {
        getStore: function () {
            return store;
        },
        get: function (skill) {
            return store.get(skill);
        },
        getAttribute: function (skill) {
            return this.get(skill).attribute;
        }
    };
});