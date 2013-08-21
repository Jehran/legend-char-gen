define([], function () {
    return [
		{
		    "id": "dwarf",
		    "name": "Dwarf",
		    "attributeBonuses": ["Con", "Int"],
		    "attributePenalty": "Cha",
		    "size": "Average",
		    "type": "Humanoid",
		    "bonuses": {
		        "skillBonus": "Engineering",
		        "extraVision": "[Darkvision]"
		    },
		    "bonusFeats": [
				"Livers Need Not Apply",
				"Slow and Steady",
				"Rune Magic"
		    ]
		},
		{
		    "id": "elf",
		    "name": "Elf",
		    "attributeBonuses": ["Dex", ["Int", "Wis", "Cha"]],
		    "attributePenalty": "Con",
		    "size": "Average",
		    "type": "Humanoid",
		    "bonuses": {
		        "skillBonus": "Nature",
		        "extraVision": "[Ghostwise sight] 45 ft"
		    },
		    "bonusFeats": [
				"By Will Sustained",
				"Arcantric Accuracy",
				"Summon Mote"
		    ]
		},
		{
		    "id": "gnome",
		    "name": "Gnome",
		    "attributeBonuses": ["Con", "Cha"],
		    "attributePenalty": "Str",
		    "size": "Small",
		    "type": "Humanoid",
		    "bonuses": {
		        "skillBonus": "Diplomacy",
		        "extraVision": "[Darkvision]"
		    },
		    "bonusFeats": [
				"Chatty  Bugger",
				"Summon Mote",
				"The Bigger They Are"
		    ]
		},
		{
		    "id": "halfling",
		    "name": "Halfling",
		    "attributeBonuses": ["Dex", ""],
		    "attributePenalty": "",
		    "size": "Small",
		    "type": "Humanoid",
		    "bonuses": {
		        "saveBonus": "Will",
		        "speed": "30"
		    },
		    "bonusFeats": "Any"
		},
		{
		    "id": "human",
		    "name": "Human",
		    "attributeBonuses": [["Str", "Con", "Dex", "Wis", "Int", "Cha"], ""],
		    "attributePenalty": "",
		    "size": "Average",
		    "type": "Humanoid",
		    "bonuses": {
		        "skillBonus": "any one skill",
		        "raceBonus": ["attack rolls", "Armor Class", "Will", "Reflex", "Fortitude"]
		    },
		    "bonusFeats": "Any"
		},
		{
		    "id": "orc",
		    "name": "Orc",
		    "attributeBonuses": ["Con", "Str"],
		    "attributePenalty": "Cha",
		    "size": "Average",
		    "type": "Humanoid",
		    "bonuses": {
		        "skillBonus": "Athletics",
		        "extraVision": "[Darkvision]"
		    },
		    "bonusFeats": [
				"Reckless Strike",
				"To Iron Married",
				"Cataphract"
		    ]
		},
		{
		    "id": "celestial",
		    "name": "Celestial",
		    "attributeBonuses": ["Wis", ""],
		    "attributePenalty": "",
		    "size": "Average",
		    "type": "Outsider",
		    "bonuses": {
		        "resistance": "Fire",
		        "extraVision": "[Darkvision]"
		    },
		    "bonusFeats": [
				"The Sun Grows Dim",
				"Lightbender Adept",
				"Summon Mote"
		    ],
		    "racialTrack": {
		        "hp": 8,
		        "skills": 6,
		        "kom": "Wis",
		        "kdm": "Str",
		        "ab": "High",
		        "goodSaves": ["Fort", "Will"],
		        "poorSave": "Ref"
		    }
		},
		{
		    "id": "demon",
		    "name": "Demon",
		    "attributeBonuses": [["Str", "Con", "Dex", "Wis", "Int", "Cha"], ""],
		    "attributePenalty": "",
		    "size": "Average",
		    "type": "Outsider",
		    "bonuses": {
		        "resistance": "Electricity",
		        "extraVision": "[Darkvision]"
		    },
		    "bonusFeats": [
				"By Will Sustained",
				"Shadow Blink",
				"The Earth Cracks"
		    ],
		    "racialTrack": {
		        "hp": 8,
		        "skills": 6,
		        "kom": "Cha",
		        "kdm": "Con",
		        "ab": "High",
		        "goodSaves": ["Ref", "Will"],
		        "poorSave": "Fort"
		    }
		},
		{
		    "id": "dragon",
		    "name": "Dragon",
		    "attributeBonuses": ["Cha", ""],
		    "attributePenalty": "",
		    "size": ["Average", "Large"],
		    "type": "Magical beast",
		    "bonuses": {
		        "extraVision": "[Darkvision]"
		    },
		    "bonusFeats": [
				"You Will Falter",
				"Open Lesser Binding",
				"The Earth Cracks"
		    ],
		    "racialTrack": {
		        "hp": 10,
		        "skills": 5,
		        "kom": "Str",
		        "kdm": "Cha",
		        "ab": "High",
		        "goodSaves": ["Any", "Any"],
		        "poorSave": "Any"
		    }
		},
		{
		    "id": "sentientConstruct",
		    "name": "Sentient Construct",
		    "attributeBonuses": [["Dex", "Int"], "Con"],
		    "attributePenalty": "Cha",
		    "size": "Average",
		    "type": "Construct",
		    "bonuses": {
		        "extraVision": "[Darkvision]"
		    },
		    "bonusFeats": [
				"Wake",
				"Recon",
				"By Will Sustained"
		    ],
		    "racialTrack": {
		        "hp": 10,
		        "skills": 5,
		        "kom": "Int",
		        "kdm": "Dex",
		        "ab": "High",
		        "goodSaves": ["Fort", "Will"],
		        "poorSave": "Ref"
		    }
		},
		{
		    "id": "undeadGhoul",
		    "name": "Undead (Ghoul)",
		    "attributeBonuses": ["Str", "Con"],
		    "attributePenalty": "Wis",
		    "size": "Average",
		    "type": "Undead",
		    "bonuses": {
		        "extraVision": "[Ghostwise sight] 45 ft"
		    },
		    "bonusFeats": [
				"Feign Death",
				"Ghoulish Enthusiasm",
				"Wake"
		    ],
		    "racialTrack": {
		        "hp": 10,
		        "skills": 5,
		        "kom": "Str",
		        "kdm": "Con",
		        "ab": "High",
		        "goodSaves": ["Fort", "Will"],
		        "poorSave": "Ref"
		    }
		},
		{
		    "id": "undeadLich",
		    "name": "Undead (Lich)",
		    "attributeBonuses": [["Int", "Wis"], ""],
		    "attributePenalty": "",
		    "size": "Average",
		    "type": "Undead",
		    "bonuses": {
		        "extraVision": "[Ghostwise sight] 45 ft",
		        "skillBonus": "Arcana"
		    },
		    "bonusFeats": [
				"Lich's Wrath",
				"Shafekeeper Adept",
				"The Sun Grows Dim"
		    ],
		    "racialTrack": {
		        "hp": 10,
		        "skills": 5,
		        "kom": "Int",
		        "kdm": "Wis",
		        "ab": "High",
		        "goodSaves": ["Fort", "Will"],
		        "poorSave": "Ref"
		    }
		},
		{
		    "id": "undeadMummy",
		    "name": "Undead (Mummy)",
		    "attributeBonuses": ["Cha", ""],
		    "attributePenalty": "",
		    "size": "Average",
		    "type": "Undead",
		    "bonuses": {
		        "extraVision": "[Ghostwise sight] 45 ft"
		    },
		    "bonusFeats": [
				"Keep Them In Line",
				"One a Pale Horse",
				"Terrifying Shout"
		    ],
		    "racialTrack": {
		        "hp": 10,
		        "skills": 5,
		        "kom": "Str",
		        "kdm": "Cha",
		        "ab": "High",
		        "goodSaves": ["Fort", "Will"],
		        "poorSave": "Ref"
		    }
		},
		{
		    "id": "undeadSkeletonChampion",
		    "name": "Undead (Skeleton Champion)",
		    "attributeBonuses": [["Str", "Dex", "Con"], ""],
		    "attributePenalty": "",
		    "size": "Average",
		    "type": "Undead",
		    "bonuses": {
				"extraVision": "[Ghostwise sight] 45 ft"
            },
			"bonusFeats": [
				"By Will Sustained",
				"Skeleton King",
				"Any [Weapon] feat"
			],
			"racialTrack": {
				"hp": 10,
				"skills": 5,
				"kom": "Str",
				"kdm": ["Dex", "Int"],
				"ab": "High",
				"goodSaves": ["Fort", "Will"],
				"poorSave": "Ref"
			}
		},
		{
			"id": "undeadVampire",
			"name": "Undead (Vampire)",
			"attributeBonuses": [["Int", "Wis", "Cha", "Dex", "Str", "Con"], ""],
			"attributePenalty": "",
			"size": "Average",
			"type": "Undead",
			"bonuses": {
			    "skillBonus": "Arcana"
			},
			"bonusFeats": [
				"Blood Thirst",
				"Exit, Stage Left",
				"Breakneck Pace"
			],
			"racialTrack": {
				"hp": 10,
				"skills": 5,
				"kom": "Dex",
				"kdm": "Cha",
				"ab": "High",
				"goodSaves": ["Fort", "Will"],
				"poorSave": "Ref"
			}
		},
		{
			"id": "utterBrute",
			"name": "Utter Brute",
			"attributeBonuses": ["Con", ""],
			"attributePenalty": "",
			"size": ["Small", "Average", "Large"],
			"type": "Varies",
			"bonuses": {
			    "extraVision": "[Darkvision]"
			},
			"bonusFeats": "Weaponized",
			"racialTrack": {
				"hp": 12,
				"skills": 4,
				"kom": "Con",
				"kdm": "Str",
				"ab": "High",
				"goodSaves": ["Fort", "Any"],
				"poorSave": "Any"
			}
		}
	];
});