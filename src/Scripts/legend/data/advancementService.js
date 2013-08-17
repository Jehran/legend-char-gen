define([
    "api/ab",
    "api/saves"
], function (
    ab,
    saves
    ) {
        
    return {
        getAb: function (type, level) {
            return ab[type][level - 1];
        },
        getSave: function (type, level) {
            return saves[type][level - 1];
        }
    };
});