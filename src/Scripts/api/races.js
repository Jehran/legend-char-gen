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
	        "highSaves": ["Fort", "Ref"],
	        "lowSave": "Ref"
	    }
	}
]