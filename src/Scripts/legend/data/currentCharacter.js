define(["dojo/_base/declare", "dojo/Stateful"], function (declare, Stateful) {
    var _CurrentCharacter = declare([Stateful], {
        //Race Options
        selectedRace: undefined,
        _selectedRaceSetter: function (value) {
            this.selectedRace = value;
            this._raceAbilityOverrides = {};
            this._raceBonusOverrides = [];
        },
        _raceAbilityOverrides: {},
        _raceBonusOverrides: [],
        _getRaceMod: function (attribute) {
            if (this._raceAbilityOverrides[attribute])
                return this._raceAbilityOverrides[attribute];
            if (this.selectedRace.abilityBonuses.contains(attribute))
                return 2;
            if (this.selectedRace.abilityPenalty.contains(attribute))
                return -2;
        },
        //Class .
        selectedClass: undefined,
        _selectedClassSetter: function (value) {
            this.selectedClass = value;
            this._komClassOverride = undefined;
            this._kdmClassOverride = undefined;
            this._savesOverride = {};
        },
        _komClassOverride: undefined,
        _kdmClassOverride: undefined,
        _savesOverride: {},
        _getKOM: function () {
            if (this.selectedRace.racialTrack)
                return this.selectedRace.racialTrack.kom;
            if (this._komClassOverride)
                return this._komClassOverride;
            return this.selectedClass.kom;
        },
        _getKDM: function () {
            if (this.selectedRace.racialTrack)
                return this.selectedRace.racialTrack.kdm;
            if (this._kdmClassOverride)
                return this._kdmClassOverride;
            return this.selectedClass.kdm;
        },
        slowTrack: undefined,
        mediumTrack: undefined,
        fastTrack: undefined,
        fullBuyInTrack: undefined,
        //Character Sheet Info
        _getAttribute: function (attribute) {
            return this[attribute] + this._getRaceMod(attribute)
        },
        Str: 8,
        _StrGetter: function () {
            return this._getAttribute("Str");
        },
        Con: 8,
        _ConGetter: function () {
            return this._getAttribute("Con");
        },
        Dex: 8,
        _DexGetter: function () {
            return this._getAttribute("Dex");
        },
        Int: 8,
        _IntGetter: function () {
            return this._getAttribute("Int");
        },
        Wis: 8,
        _WisGetter: function () {
            return this._getAttribute("Wis");
        },
        Cha: 8,
        _ChaGetter: function () {
            return this._getAttribute("Cha");
        },

    });
    return new _CurrentCharacter();
});