define([
    "dojo/store/Memory",
    "api/skills"
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