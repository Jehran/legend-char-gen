define([
    "dojo/store/Memory",
    "api/classes"
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