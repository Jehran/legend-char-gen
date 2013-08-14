define([
    "dojo/store/Memory",
    "dojo/json",
    "dojo/text!api/races.json"
], function (
    Memory,
    json,
    list
    ) {
    return {
        getStore: function () {
            return new Memory({ data: json.parse(list) });
        }
    };
});