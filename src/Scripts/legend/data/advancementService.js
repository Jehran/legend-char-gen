define([
    "dojo/json",
    "dojo/text!api/ab.js",
    "dojo/text!api/saves.js"
], function (
    json,
    abJson,
    savesJson
    ) {
        
    var ab = json.parse(abJson);
    var saves = json.parse(savesJson);
    return {
        getAb: function (type, level) {
            return ab[type][level - 1];
        },
        getSave: function (type, level) {
            return saves[type][level - 1];
        }
    };
});