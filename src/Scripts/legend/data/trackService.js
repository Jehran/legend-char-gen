define([
    "dojo/store/Memory",
    "api/tracks"
], function (
    Memory,
    list
    ) {
    var store = new Memory({ data: list, idProperty: "name" });
    return {
        getTrack: function (track) {
            return store.get(track) || track;

        }
    };
});