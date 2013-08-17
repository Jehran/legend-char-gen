﻿define(["dojo/_base/declare", "dojo/Stateful"], function (declare, Stateful) {
    var _CurrentCharacter = declare([Stateful], {
        //Basic Info
        playerName: "",
        characterName: "",
        level: 1,
        //Race Options
        selectedRace: undefined,
        _selectedRaceSetter: function (value) {
            this.selectedRace = value;
            this._raceAttributeOverride = [];
            this._raceBonusOverrides = [];
            this._size = Array.isArray(value.size) ? value.size[0] : value.size;
        },
        _size: undefined,
        _sizeSetter: function (value) { this._size = value; },
        _sizeGetter: function () { return this._size; },
        _raceAttributeOverride: [],
        _raceAttributeOverrideSetter: function (data) {
            this._raceAttributeOverride = [ data.attr, data.value ];
        },
        _raceAttributeOverrideGetter: function () {
            return { attr: this._raceAttributeOverride[0], value: this._raceAttributeOverride[1] };
        },
        _raceBonusOverrides: [],
        getRaceMod: function (attribute) {
            if (this._raceAttributeOverride[0] == attribute)
                return this._raceAttributeOverride[1];
            if (this.selectedRace.attributeBonuses.indexOf(attribute) >= 0)
                return 2;
            if (this.selectedRace.attributePenalty.indexOf(attribute) >= 0)
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
            if (newValue.komOverride && newValue.komOverride != this.getKDM())
                this._komTrackOverride = newValue.komOverride;
            if (newValue.kdmOverride && newValue.kdmOverride != this.getKOM())
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
        _circleChoices: {},
        addCircleChoice: function (circleName, choiceName) {
            this._circleChoices[circleName] = choiceName;
        },
        getCircleChoice: function(circleName) {
            return this._circleChoices[circleName];
        },
        fullBuyInTrack: undefined,
        //Skills
        getNumberOfSkills: function() {
            if (this.selectedRace.racialTrack)
                return this.selectedRace.racialTrack.skills;
            return this.selectedClass.skills;
        },
        _skills: [],
        _skillsSetter: function (value) { this._skills = value; },
        _skillsGetter: function (value) { return this._skills; },
        isSkillTrained: function (skill) {
            return this._skills.indexOf(skill) >= 0;
        },
        //Character Sheet Info
        _getAttribute: function (attribute) {
            return this[attribute] + this.getRaceMod(attribute)
        },
        Str: 8,
        _StrGetter: function () {
            return this._getAttribute("Str");
        },
        _StrSetter: function (value) {
            this.Str = value;
        },
        Con: 8,
        _ConGetter: function () {
            return this._getAttribute("Con");
        },
        _ConSetter: function (value) {
            this.Con = value;
        },
        Dex: 8,
        _DexGetter: function () {
            return this._getAttribute("Dex");
        },
        _DexSetter: function (value) {
            this.Dex = value;
        },
        Int: 8,
        _IntGetter: function () {
            return this._getAttribute("Int");
        },
        _IntSetter: function (value) {
            this.Int = value;
        },
        Wis: 8,
        _WisGetter: function () {
            return this._getAttribute("Wis");
        },
        _WisSetter: function (value) {
            this.Wis = value;
        },
        Cha: 8,
        _ChaGetter: function () {
            return this._getAttribute("Cha");
        },
        _ChaSetter: function (value) {
            this.Cha = value;
        }

    });
    return new _CurrentCharacter();
});