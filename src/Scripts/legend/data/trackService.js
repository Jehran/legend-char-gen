define([
    "dojo/store/Memory",
    "dojo/json",
    "dojo/text!api/tracks.json"
], function (
    Memory,
    json,
    list
    ) {
    var store = new Memory({ data: json.parse(list), idProperty: "name" });
    return {
        getTrack: function (track) {
            return store.get(track) || track;

        }
    };
});