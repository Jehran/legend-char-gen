define([
    "api/ab",
    "api/saves",
    "api/circles"
], function (
    ab,
    saves, 
    circles
    ) {
        
    return {
        getAb: function (type, level) {
            return ab[type][level - 1];
        },
        getSave: function (type, level) {
            return saves[type][level - 1];
        },
        getNumberOfCircles: function (type, level) {
            return circles[type][level - 1];
        }
    };
});