define([
    "dojo/_base/declare", 
    "dojo/Stateful", 
    "./advancementService", 
    "./skillService",
    "dojo/_base/lang"],
    function (declare, Stateful, advancementService, skillService, lang) {
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
        _speedGetter: function () {
            if (this.selectedRace.bonuses.speed)
                return this.selectedRace.bonuses.speed;
            
            switch (this._size) {
                case "Small":
                    return 25;
                case "Average":
                    return 30;
                case "Large":
                case "Huge":
                    return 35;
                default:
                    return 30;
            }
        },
        _typeGetter: function () {
            return this.selectedRace.type;
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
        _komGetter: function () {
            return this._getAttributeMod(this.get(this.getKOM()));
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
        _kdmGetter: function () {
            return this._getAttributeMod(this.get(this.getKDM()));
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
            this.set("", "");
        },
        getCircleChoice: function(circleName) {
            return this._circleChoices[circleName];
        },
        _getCirclesInTrack: function (type) {
            var circles = [];
            var num = advancementService.getNumberOfCircles(type, this.level);
            var track = this[type + "Track"];
            for (var i = 0; i < num; i++) {
                var circle = track.circles[i];
                if (circle.choice) {
                    var choice = circle.choice[0];
                    for (var j = 0; j < circle.choice.length; j++) {
                        if (circle.choice[j].name == this.getCircleChoice(circle.name)) {
                            choice = circle.choice[j];
                            break;
                        }
                    }
                    circle = {
                        name: circle.name,
                        text: circle.text,
                        options: [{ name: choice.name, text: choice.text }]
                    };
                }
                circles.push(circle);
            }
            return circles;
        },
        getCircles: function () {
            return this._getCirclesInTrack("fast").concat(this._getCirclesInTrack("medium")).concat(this._getCirclesInTrack("slow"));
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
        getSkill: function (skill) {
            var attrBonus = this._getAttributeMod(this._getAttribute(skillService.getAttribute(skill)));
            if (this.isSkillTrained(skill))
                return this.level + attrBonus;
            return attrBonus;
        },
        isSkillTrained: function (skill) {
            return this._skills.indexOf(skill) >= 0;
        },
        //Character Sheet Info
        _getAttribute: function (attribute) {
            return this[attribute] + this.getRaceMod(attribute)
        },
        _getAttributeMod: function(attribute) {
            return Math.floor((attribute - 10) / 2);
        },
        Str: 8,
        _StrGetter: function () {
            return this._getAttribute("Str");
        },
        _StrSetter: function (value) {
            this.Str = value;
        },
        _StrModGetter: function() {
            return this._getAttributeMod(this.get("Str"));
        },
        Con: 8,
        _ConGetter: function () {
            return this._getAttribute("Con");
        },
        _ConSetter: function (value) {
            this.Con = value;
        },
        _ConModGetter: function () {
            return this._getAttributeMod(this.get("Con"));
        },
        Dex: 8,
        _DexGetter: function () {
            return this._getAttribute("Dex");
        },
        _DexSetter: function (value) {
            this.Dex = value;
        },
        _DexModGetter: function () {
            return this._getAttributeMod(this.get("Dex"));
        },
        Int: 8,
        _IntGetter: function () {
            return this._getAttribute("Int");
        },
        _IntSetter: function (value) {
            this.Int = value;
        },
        _IntModGetter: function () {
            return this._getAttributeMod(this.get("Int"));
        },
        Wis: 8,
        _WisGetter: function () {
            return this._getAttribute("Wis");
        },
        _WisSetter: function (value) {
            this.Wis = value;
        },
        _WisModGetter: function () {
            return this._getAttributeMod(this.get("Wis"));
        },
        Cha: 8,
        _ChaGetter: function () {
            return this._getAttribute("Cha");
        },
        _ChaSetter: function (value) {
            this.Cha = value;
        },
        _ChaModGetter: function () {
            return this._getAttributeMod(this.get("Cha"));
        },
        _initiativeGetter: function () {
            return this.get("DexMod");
        },
        _combatManeuverDCGetter: function () {
            return Math.floor(10 + this.level / 2 + Math.max(this.get("DexMod"), this.get("StrMod")));
        },
        _hpGetter: function () {
            return (this.get("kdm") + this.selectedClass.hp) * (this.level + 1);
        },
        _babGetter: function () {
            return advancementService.getAb(this.selectedClass.ab, this.level);
        },
        _acGetter: function () {
            return 10 + this.get("kdm") + this.get("bab");
        },
        _getBaseSave: function (save) {
            var type = "Poor";
            if (this.selectedRace.racialTrack) {
                if (this.selectedRace.racialTrack.goodSaves.indexOf(save) >= 0)
                    type = "Good";
            }
            else {
                if (this.selectedClass.goodSaves.indexOf(save) >= 0)
                    type = "Good";
            }
            return advancementService.getSave(type, this.level);
        },
        _fortGetter: function () {
            return this._getBaseSave("Fort") + Math.max(this.get("ConMod"), this.get("StrMod"));
        },
        _reflexGetter: function () {
            return this._getBaseSave("Ref") + Math.max(this.get("IntMod"), this.get("DexMod"));
        },
        _willGetter: function () {
            return this._getBaseSave("Will") + Math.max(this.get("WisMod"), this.get("ChaMod"));
        },
        _awarenessGetter: function () {
            return 10 + this.level + this.get("WisMod");
        },
        _bluffDefenseGetter: function () {
            return 10 + this.level + this.get("WisMod");
        },
        _diplomacyDefenseGetter: function () {
            return 10 + this.level + this.get("IntMod");
        },
        _intimidateDefenseGetter: function () {
            return 10 + this.level + this.get("ChaMod");
        },
        _perceptionDefenseGetter: function () {
            return 10 + this.level + this.get("ChaMod");
        }

    });
    return new _CurrentCharacter();
});