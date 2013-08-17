define([
    "dojo/store/Memory",
    "api/races"
], function (
    Memory,
    list
    ) {
    return {
        getStore: function () {
            return new Memory({ data: list });
        }
    };
});