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
        getRaceMod: function (attribute) {
            if (this._raceAbilityOverrides[attribute])
                return this._raceAbilityOverrides[attribute];
            if (this.selectedRace.abilityBonuses.indexOf(attribute) >= 0)
                return 2;
            if (this.selectedRace.abilityPenalty.indexOf(attribute) >= 0)
                return -2;
            return 0;
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
        _komTrackOverride: undefined,
        _kdmClassOverride: undefined,
        _kdmTrackOverride: undefined,
        _savesOverride: {},
        getKOM: function () {
            if (this._komTrackOverride)
                return this._komTrackOverride;
            if (this.selectedRace.racialTrack)
                return this.selectedRace.racialTrack.kom;
            if (this._komClassOverride)
                return this._komClassOverride;
            return this.selectedClass.kom;
        },
        getKDM: function () {
            if (this._kdmTrackOverride)
                return this._kdmTrackOverride;
            if (this.selectedRace.racialTrack)
                return this.selectedRace.racialTrack.kdm;
            if (this._kdmClassOverride)
                return this._kdmClassOverride;
            return this.selectedClass.kdm;
        },
        _checkTrack: function (oldValue, newValue) {
            if (oldValue) {
                if (oldValue.komOverride)
                    this._komTrackOverride = undefined;
                if (oldValue.kdmOverride)
                    this._kdmTrackOverride = undefined;
            }
            if (newValue.komOverride)
                this._komTrackOverride = newValue.komOverride;
            if (newValue.kdmOverride)
                this._kdmTrackOverride = newValue.kdmOverride;
        },
        slowTrack: undefined,
        _slowTrackSetter: function (track) {
            this._checkTrack(this.slowTrack, track);
            this.slowTrack = track;
        },
        mediumTrack: undefined,
        _mediumTrackSetter: function (track) {
            this._checkTrack(this.mediumTrack, track);
            this.mediumTrack = track;
        },
        fastTrack: undefined,
        _fastTrackSetter: function (track) {
            this._checkTrack(this.fastTrack, track);
            this.fastTrack = track;
        },
        fullBuyInTrack: undefined,
        //Character Sheet Info
        _getAttribute: function (attribute) {
            return this[attribute] + this.getRaceMod(attribute)
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