[
	{
	    "id": "dwarf", 
	    "name": "Dwarf",
	    "abilityBonuses": ["Con", "Int"],
        "abilityPenalty": "Cha",
	    "size": "Average",
	    "type": "Humanoid",
	    "bonuses": [ 
	        [ "skillBonus", "Engineering"],
	        [ "extraVision", "[Darkvision]"]
	    ],
	    "bonusFeats": [
		    "Livers Need Not Apply", 
		    "Slow and Steady", 
		    "Rune Magic"
	    ]
	},
	{
	    "id": "elf", 
	    "name": "Elf",
	    "abilityBonuses": [ "Dex", ["Int", "Wis", "Cha"]],
        "abilityPenalty": "Con",
	    "size": "Average",
	    "type": "Humanoid",
	    "bonuses": [ 
	        [ "skillBonus", "Nature" ],
	        [ "extraVision", "[Ghostwise sight] 45 ft" ]
	    ],
	    "bonusFeats": [
		    "By Will Sustained", 
		    "Arcantric Accuracy", 
		    "Summon Mote"
	    ]
	},
	{
	    "id": "gnome", 
	    "name": "Gnome",
	    "abilityBonuses": ["Con", "Cha"],
	    "abilityPenalty": "Str",
	    "size": "Small",
	    "type": "Humanoid",
	    "bonuses": [
	        [ "skillBonus", "Diplomacy" ],
	        [ "extraVision", "[Darkvision]" ]
	    ],
	    "bonusFeats": [
		    "Chatty  Bugger",
		    "Summon Mote", 
		    "The Bigger They Are"
	    ]
	},
	{
	    "id": "halfling", 
	    "name": "Halfling",
	    "abilityBonuses": ["Dex", ""],
	    "abilityPenalty": "",
	    "size": "Small",
	    "type": "Humanoid",
	    "bonuses": [
	        [ "saveBonus", "Will" ],
	        [ "speed", "30" ]
	    ],
	    "bonusFeats": "Any"
	},
	{
	    "id": "human", 
	    "name": "Human",
	    "abilityBonuses": [["Str", "Con", "Dex", "Wis", "Int", "Cha"], ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Humanoid",
	    "bonuses": [ 
	        [ "skillBonus", "any one skill" ],
	        [ "raceBonus", ["attack rolls", "Armor Class", "Will", "Reflex", "Fortitude"] ]
	    ],
	    "bonusFeats": "Any"
	},
	{
	    "id": "orc", 
	    "name": "Orc",
	    "abilityBonuses": ["Con", "Str"],
	    "abilityPenalty": "Cha",
	    "size": "Average",
	    "type": "Humanoid",
	    "bonuses": [
	        [ "skillBonus", "Athletics" ],
	        [ "extraVision", "[Darkvision]" ]
	    ],
	    "bonusFeats": [
		    "Reckless Strike",
		    "To Iron Married", 
		    "Cataphract"
	    ]
	},
	{
	    "id": "celestial", 
	    "name": "Celestial",
	    "abilityBonuses": ["Wis", ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Outsider",
	    "bonuses": [
	        [ "resistance", "Fire" ],
	        [ "extraVision", "[Darkvision]" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Fort", "Will"],
	        "lowSave": "Ref"
	    }
	},
	{
	    "id": "demon", 
	    "name": "Demon",
	    "abilityBonuses": [["Str", "Con", "Dex", "Wis", "Int", "Cha"], ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Outsider",
	    "bonuses": [
	        [ "resistance", "Electricity" ],
	        [ "extraVision", "[Darkvision]" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Ref", "Will"],
	        "lowSave": "Fort"
	    }
	},
	{
	    "id": "dragonAverage", 
	    "name": "Dragon (Average)",
	    "abilityBonuses": ["Cha", ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Magical beast",
	    "bonuses": [
	        [ "extraVision", "[Darkvision]" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Any", "Any"],
	        "lowSave": "Any"
	    }
	},
	{
	    "id": "dragonLarge", 
	    "name": "Dragon (Large)",
	    "abilityBonuses": ["Cha", ""],
	    "abilityPenalty": "",
	    "size": "Large",
	    "type": "Magical beast",
	    "bonuses": [
	        [ "extraVision", "[Darkvision]" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Any", "Any"],
	        "lowSave": "Any"
	    }
	},
	{
	    "id": "sentientConstruct", 
	    "name": "Sentient Construct",
	    "abilityBonuses": [["Dex", "Int"], "Con"],
	    "abilityPenalty": "Cha",
	    "size": "Average",
	    "type": "Construct",
	    "bonuses": [
	        [ "extraVision", "[Darkvision]" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Fort", "Will"],
	        "lowSave": "Ref"
	    }
	},
	{
	    "id": "undeadGhoul", 
	    "name": "Undead (Ghoul)",
	    "abilityBonuses": ["Str", "Con"],
	    "abilityPenalty": "Wis",
	    "size": "Average",
	    "type": "Undead",
	    "bonuses": [
	        [ "extraVision", "[Ghostwise sight] 45 ft" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Fort", "Will"],
	        "lowSave": "Ref"
	    }
	},
	{
	    "id": "undeadLich", 
	    "name": "Undead (Lich)",
	    "abilityBonuses": [["Int", "Wis"], ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Undead",
	    "bonuses": [
	        [ "extraVision", "[Ghostwise sight] 45 ft" ],
	        [ "skillBonus", "Arcana" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Fort", "Will"],
	        "lowSave": "Ref"
	    }
	},
	{
	    "id": "undeadMummy", 
	    "name": "Undead (Mummy)",
	    "abilityBonuses": ["Cha", ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Undead",
	    "bonuses": [
	        [ "extraVision", "[Ghostwise sight] 45 ft" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Fort", "Will"],
	        "lowSave": "Ref"
	    }
	},
	{
	    "id": "undeadSkeletonChampion", 
	    "name": "Undead (Skeleton Champion)",
	    "abilityBonuses": [["Str", "Dex", "Con"], ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Undead",
	    "bonuses": [
	        [ "extraVision", "[Ghostwise sight] 45 ft" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Fort", "Will"],
	        "lowSave": "Ref"
	    }
	},
	{
	    "id": "undeadVampire", 
	    "name": "Undead (Vampire)",
	    "abilityBonuses": [["Int", "Wis", "Cha", "Dex", "Str", "Con"], ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Undead",
	    "bonuses": [
	        [ "skillBonus", "Arcana" ]
	    ],
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
	        "bab": "High",
	        "highSaves": ["Fort", "Will"],
	        "lowSave": "Ref"
	    }
	},
	{
	    "id": "utterBruteSmall", 
	    "name": "Utter Brute (Small)",
	    "abilityBonuses": ["Con", ""],
	    "abilityPenalty": "",
	    "size": "Small",
	    "type": "Varies",
	    "bonuses": [
	        [ "extraVision", "[Darkvision]" ]
	    ],
	    "bonusFeats": "Weaponized",
	    "racialTrack": {
	        "hp": 12,
	        "skills": 4,
	        "kom": "Con",
	        "kdm": "Str",
	        "bab": "High",
	        "highSaves": ["Fort", "Any"],
	        "lowSave": "Any"
	    }
	},
	{
	    "id": "utterBruteAverage", 
	    "name": "Utter Brute (Average)",
	    "abilityBonuses": ["Con", ""],
	    "abilityPenalty": "",
	    "size": "Average",
	    "type": "Varies",
	    "bonuses": [
	        [ "extraVision", "[Darkvision]" ]
	    ],
	    "bonusFeats": "Weaponized",
	    "racialTrack": {
	        "hp": 12,
	        "skills": 4,
	        "kom": "Con",
	        "kdm": "Str",
	        "bab": "High",
	        "highSaves": ["Fort", "Any"],
	        "lowSave": "Any"
	    }
	},
	{
	    "id": "utterBruteLarge", 
	    "name": "Utter Brute (Large)",
	    "abilityBonuses": ["Con", ""],
	    "abilityPenalty": "",
	    "size": "Large",
	    "type": "Varies",
	    "bonuses": [
	        [ "extraVision", "[Darkvision]" ]
	    ],
	    "bonusFeats": "Weaponized",
	    "racialTrack": {
	        "hp": 12,
	        "skills": 4,
	        "kom": "Con",
	        "kdm": "Str",
	        "bab": "High",
	        "highSaves": ["Fort", "Any"],
	        "lowSave": "Any"
	    }
	}
]