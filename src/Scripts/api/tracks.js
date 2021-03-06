﻿define([], function () {
	return [
		{
			"name": "Rage",
			"komOverride": "Str",
			"type": "barbarian",
			"circles": [
				{ "name": "Rage", "text": "You channel the barbarian rage, a state where you gain heightened morale and physical prowess. As a swift action, if you are not [Fatigued], [Exhausted], or in a rage, you can enter a rage, which lasts for a maximum number of [Rounds] equal to 3 + your Constitution modifier (if positive). While in a rage, you gain a +1 bonus per circle you possess from this track to attack rolls and damage you deal with attacks, and a +1 bonus to combat maneuver DCs and Fortitude and Will saves. When you enter a rage, you also gain 2 temporary HP per level. These temporary HP are lost when your rage ends. You can always prematurely end your rage as a free action. When your rage ends (either before the beginning of your turn due to its duration running out, or on your turn due to your ending it prematurely), you become [Fatigued] for as many [Rounds] as you spent raging (minimum 1), and you cannot begin a rage on either the turn it ends or on your following turn." },
				{ "name": "Powerful Rage", "text": "Your rage gives you unusual physical ability equal to a creature much larger than yourself. You gain a +2 item bonus to Strength. While in a rage, your size becomes [Large] (if you are not already [Large] or [Huge], you gain the normal +5 ft bonus to your movement speed, +2 bonus to saves against combat maneuvers, and 5 ft bonus to your [Melee] range associated with the [Large] size). While in a rage, you do not suffer any of the normal penalties of being [Large], even if you’re normally [Large]." },
				{ "name": "Intimidating Rage", "text": "Once per [Encounter], when you enter a rage, you can attempt to intimidate a single opponent within 30 ft as a free action (as per the in-combat use of the Intimidate skill). If your intimidate attempt succeeds, that opponent becomes [Shaken] until the end of the [Encounter]. In addition, your bonus to combat maneuver DCs while raging increases to +2." },
				{
					"name": "Greater Rage",
					"text": "Your rage increases in potency. You gain 4 temporary HP per level when you rage instead of 2, and your bonuses to Fortitude and Will saves from Rage increase to +2.",
					"choice": [
						{ "name": "Hurling Charge", "text": "While raging, after making a melee attack as part of the Charge combat maneuver, you can use a ranged weapon in your possession to make a single ranged attack. This does not provoke an attack of opportunity. You can treat any square you moved into as part of the Charge combat maneuver as a square you occupy for purposes of the range, line of effect and line of sight of this attack." },
						{ "name": "Momentum Charge", "text": "While raging, if you use the Charge combat maneuver and your melee attack hits, you may immediately attempt the Bull Rush combat maneuver against the opponent hit. If your Bull Rush attempt succeeds, you may deal damage equal to your Key Offensive Modifier to that opponent." }
					]
				},
				{ "name": "Stubborn Rage", "text": "While in a rage, you possess [Immunity] to effects with the [Mind-affecting] descriptor. In addition, your bonus to combat maneuver DCs while raging increases to +3." },
				{ "name": "Mighty Rage", "text": "The power of your rage increases again. You gain 6 temporary HP per level when you rage instead of 4, and the bonus to Fortitude and Will saves increases to +4." },
				{ "name": "Heart of Fury", "text": "You are always considered “raging.” You can activate the Intimidating Rage ability once per [Encounter] as a swift action. At the beginning of an [Encounter], you gain temporary HP (as per Mighty Rage), and no less than 2 [Rounds] after gaining temporary HP from this ability, you may gain a new set of temporary HP as a swift action." }
			]
		},
		{
			"name": "Dervish",
			"komOverride": "Dex",
			"type": "barbarian",
			"circles": [
				{ "name": "War Dance", "text": "You can whip yourself into a war dance, a state in which you gain heightened morale and maneuverability. As a swift action, if you are not [Fatigued], [Exhausted], or in a war dance, you can enter a war dance, which lasts for a maximum number of [Rounds] equal to 3 + your Constitution modifier (if positive). While in this war dance you gain a +1 bonus to attack rolls, damage you deal with attacks, and Acrobatics checks per circle you possess from this track, a +1 bonus to Reflex and Will saves, and a +2 bonus to saves against combat maneuvers. You can always prematurely end your war dance as a free action.When your war dance ends (either before the beginning of your turn due to its duration running out, or on your your turn due to your ending it prematurely) you cannot begin a war dance on either the turn it ends or on your following turn. In addition, you are [Fatigued] for as many [Rounds] as you spent war dancing (minimum 1)." },
				{ "name": "Frenzied Strikes", "text": "Your frantic movements become more focused and lethal. While in a war dance, you gain a [Bonus attack] whenever you take an attack action and you gain a 5 ft bonus to your movement speed, which increases to 10 ft at 4th circle and 15 ft at 6th circle." },
				{ "name": "Razor Wind", "text": "Your whirling attacks amaze friend and foe alike, leaving vicious wounds at blinding speed. You gain a +2 bonus to Acrobatics checks. The first hit with an attack you make against each opponent each [Round] inflicts the [Burning] and [Bleeding] conditions on that opponent." },
				{
					"name": "Greater War Dance",
					"text": "Your war dance increases in potency, and you become adept at avoiding the sharp pointy bits of metal other people want to stick in you. Your bonuses to Reflex and Will saves while in a war dance increase to +2. While in a war dance, you gain 20% [Miss chance]. ",
					"choice": [
						{ "name": "Cloaked Dance", "text": "While in a war dance, you can use the Surprising an Opponent function of the Acrobatics skill as part of a move action without halving your movement speed. Additionally, whenever you deal damage to a [Flat-footed] opponent, you deal additional damage equal to your KOM." },
						{ "name": "Tendon Sever", "text": "While in a war dance, any time you hit a [Flat-footed] opponent with an attack, you inflict the [Entangled] condition on that opponent for one [Round]." }
					]
				},
				{ "name": "Unstoppable War Dance", "text": "While in a war dance, you gain [Immunity] to [Binding] effects, and moving out of a square of difficult terrain does not cost you extra movement." },
				{ "name": "Whirling War Dance", "text": "Your war dance has reached the point where you are little more than a terrifying tempest of blades. Your bonuses to Reflex and Will saves while in a war dance increase to +4. Your ability to avoid damage increases as well, granting a 30% [Miss chance] while you are in a war dance." },
				{ "name": "Dance of the Endless Blades", "text": "Your war dance is a primal thing of terrible wrath and frightening beauty. Any time you hit a [Bleeding] opponent with an attack, they are [Battered] for the [Encounter].Additionally, while in a war dance, as a move action and a standard action, you move up to twice your movement speed without provoking attacks of opportunity. You may take an attack action during this movement, and may divide all of the attacks you are entitled to among any targets who were within [Melee] range at any point during your movement. Finally, you may enter your war dance as a free action." }
			]
		},
		{
			"name": "Path of Destruction",
			"type": "barbarian",
			"circles": [
				{ "name": "Cleave", "text": "Once per [Round], as a swift action, when you hit an opponent with a melee attack and deal damage to that opponent with that attack, you may compare your attack roll from that attack to the AC of another target opponent within [Melee] range. If the attack roll equals or exceeds that opponent’s AC, you deal that much damage to that opponent." },
				{ "name": "Whirlwind", "text": "If you would make one or more melee attacks during your standard action, you may add the [Volley] descriptor to a single one of those attacks; this attack with the [Volley] descriptor is applied against every opponent in [Melee] range." },
				{ "name": "Disrupting Presence", "text": "You are a living force of entropy, and creatures who attempt mental focus close to you suffer the consequences. Any opponent who activates a spell, spell-like, or supernatural ability within your [Melee] range takes damage equal to your character level. " },
				{ "name": "Terrifying Presence", "text": "At the beginning of your turn, opponents within your [Melee] range must make a Will save (DC 10 + ½ your level + your Charisma modifier) every [Round] or become [Shaken]. This application of the [Shaken] condition doesn’t stack with itself, but stacks normally with other [Fear] effects. This is a [Mindaffecting] [Fear] effect." },
				{ "name": "Path of Blades", "text": "When you use the Charge maneuver, you can make a single additional attack with the [Volley] descriptor as you make the Charge; this attack with the [Volley] descriptor is applied to all opponents within [Melee] range of squares you move into as part of the Charge. This attack deals damage equal to three times your KOM." },
				{ "name": "Greater Cleave", "text": "Activating Cleave no longer requires a swift action, and it can be used any number of times per [Round]." },
				{ "name": "Deadly Presence", "text": "When an opponent begins their turn within your [Melee] range, it takes damage equal to your level + your Key Offensive Modifier and is [Battered] for one [Round]. This ability can be turned on or off as a swift action." }
			]
		},
		{
			"name": "Path of the Ancestors",
			"type": "barbarian",
			"circles": [
				{
					"name": "Lineage",
					"text": "Any effect that would heal you but does not originate from you heals 1 extra point of damage for every level you possess.",
					"choice": [
						{ "name": "Guidance", "text": "You gain a bonus equal to half your level (minimum 1) on initiative rolls." },
						{ "name": "Leading the Charge", "text": "When using the Charge combat maneuver, you ignore the normal -2 penalty to Armor Class." }
					]
				},
				{ "name": "Hard to Break", "text": "Once per [Encounter], if you make a successful Fortitude or Will save against an effect that would normally have a lesser effect on a successful save (such as a spell with a save of “Fortitude half ”), you instead ignore the effect entirely." },
				{ "name": "Readiness", "text": "You gain a +2 bonus to Vigor checks, and becoming [Flat-footed] does not prevent you from making attacks of opportunity or taking immediate actions. Once per [Round], you may make a Vigor check at any time during the [Round]. This does not require an action." },
				{ "name": "Resilience", "text": "You gain [Fast healing] equal to your character level." },
				{ "name": "Ancestral Bleeding", "text": "Once per [Encounter], as an immediate action, you can reroll a failed save." },
				{ "name": "Greater Readiness", "text": "You are always able to act in a surprise [Round]." },
				{ "name": "Strength Unbroken", "text": "Once per [Encounter], as a swift action, you can begin an unstoppable assault. Until the beginning of your next turn, you gain [Immunity] to damage, [Binding] effects, and the [Dazed] and [Stunned] conditions." }
			]
		},
		{
			"name": "Discipline of the Serpent",
			"type": "monk",
			"circles": [
				{ "name": "External Techniques", "text": "Choose five weapon properties other than [Arcane], [Barbed], [Distant], [Hold-out] or [Quick-draw]. At 3rd, 5th and 7th circles, you may choose an additional weapon property. Your Unarmed Strike natural weapon gains those properties. If you possess any other natural weapons, they gain any 2 of your Unarmed Strike natural weapon’s chosen properties at 1st circle, and 1 more at 3rd, 5th and 7th circles. These choices are permanent.Additionally, whenever you switch to a weapon, you may grant it a number of weapon properties your Unarmed Strike natural weapon possesses. You may grant it 2 such properties at 1st circle, 3 at 3rd, 4 at 5th, and 5 at 7th. The weapon retains those properties for as long as you wield it.Attacks you make as part of a Disarm, Grapple, Pin, or Trip attempt deal additional damage with the [Precision] descriptor equal to your level." },
				{
					"name": "Internal Principles",
					"text": "Your combat maneuvers, and opponents’ attempts to escape or act in a [Grappled] or [Pinned] condition you inflict, have a DC of (11 + 1/2 your level + your KOM). This DC increases by 1 at 4th circle, and again at 6th circle. In addition, you gain access to the following special combat maneuvers, which benefit from the additional damage of External Techniques",
					"options": [
						{ "name": "Pushing Blow", "text": "As a standard action, you make a single melee attack that deals normal damage. If the attack hits, the target must make a Fortitude save or be pushed 5 ft, and you can choose to move into their previously occupied space. If you choose not to move into their space, you may instead push them 5 ft in the same direction per circle of Discipline of the Serpent you possess. These movements do not provoke attacks of opportunity. A successful Pushing Blow benefits from abilities that would enhance a successful Bull Rush." },
						{ "name": "Neutralize", "text": "As a standard action, you make a single melee attack that deals normal damage. If the attack hits, the target must make a Will save or take a penalty to damage equal to the number of circles you possess in Discipline of the Serpent for 1 [Round]. This penalty does not stack with itself." }
					]
				},
				{
					"name": "Open and Close",
					"text": "When an opponent fails a save against your Close Meridian, Disarm, Grapple, Neutralize, Open Gate, Pushing Blow, or Trip, you may immediately make a [Bonus attack]. In addition, You gain access to the following special combat maneuvers, which benefit from the additional damage of External Techniques:",
					"options": [
						{ "name": "Close Meridian", "text": "As a standard action, you make a single melee attack that deals normal damage. If this attack hits, the target must make a Fortitude save or be [Sickened] for 1 [Round]." },
						{ "name": "Open Gate", "text": "As a standard action, you make a single melee attack that deals normal damage. If the attack hits, the target must make a Will save or all creatures gain a +2 bonus to skill checks against the target and saves against the target’s abilities for 1 [Round]." }
					]
				},
				{ "name": "Ceaseless Flow", "text": "Once per [Round], you may replace any one melee attack other than an attack of opportunity with any of the following combat maneuvers, at the same attack bonus as the replaced attack: Close Meridian, Disarm, Grapple, Neutralize, Open Gate, Pushing Blow, or Trip. If the combat maneuver hits, you can use Ceaseless Flow an additional time this [Round]. If you replace a [Bonus attack] using Ceaseless Flow, it still counts as your [Bonus attack] for that [Round]." },
				{ "name": "Stop the Breath", "text": "Your combat maneuvers increase in potency: when an opponent fails a save against your Close Meridian, Disarm, Grapple, Neutralize, Open Gate, Pin, Pushing Blow, or Trip, it is [Flat-footed] until the beginning of its next turn." },
				{
					"name": "Poison the Blood",
					"text": "Each time you deal [Precision] damage to an opponent with Close Meridian, Disarm, Grapple, Neutralize, Open Gate, Pin, Pushing Blow, or Trip during an attack action, or an opponent fails a save against any of those combat maneuvers, that opponent gains an [Imbalance]. These [Imbalances] cause the opponent to gain various conditions, as below, and have no other effects on the opponent. [Imbalances] disappear at the end of each attack 61 Chapter V: Classesaction, but conditions your opponents have gained from this ability do not disappear when [Imbalances] do. If multiple opponents would gain [Imbalances] from a single combat maneuver, you instead choose one of those opponents to gain an [Imbalance].",
					"options": [
						{ "name": "Two [Imbalances]", "text": "The opponent is [Battered] for 2 [Rounds]." },
						{ "name": "Four [Imbalances]", "text": "The opponent is [Blinded] for 1 [Round]." },
						{ "name": "Six [Imbalances]", "text": "The opponent is [Slowed] for 1 [Round]." },
						{ "name": "Eight [Imbalances]", "text": "The opponent is [Nauseated] for 1 [Round]." },
						{ "name": "Ten [Imbalances]", "text": "The opponent is [Stunned] for 1 [Round]." }
					]
				},
				{ "name": "On Power", "text": "You can now use Ceaseless Flow any number of times per [Round], and Stop the Breath now affects any opponent you hit with Close Meridian, Disarm, Grapple, Neutralize, Open Gate, Pin, Pushing Blow, or Trip, regardless of whether they successfully save against it or not." }
			]
		},
		{
			"name": "Discipline of the Crane",
			"type": "monk",
			"circles": [
				{ "name": "Fast Movement", "text": " You gain a bonus to your movement speed equal to 5 ft, plus an additional 5 ft per circle you possess from this track (to a maximum of a 40 ft bonus at 7th circle)." },
				{ "name": "Between the Raindrops", "text": "You gain a deflection bonus to Armor Class equal to the number of Discipline of the Crane circles you possess." },
				{ "name": "Through the Clouds", "text": "You gain the Fly movement mode." },
				{ "name": "Deftly Striking", "text": "As a standard action, you may make an attack action at any time during a movement, and continue that movement afterwards." },
				{ "name": "Journey of the Crane", "text": "You can take a great step as with the long legs of the crane, seeking new challenges to face or new lessons to learn. Once per [Scene], as a standard action, you can use teleport, as the spell." },
				{ "name": "Gust of Action", "text": "You can ride the wind at overwhelming speeds. Once per [Encounter], plus an additional time per [Encounter] per four character levels you possess, as a swift action, you can gain an extra move action on your current turn." },
				{ "name": "Phoenix Reborn", "text": "As the avatar of the crane, you become an entirely otherworldly being. Once per [Scene], if you are killed or rendered [Unconscious], you are revived with full hit points one [Round] after your death or knock-out. You can choose not to return, if you believe that your impact on the multiverse is complete." }
			]
		},
		{
			"name": "Discipline of the Dragon",
			"type": "monk",
			"circles": [
				{
					"name": "Dance of the Sun and Moon",
					"text": "You embark upon the path of the Careful Sun or the Reckless Moon.",
					"choice": [
						{ "name": "Careful Sun", "text": "Once per [Encounter], when you make a successful Fortitude or Will save against an offensive action that would normally have a lesser effect on a successful save (such as a spell with a save of “Fortitude half ”), you may instead ignore the effect entirely." },
						{ "name": "Reckless Moon", "text": "Once per [Encounter], when you make a successful Reflex saving throw against an offensive action that would normally have a lesser effect on a successful save (such as a spell with a save of “Reflex half ”), you may instead ignore the effect entirely." }
					]
				},
				{ "name": "Obsidian Mind", "text": "Monks learn to protect their minds from the clouds of fear. You gain [Immunity] to [Fear] effects and the in-combat use of the Intimidate skill." },
				{ "name": "Stance of the Falling Star", "text": "When knocked down, you are quick to get up for another exchange of punches and kicks. You gain [Immunity] to the [Prone] condition. In addition, as a swift action, you may become [Covered] for one [Round]." },
				{ "name": "Diamond Soul", "text": "You have [Resistance] to energy and magic damage." },
				{
					"name": "Cloak of the Sun and Moon",
					"text": "Your devotion to the Careful Sun or Reckless Moon provides additional benefits",
					"choice": [
						{ "name": "Careful Sun", "text": "You gain [Immunity] to effects with the [Binding] descriptor." },
						{ "name": "Reckless Moon", "text": "Once per [Encounter], when you make a Reflex saving throw against an offensive action that normally deals half damage on a successful save, you may take no damage from that offensive action instead on a successful save, or take half damage from that offensive action instead on a failed save." }
					]
				},
				{ "name": "Jade Heart", "text": "You can absorb dark and harmful energies without suffering any ill effects. You gain [Immunity] to [Energy drained] and [Vulnerability], and to [Negative] effects." },
				{ "name": "Scales of Gems", "text": "Once per [Encounter], as a swift action, you may harden your hide to absorb devastating attacks without harm. Until the beginning of your next turn, you gain [Immunity] to damage and to the [Sickened], [Nauseated], [Dazed] and [Stunned] conditions." }
			]
		},
		{
			"name": "Judgement",
			"cantMulticlass": true,
			"type": "paladin",
			"circles": [
				{ "name": "Knowing", "text": "You are aware, in the general sense, of the moral and ideological predilections of any sentient creature within a spread with a radius of 15 ft + 5 ft per Judgment circle you possess originating from you. This spread moves with you, is not a divination effect, and is always on. It does not automatically penetrate [Invisible], [Concealed], or Stealth, but if you can otherwise circumvent these effects, Knowing will function unimpeded. Likewise, you become aware in a limited sense of likely major moral consequences of your actions. This takes the form of prescient flashes of meaningless images, and while reliable, it is not deterministic. In cases where the creed’s meaning is unclear, you may get no forewarning. This grants a +4 bonus to Awareness and to Perception checks. This is a [Bastion] effect." },
				{ "name": "Mercy", "text": "Once per [Encounter], as an immediate action or part of another immediate action, you may prevent up to three times your character level in damage that would be dealt to any ally within your Knowing. This can only be done as the damage is being dealt, but may be activated after you know exactly how much damage a given effect will deal. This is a [Bastion] effect." },
				{ "name": "Grace", "text": " You gain a +3 bonus to all saves, 2 additional HP per level, and gain [Immunity] to all [Fear] effects." },
				{ "name": "Requital", "text": "Opponents who start moving within the range of your Knowing have their effective move speed reduced by 20 ft, for the purposes of that move. This does not affect 5 ft steps." },
				{ "name": "Light", "text": "You may now, at any time, illuminate the area around you out to the limit of the Knowing. This may be turned on or off as a free action. In addition, you gain [Blindsight] with a range equal to the radius of the Knowing. This is a [Bastion] effect." },
				{ "name": "Endurance", "text": "The first time in each [Encounter] that you fail a saving throw against a harmful effect, the effect is negated without affecting you. This is a [Bastion] effect." },
				{ "name": "Allegiance", "text": "You are indefatigable. You gain [Immunity] to [Mind-affecting], [Fatigued], [Exhausted], [Blown away], [Stunned], [Dazed], and cannot be knocked [Prone]." }
			]
		},
		{
			"name": "Bastion",
			"type": "paladin",
			"circles": [
				{ "name": "The Shield", "text": "As a swift action, you may create a spread with a radius of 10 ft plus 5 ft per two character levels you possess originating from you called the Bastion Aura. This spread moves with you.Whenever a spell of first circle or lower that has a duration targets you, if it is not a copy, you may project it. To project a spell, create a copy of that spell for each other ally within your Bastion Aura. That spell and each of those copies become bonded to one another and gain “When a [Dispelling] effect ends this spell, end all spells bonded to it,” that spell gains “When this spell ends, end all spells bonded to it,” and each of those copies gains “You gain this spell’s effect only while you are within the Bastion Aura of the ally who created this spell.” Then you cast each of those copies targeting a different one of those allies. This does not provoke attacks of opportunity and counts as casting those spells only for the purpose of those spells’ effects and abilities of this track.As a swift action, you may end this spread." },
				{ "name": "The Gauntlet", "text": "Whenever a spell of second circle of lower that has a duration targets you, if it is not a copy, you may project it." },
				{ "name": "The Mantle", "text": "Whenever a spell of third circle of lower that has a duration targets you, if it is not a copy, you may project it. Each [Encounter], the first [Dispelling] effect made against a bonded spell you cast fails." },
				{ "name": "The Armor", "text": "Whenever a spell of fourth circle of lower that has a duration targets you, if it is not a copy, you may project it. Additionally, each ally gains a +3 deflection bonus to AC as long as it is within the Bastion Aura." },
				{ "name": "The Soul", "text": "Whenever a spell of fifth circle of lower that has a duration targets you, if it is not a copy, you may project it. Each [Encounter], the second [Dispelling] effect made against a bonded spell you cast fails." },
				{ "name": "The Ready", "text": "Each ally gains a pool of points equal to half your character level. These points may be spent after you know the result of a single saving throw, attack roll or skill check to add a bonus to that roll equal to the number of points spent. These points may only be spent while affected by the Bastion Aura. The pool refreshes each [Scene]." },
				{ "name": "The Strong", "text": "When an ally within the Bastion Aura is reduced to -1 or fewer hit points from 0 or more hit points, it gains [Immunity] to [Dying], [Unconscious], [Stable], and [Dead] for one [Round]." }
			]
		},
		{
			"name": "Heroica",
			"type": "paladin",
			"circles": [
				{ "name": "The Blade and the Bow", "text": "When you gain this ability, designate target ally other than yourself as your partner. (You also become its partner.) A creature with a partner cannot be designated as another creature’s partner, and no creature can have more than one partner at a time. Once per [Scene], you may designate a different ally other than yourself to be your partner. You and your partner both add half your respective levels to damage with your attacks (minimum 1). If your partner also has this ability, the damage bonuses stack." },
				{ "name": "Of Might and Guile", "text": "Choose one of the following abilities (this choice is permanent):Might: As a swift action, if your partner is within [Medium] range, you may deal damage equal to your KOM to all opponents within your [Close] range of your partner. This damage ignores [Immunity] and cannot be mitigated or reduced.Guile: You can spend a move action to double your partner’s critical threat range for one [Round]. Your partner also gains this ability, but cannot use it in a [Round] where you have used it." },
				{ "name": "The Just and the Unjust", "text": "Your partner gains the benefits of a Lesser item or Greater item you are attuned to as if they possessed a duplicate of that item and were attuned to it. You cannot choose a duplicate of an item to which your partner is already attuned." },
				{ "name": "The Truth and the Folly", "text": "Whenever you attack an opponent against which your partner took an offensive action within the last [Round], you may ignore the highest applicable [Miss chance]. Whenever your partner attacks an opponent against which you took an offensive action within the last [Round], your partner may ignore the highest applicable [Miss chance]." },
				{ "name": "The Quick and the Dead", "text": "While within your [Close] range, your partner gains [Resistance] to all damage dealt by opponents within your [Close] range." },
				{ "name": "Aleph and Null", "text": "When either you or your partner kills an opponent, you each heal 25 HP and may each immediately take two 5 ft steps." },
				{ "name": "With Your Shield or On It", "text": "You don’t die until your partner would also be [Dead]. This only works if you are within 100 ft of each other, and have line of effect. If either of those conditions ceases to be met, you die instantly if this ability was currently sustaining you. If your partner has this ability, it does not make you immortal." }
			]
		},
		{
			"name": "Smiting",
			"type": "paladin",
			"circles": [
				{ "name": "Skirmish", "text": "When you miss on an attack roll against an opponent, add a +1 bonus to your attack rolls for the duration of the [Encounter]. This bonus stacks with itself up to the higher of 2 or your level." },
				{ "name": "Conflict", "text": "Your attacks gain a bonus to damage equal to your Charisma modifier." },
				{ "name": "Struggle", "text": "After hitting a single opponent with two or more consecutive attacks during your turn, your attacks against that opponent, beginning with that second consecutive hit, gain a bonus to damage equal to your Charisma modifier for one [Round]. Beginning with the fourth consecutive hit against the same opponent during your turn, this damage bonus increases to twice your Charisma modifier." },
				{ "name": "Escalation", "text": "Whenever your Struggle ability activates, you may inflict the [Battered] condition for one [Round] on the opponent you hit to activate Struggle. The duration of this condition increases by one [Round] for every time you hit the opponent again. Additionally, once per [Round], if you hit a [Battered] opponent with an attack, that opponent becomes [Dazed] for one [Round]. A successful Fortitude save (DC 10 + ½ your level + your Charisma modifier) negates the [Dazed] condition." },
				{ "name": "Annihilation", "text": "When you Charge, your attacks gain a bonus to damage equal to your Charisma modifier for the duration of the [Encounter]. This ability stacks with itself up to two times." },
				{ "name": "Scorched Earth", "text": "If you are reduced to less than half of your normal maximum HP, your attacks gain a bonus to damage equal to your Charisma modifier for the duration of the [Encounter] or until you are healed above that threshold." },
				{ "name": "War Engine", "text": "Whenever you hit an opponent with an attack, that opponent becomes [Battered] and suffers a penalty to its AC equal to your Charisma modifier until the end of the [Encounter]." }
			]
		},
		{
			"name": "Virtue",
			"type": "paladin",
			"circles": [
				{ "name": "Font", "text": "Once per [Encounter], you may draw up an immobile wellspring of vitality called a font, which manifests as a low steady hum and a single spark of light. As a swift action, you may place it anywhere within 10 ft + 5 ft per two character levels. Each [Round], at the start of your turn, an arc of restorative energy strikes one ally of your choice within your [Close] range of the font, and heals 2 HP plus your character level and your Charisma modifier. A font expires after a number of [Rounds] equal to your Charisma modifier (minimum 2). Fonts do not occupy a square, and cannot be targeted or affected by anything but the Virtue track abilities of their creator." },
				{ "name": "Icon", "text": "You may now place up to two fonts per [Encounter], using a separate swift action to place each." },
				{ "name": "Dawnsign", "text": "Fonts you place now persist for a number of [Rounds] equal to twice your Charisma modifier (minimum 4 [Rounds]), and an additional font emanates from you passively, beginning on your first turn each [Encounter]." },
				{ "name": "Vitality Engine", "text": "If any portion of the HP healed by an arc would have no effect on a target due to his or her HP being full, instead of simply being wasted, that target gains temporary HP equal to the amount of healing that would have normally had no effect. Unlike normal temporary HP, this stacks to a maximum of half the target’s normal max HP. This temporary HP lasts for the duration of the [Encounter]. " },
				{ "name": "Holy Glyph", "text": "Instead of its normal benefit, an arc from one of your fonts may be used to expunge any one of the following conditions: [Shaken], [Entangled], [Nauseated], [Dazzled], [Deafened], [Blinded], or [Sickened]. You can trigger and direct a single arc from one of your fonts as a swift action, in addition to the normal arcs at the beginning of your turn." },
				{ "name": "Star Spark", "text": "An arc may be used to expunge any one of the following conditions instead of healing: [Stunned], [Slowed], [Battered], or [Dazed]. Additionally, any time you use your swift action to generate an additional arc, you may destroy any one of your fonts to create an arc that heals 50 points of damage and [Teleport] that ally anywhere within range of a remaining font. You may not destroy the font emanating from your person." },
				{ "name": "Rebirth", "text": "You may destroy a font as part of your swift action to generate an arc that revives a [Dead] ally, healing the ally to 50 hit points in the process (if the ally’s maximum hit points are less than 50, he gains the rest as temporary HP). If you opt to do this, you may not destroy a font with Star Spark as part of the same action. You may not destroy the font emanating from your person." }
			]
		},
		{
			"name": "Professional Soldier",
			"type": "ranger",
			"circles": [
				{
					"name": "Reap the Whirlwind",
					"text": "You can, with minimal preparation and using only the resources at hand, create deadly ambushes for your enemy. You can prepare traps, which can be deployed in combat as a swift action. You can deploy one trap per [Encounter], plus one more for every four character levels you possess. A trap will remain functional until the end of the [Encounter], with some exceptions. Every trap has a unique effect when sprung, and while traps are normally visible, they can be concealed with the Larceny skill (as explained in Chapter VII). At 1st circle, you have access to the following traps:",
					"options": [
						{ "name": "Tanglefoot Paste", "text": "Atomized in a fine mist that hovers in the air, this paste covers up to five squares in [Close] range of you at time of deployment. Each affected square must touch at least one other affected square. Targets entering these squares must make a Fortitude save (DC 10 + ½ your level + your Key Offensive Modifier), or stop their movement and become [Flat-footed] until their next turn." },
						{ "name": "Tripwire", "text": "A tripwire is stretched across a 30 ft line originating from target square within [Medium] range. The entire tripwire must exist entirely within your [Medium] range. Those attempting to leave a square covered by the line fall [Prone]. A successful Reflex save (DC 10 +½ your level + your KOM) negates the [Prone] condition. A tripwire can only trigger twice before being destroyed utterly." },
						{ "name": "Fumigator", "text": "A fumigator can be thrown to any square inside [Medium] range, creating a 20 ft radius spread of with a thin gas that has mild hallucinogenic effects originating from that square. Whenever a creature begins its turn inside the spread or the first time each [Round] that a creature enters the spread, that creature starts seeing double, forcing it to treat all creatures as [Fully concealed] for the next 2 [Rounds]. A successful Will save (DC 10 +½ your level + your KOM) negates this effect. A fumigator dissipates after 4 [Rounds]." }
					]
				},
				{ "name": "A Personal Touch", "text": "Grappling hooks are standard-issue for rangers, and for good reason. Once per [Round], you may replace an attack made during your attack action with a ranged attack at up to [Close] range at the same attack bonus as the replaced attack. If you hit, you deal damage equal to 1d8 + your KOM and knock the hit opponent [Prone]. As a swift action, you may then immediately pull the opponent closer to you by up to 10 ft + 5 ft per 4 levels you possess. A successful Reflex save (DC 10 + ½ your level + your KOM) negates the [Prone] condition and thus prevents the pull." },
				{ "name": "Kept Secret, Kept Safe", "text": "At will, you may use a move action to lay down a cloaking scatter of smoke, dust, and silvered shards to screen your allies. All allies within [Close] range gain a +2 bonus to AC and Reflex saves for one [Round]. At 12th level, the bonus rises to +3 and rises again to +4 at 18th." },
				{ "name": "A Swiftness in the Blood", "text": "You may take an additional swift or immediate action per [Round]." },
				{
					"name": "Into the Valley of Death",
					"text": "As an immediate action, when a creature triggers one of your traps, you may place another trap. This trap may not be placed directly under the unfortunate soul who triggered this ability. You gain access to the following additional traps:",
					"options": [
						{ "name": "Razorpod Cluster", "text": "Once activated, this ominous metallic tangleweed splits into three razorpods — whirring collections of razor edges deployed to three separate squares within [Close] range. At the beginning of your turn, each razorpod you have deployed can move up to half your speed. Razorpods can move into a creature’s occupied square and creatures can move into a square that a razorpod is in, but due to their tendency to get caught on anything, two razorpods cannot share the same square. Whenever a creature moves into a square occupied by a razorpod for that creature’s first time this [Round], or at the end of your turn if at least one razorpod occupies the same square as a creature, that creature is dealt damage equal to your level plus your KOM. This damage ignores [Damage reduction] and [Resistance]. After dealing damage three times, a razorpod is utterly destroyed." },
						{ "name": "Remote mine", "text": "Remote mines exist for the sole purpose of delivering cleverly timed pillars of cheery and warmth-giving fire hot enough to melt steel. Each prepared remote mine can be deployed in target square within [Close] range. As an immediate action, you may detonate a remote mine to create a 15 ft radius spread originating from the mine’s square that deals four times your character level in energy damage with the 72[Fire] descriptor and inflicts the [Battered] condition for two [Rounds] against all opponents within the spread. A successful Reflex save (DC 10 + ½ your character level + your KOM) halves the damage." }
					]
				},
				{ "name": "Bring the Rain", "text": "As a move action, if you have a means of communicating with a creature, you provide that creature with targeting information for its abilities. This lets the creature use your location instead of its location for purposes of determining line of sight, line of effect, and range when calculating whether it can target a location or creature with one of its spells or abilities. This ability works over any distance, and any offensive actions taken from your location count as an offensive action taken by you. You may maintain this effect for as many [Rounds] as you wish by spending a move action each [Round] you wish to maintain this effect." },
				{ "name": "The Sound of Cannon", "text": "You become as swift as the terrible thunder you herald. You gain a +6 bonus to your initiative, and all allies gain a +4 bonus to their initiative, bringing your total bonus to +10." }
			]
		},
		{
			"name": "A Reign of Arrows",
			"type": "ranger",
			"circles": [
				{ "name": "Dead-eye", "text": "You fight best when you don’t fight fair. When you hit a [Flat-footed] opponent with a ranged attack, you deal 3 additional damage with the [Precision] descriptor per 2 character levels, to a minimum of 3 additional damage with the [Precision] descriptor." },
				{ "name": "Return Fire", "text": "Once per [Round], when an opponent within [Close] range attacks you, you may make a ranged attack against that opponent that does not provoke an attack of opportunity. If your attack hits, it deals damage equal to your character level and leaves your target [Flatfooted] for one [Round]." },
				{ "name": "Ricochet", "text": "You can intercept any sort of projectile, given a chance. As an immediate action, you can intercept and hinder any ranged attack, spell, supernatural ability, or spell-like ability that would target or affect an ally within [Close] range. Make an attack roll with a ranged weapon you are wielding. For purposes of that offensive action, the ally can freely choose to replace its Armor Class or any saves it makes with your attack roll." },
				{ "name": "Missile Barrage", "text": "Each attack you make is part of a carefully planned pattern of fire. Immediately after taking an attack action in which all attacks are made against target creature, you may create a spread with a radius of 5 ft per 5 levels you possess originating from target creature, causing each creature in the area besides target creature to be [Blown away] in a direction of your choice." },
				{ "name": "A Crashing of Heaven", "text": "You learn to take aim, steady your breathing, and unleash devastation on your foe. Twice per [Encounter], as a move action, your next ranged attack this [Round] deals additional damage equal to four times your character level if it hits. A successful Fortitude save (DC 10 + ½ your level + your KOM) halves the additional damage and prevents that attack from reducing your target below 1 HP. Whether it hits or misses, this attack inflicts the [Battered] condition on your target. This is a [Death] effect." },
				{ "name": "Storm Bolt", "text": "Once per [Round], as a swift action, you may make your next ranged attack this [Round] into a Storm Bolt; if the attack hits, your target becomes [Dazed] for one [Round]. A successful Reflex save (DC 10 +½ your character level + your Key Offensive Modifier) negates the [Dazed] condition." },
				{ "name": "Thus Always Unto", "text": "As a swift action, you can sap the will and ability of your opponents with every strike; until the end of your turn, whenever you hit an opponent with a ranged attack, you may inflict the [Energy drained] condition on that opponent. A successful Fortitude save (DC 10 + ½ your level + your KOM) negates the [Energy drained] condition and instead leaves the opponent [Flat-footed] for one [Round]." }
			]
		},
		{
			"name": "Iron Magi",
			"type": "ranger",
			"circles": [
				{ "name": "A Cadence of Blows", "text": "From the Tempo comes the simplest Chain component, which trades immediate opportunities for a long-term advantage by throwing an opponent off balance. A Cadence of Blows replaces a single melee attack in an attack action, and when activated, grants you a +1 bonus to attack rolls against a single opponent within [Melee] range and a +1 bonus to AC. These bonuses stack twice at 1st circle, three times at 3rd circle, four times at 5th circle, and five times at 7th circle.A Cadence of Blows can also be activated as a Chain finisher when you have a chain of at least one Link long." },
				{ "name": "Howl of the North Wind", "text": "This explosion of the biting and arctic first wind can be activated as a Chain finisher that requires at least one Link in your Chain. You create a 30 ft radius spread originating from you that deals damage equal to your character level to all opponents in the area and renders them [Blown away] or [Prone], at your choice. A successful Reflex save (DC 10 + ½ your level + your Key Offensive Modifier) negates the [Blown away] or [Prone] conditions." },
				{ "name": "Beloved of the Dirae", "text": "You gain a [Bonus attack] whenever you take an attack action. In addition, you may call on the principle of lightning through the spirits of celestial anger called Dirae. This is a Chain component that replaces two melee attacks in an attack action to strike an opponent with a rain of sparks. You may make a single melee attack against a creature within your [Medium] range. Regardless of whether the attack hits or misses, you create a 35 ft radius spread originating from your target that lasts for one [Round]. The first time that an opponent moves into or begins its turn in this spread, it takes energy damage with the [Electricity] descriptor equal to your character level. Opponents in the spread at the end of the spread’s duration are dealt energy damage with the [Electricity] descriptor equal to twice your level." },
				{ "name": "Scream of the Black Sky", "text": "With the festering darkness of the second wind, you conjure a swirl of violent black clouds as a Chain finisher that requires at least two Links in your chain. Up to three target opponents within your [Close] range take damage equal to twice your character level, and are [Blinded] for two [Rounds]. A successful Reflex save (DC 10 + ½ your level + your KOM) halves the [Blinded] duration. Scream of the Black Sky may be activated three times per [Encounter]." },
				{ "name": "Staccato Blastwave", "text": "As a Chain component that replaces two melee attacks in an attack action, you invoke the Principle of Thunder to create a ripple of violent sound that shatters bone and tears flesh. You make a single melee attack, which deals damage as normal, plus additional damage equal to twice your character level plus your KOM. If the attack misses, you still deal damage equal to twice your character level plus your KOM to its target." },
				{ "name": "Bellow of the Deep Earth", "text": "Roaring and sudden, you call the underground current of the third wind forth as a Chain finisher that requires at least three Links in your chain. You create a 50 ft radius spread originating from you that deals damage equal to three times your character level to all opponents in the area and renders them [Prone] and [Entangled]. A successful Fortitude save (DC 10 + ½ your level + your KOM) negates the [Prone] and [Entangled] conditions. Bellow of the Deep Earth may be activated three times per [Encounter]." },
				{
					"name": "Mastery of Law",
					"text": "As the curious tenets of your art become obvious to you, you begin to grasp a great and terrible truth. You gain the following abilities.",
					"options": [
						{ "name": "Magnum Opus", "text": "All of your Chain components and successful melee attacks add an additional Link to your Chain." },
						{ "name": "Roar of the Storm Lords", "text": "Once per [Encounter], you may activate this ability as a Chain finisher that requires at least seven Links in your Chain. You create a spread with a radius of your [Medium] range originating from you, which deals damage equal to three times your character level to all opponents in the area, and renders them [Battered] for two [Rounds], knocks them [Prone], and repositions each of them up to 70 ft each to squares of your choice. A successful Reflex save (DC 10 + ½ your level + your Key Offensive Modifier) negates the repositioning effect and the [Prone] condition." }
					]
				}
			]
		},
		{
			"name": "Battle's Tempering",
			"type": "ranger",
			"circles": [
				{
					"name": "Rather Quick than Dead",
					"text": "Moving out of a square of difficult terrain does not cost you extra movement.",
					"choice": [
						{ "name": "Shoot First", "text": "You gain a bonus equal to half your level (minimum 1) on initiative checks." },
						{ "name": "Gain Ground", "text": "You can take an additional 5 ft step each [Round]." }
					]
				},
				{ "name": "Dive for Cover", "text": "Once per [Encounter], when you make a successful Reflex saving throw against an offensive action that would normally have a lesser effect on a successful save (such as a spell with a save of “Reflex half ”), you instead ignore the effect entirely." },
				{ "name": "For Ire", "text": "You gain [Fast healing] equal to your Key Defensive Modifier, and becoming [Flat-footed] does not prevent you from making attacks of opportunity or taking immediate actions." },
				{ "name": "Look of a Survivor", "text": "You gain [Resistance] to physical damage." },
				{ "name": "It Has Been an Honor", "text": "You are a true expert at getting the hell out of Dodge. You gain [Immunity] to [Binding] effects. In addition, once per [Round], as a move action or as part of a move action, you can fade into your environment, duplicating the effects of the invisibility spell." },
				{ "name": "Ghost", "text": "You resist magical and technological attempts to locate you. Items, spells, and supernatural and spell-like abilities cannot be used to establish line of sight to you. Divination spells cannot be used to track or locate you. Additionally, you ignore bonuses to opponents’ Awareness from items, spells, and supernatural and spell-like abilities." },
				{ "name": "A Masterpiece in Violence", "text": "Once per [Encounter], if you would take 60 or more damage from a single attack, effect, or ability, you may immediately make an attack action against the source of the damage. If this attack action kills your target, you take no damage." }
			]
		},
		{
			"name": "Esoterica Radica",
			"cantMulticlass": true,
			"type": "rogue",
			"circles": [
				{ "name": "Playing it Right", "text": "Any rogue learns to use a few key skills without pausing to think about them. Pick two skills. You can take 10 on both these skills regardless of circumstances." },
				{ "name": "When to Hold", "text": "When it’s time to stand your ground, you trust in your uncanny luck to protect you. Once per [Encounter] per circle you possess in this track, as an immediate action, you may gain a +2 bonus to your Armor Class, Fortitude, Reflex, and Will saves until the beginning of your next turn." },
				{ "name": "When to Fold", "text": "You know the value of beating a hasty retreat in the face of danger. Once per [Encounter], plus an additional usage for every 4 character levels, as a swift action, you can gain an extra move action on your current turn. If you use this move action to move, the movement provokes attacks of opportunity as normal." },
				{ "name": "When to Cheat", "text": "You may take an additional swift or immediate action per [Round]." },
				{ "name": "When to Run", "text": "Sometimes walking away from a fight isn’t fast enough. Twice per [Encounter], as an immediate action, you can move up to your movement speed." },
				{ "name": "An Ace to Keep", "text": "You can be extra-lucky when you need to be. Once per [Round], you may make a hit with an attack that is not a critical hit into a critical hit, inflicting all normal effects of a critical hit." },
				{ "name": "Gambler’s Dao", "text": "You’ve made it this far with unbelievably good luck, so you may as well keep relying on it. Whenever you roll a d20, you instead roll two d20s and choose the better result. " }
			]
		},
		{
			"name": "Assassin",
			"komOverride": "Dex",
			"type": "rogue",
			"circles": [
				{ "name": "Sneak Attack", "text": "You know that a fair fight is a failure to plan. Any time you make an attack that hits a [Flat-footed], [Helpless], [Confused], [Dazed], [Entangled], [Exhausted], [Stunned], [Shaken], [Frightened], [Cowering] or [Panicked] target, you deal 1d6 additional damage with the [Precision] descriptor per Assassin circle that you possess, to a maximum of 7d6." },
				{ "name": "Slayer’s Sense", "text": "Once you go for an enemy, you’re rarely inclined to let them escape alive. You can ignore [Concealed] and [Fully concealed] when attacking an opponent you have previously damaged with Sneak Attack during the [Encounter]." },
				{ "name": "Blood Calls to Blade", "text": "Any time you make an attack against an opponent subject to your Sneak Attack ability, you gain a +4 bonus on your attack roll." },
				{ "name": "Menacing Presence", "text": "The sight of one of your victims leaves their allies disturbed and vulnerable. Whenever an opponent ends its turn within your [Melee] range of another creature you have damaged with a Sneak Attack during this [Encounter], it becomes [Shaken] for one [Round]. This is a [Mind-affecting], [Fear] effect." },
				{ "name": "Felling Strike", "text": "The shock of a Sneak Attack often causes an enemy to open their defenses. Whenever you deal additional damage with the [Precision] descriptor to an opponent within [Melee] range with your Sneak Attack ability, that opponent is knocked [Prone]. A successful Reflex save (DC 10 + ½ your level + your KOM) negates the [Prone] condition." },
				{ "name": "Battle Fatigue", "text": "Even if an enemy survives your first strikes, you still leave their body battered and crippled. If you deal Sneak Attack damage to an opponent twice in the same [Round], that opponent is [Slowed] until the beginning of your next turn." },
				{ "name": "No Exit", "text": "Hell is one other person in particular — you. Twice per [Encounter], as a swift action, you may deal additional damage equal to 5× your level on your next Sneak Attack this [Round], and cause the target to be [Blinded] and [Stunned] for one [Round]. A successful Fortitude save (DC 10 + ½ your level + your KOM) halves the additional damage and causes the opponent to become [Dazzled] and [Entangled], instead of being [Stunned] and [Blinded]. This is a [Death] effect." }
			]
		},
		{
			"name": "Swashbuckler",
			"komOverride": "Dex",
			"type": "rogue",
			"circles": [
				{ "name": "Dance With Me", "text": "Whenever you move at least 10 ft, your next attack this [Round] deals additional damage with the [Precision] descriptor equal to your KDM plus your character level." },
				{ "name": "Once More!", "text": "When you spend a standard action to make a single attack that is not part of a spell-like ability or spell, and then move at least 10 ft during the same [Round], you may make a single melee attack at the end of your movement. This attack, called a Once More! attack, can be made another time at the end of each additional instance of movement after moving at least 10 more ft. The required distance may comprise a single movement or multiple movements (such as a pair of 5 ft steps), but a Once More! attack can only be made when a movement ends. If the movement is made as part of an action, you can likewise only activate Once More! at the end of that action. At 2nd circle you may only make one Once More! attack per [Round]. This expands to two Once More! attacks per [Round] at 4th circle, and three Once More! attacks per [Round] at 6th circle." },
				{ "name": "Dirty Fighting", "text": "Your speed and finesse leave opponents demoralized and bruised, even before they are defeated. The first time you hit any opponent with a Once More! attack this [Round], your opponent becomes [Battered] for two [Rounds]. A successful Fortitude save (DC 10 + ½ your level + your KOM) negates the [Battered] condition." },
				{ "name": "Kick Him While He’s Down", "text": "Once you begin to throw down, you have a knack of taking the advantage and running with it. Once per [Round], after making an attack during your turn, you may immediately take two free 5 ft steps (even if you used or will use a move action to move) and make a [Bonus attack]." },
				{ "name": "Concussive Impact", "text": "You disorient your opponents with lightning-fast strikes. If you hit an opponent with two Once More! attacks in the same [Round], they become [Confused] for one [Round]." },
				{ "name": "Panache", "text": "You mercilessly take advantage of openings in your opponents’ defenses. Any time an opponent provokes an attack of opportunity from you, you may move 10 ft in any direction before making your attack of opportunity. In addition, every time you hit an opponent with a Once More! attack, you may move the target 10 ft in any direction. This movement does not provoke an attack of opportunity." },
				{ "name": "Topsy Turvy", "text": "Sometimes you roll with the punches and sometimes the punches roll with you. Your Panache ability may now move each opponent within your [Melee] range after you hit an opponent with a Once More! attack instead of just the opponent hit. Once per [Round] for each opponent moved, if your opponent is adjacent to an obstacle or occupied square and you are able to push them 5 ft or further, you may forgo any further movement from that activation of Panache to render that opponent [Prone]. A successful Reflex save (DC 10 + ½ your level + your KOM) negates the [Prone] condition." }
			]
		},
		{
			"name": "Demo Man",
			"komOverride": "Int",
			"type": "rogue",
			"circles": [
				{ "name": "Smells Like Victory", "text": "You love the smell of freshly mixed exposives in the morning. Or afternoon. Or evening, for that matter. Choose an elemental descriptor ([Acid], [Cold], [Electricity], or [Fire]). This choice is permanent. As a move action or a swift action, you can mix noxious chemicals into a vial, which lasts for one [Round], at which point it becomes useless. These vials can be thrown as attacks in an attack action, and you can throw as many vials per [Round] as you have vials to throw, as a ranged attack ([Close] range), with an item bonus to the attack roll equal to the number of Demo Man circles you possess. A target hit by the vial takes elemental damage with the chosen descriptor equal to 1d4 per level you possess, plus your Key Offensive Modifier, and starts [Burning]. A successful Reflex save (DC 10 + ½ your level + your Intelligence modifier) negates the [Burning] condition." },
				{
					"name": "Flash-bang",
					"text": " Once per [Round], as part of a move action, you can add a fuse to a powerful firecracker, which lasts for one [Round] before its volatile chemicals become useless. You can use the firecracker in either of the following ways:",
					"options": [
						{ "name": "Flash Grenade", "text": "As a ranged attack, which can be made as part of an attack action, you can throw the firecracker at target square within [Close] range, which creates a 10 ft radius spread originating from that square. All creatures within the spread are [Blinded] and [Deafened] for two [Rounds]. A successful Reflex save (DC 10 + ½ your level + your Intelligence modifier) negates the [Blinded] and [Deafened] conditions." },
						{ "name": "Flash Missile", "text": "You can affix the firecracker to a single ranged weapon in your possession or a vial prepared with your Smells Like Victory ability. The next time you hit a creature with an attack using either that weapon or vial, that creature is [Blinded] and [Deafened] for one [Round]. A successful Fortitude save (DC 10 + ½ your level + your Intelligence modifier) negates the [Blinded] and [Deafened] conditions." }
					]
				},
				{ "name": "Sticky Bomb", "text": "It dawns on you that you might want to ensure a safer escape. Once per [Encounter] per 4 character levels, you can affix a pouch of entangling goo to a single ranged weapon in your possession or a vial prepared with your Smells Like Victory ability. The next time you hit a creature with that weapon or vial before the beginning of your next turn, that creature and all creatures within a 20 ft radius spread originating from that creature are [Entangled] for two [Rounds]. A successful Reflex save (DC 10 + ½ your level + your Intelligence modifier) negates the [Entangled] condition." },
				{ "name": "High Explosive", "text": "Your most spectacular creation yet is so volatile you’d be a fool to carry more than one... so you carry two. Twice per [Encounter], as a standard action, you may create a 30 ft radius spread originating from target square within [Close] range, which deals 1d6 damage per level plus your KOM to creatures within the area and pushes them to the closest square outside of it, knocks them [Prone], and leaves them [Dazed] for one [Round]. A successful Reflex save (DC 10 + ½ your level + your Intelligence modifier) negates the [Dazed] condition and halves the damage." },
				{ "name": "Sapper Rods", "text": "You’ve created bombs that undermine magic itself. Twice per [Encounter], as a standard action, you may create a 30 ft radius spread originating from target square within [Close] range, and choose to do one of the following: end two target effects created by spells or spell-like abilities of 5th circle or lower that have durations and that originate from a creature or square within the spread or targeted a creature within the spread; or end a single target effect created by a spell or spell-like ability of 6th or 7th circle or lower that has a duration and that originates from a creature or square within the spread or targeted a creature within the spread. This is a [Dispelling] effect." },
				{
					"name": "Cluster Bomb",
					"text": "The more explosives you can fit in one space, the better. Once per [Encounter], as a standard action, you can detonate a cluster bomb in any square within [Close] range, creating a 30 ft radius spread originating from target square. The DC for these Reflex saves is 10 + ½ your level + your Intelligence modifier. This cluster bomb has three of the following effects of your choice:",
					"options": [
						{ "name": "Vitriol", "text": "Creatures in the spread take energy damage with the elemental descriptor chosen for your Smells Like Victory ability equal to 1d4 per level you possess, plus your Key Offensive Modifier, and starts [Burning]. A successful Reflex save negates the [Burning] condition. " },
						{ "name": "Flash", "text": "Creatures in the spread are [Blinded] and [Deafened] for two [Rounds]. A successful Reflex save negates this effect" },
						{ "name": "Tangle", "text": "Creatures in the spread are [Entangled] for two [Rounds]. A successful Reflex save negates this effect." },
						{ "name": "Blast", "text": "Creatures in the spread take damage equal to 1d6 per level you possess, plus your Key Offensive Modifier, and are pushed to the closest square outside of the burst, are knocked [Prone], and are [Dazed] for one [Round]. A successful Reflex save negates the [Dazed] condition and halves the damage." },
						{ "name": "Dispel", "text": "Choose one: End two target effects created by spells or spell-like abilities of 5th circle or lower that have durations and that originate from a creature or square within the spread or targeted a creature within the spread; or end a single target effect created by a spell or spell-like ability of 6th or 7th circle or lower that has a duration and that originates from a creature or square within the spread or targeted a creature within the spread. This is a [Dispelling] effect." }
					]
				},
				{ "name": "Show Them All", "text": "They laughed you out of the university – but who’s laughing now? Once per [Encounter], as a ranged attack, you can hurl a bomb that is beyond the wildest dreams of your stuffy professors at target square within [Close] range. You can make this attack as part of an attack action. The bomb detonates in a massive 60 ft radius spread originating from target square, inflicting 4 damage per level to all opponents in the vicinity. A successful Reflex save (DC 10 + ½ your level + your Intelligence modifier) halves the damage. Additionally, the blast leaves a cloud of flaming debris throughout its area of effect that lasts three [Rounds] and deals 2 damage per character level you possess to any creature entering the debris cloud and to any creature that begins or ends its turn in the debris cloud." }
			]
		},
		{
			"name": "Acrobatic Adept",
			"kdmOverride": "Con",
			"type": "rogue",
			"circles": [
				{ "name": "Just That Quick", "text": "You learn to react to attacks with stunning alacrity, sometimes dodging a blow that would otherwise pierce your armor. Once per [Round] per circle you possess from this track, when an opponent who is not [Concealed] or [Fully concealed] makes an attack against you, if you are not [Entangled], you may make a Reflex save and use the result in place of your AC against that attack if the result is higher than your AC." },
				{ "name": "Evasion", "text": "Once per [Encounter], if you make a successful Reflex saving throw against an offensive action that normally deals half damage on a successful save, you may instead take no damage. Additionally, you gain a bonus to Reflex saves equal to 1/4th your level (minimum 1)." },
				{ "name": "Supersonic Man", "text": "You gain a 10 ft bonus to your movement speed and a +1 bonus to AC, and you gain one [Bonus attack]." },
				{ "name": "Don’t Stop Me Now", "text": "You can slip out of any bonds, even magical ones, and dexterously dive over any obstacle. You gain [Immunity] to effects with the [Binding] descriptor, and moving out of a square of difficult terrain does not cost you extra movement." },
				{ "name": "Artful Dodger", "text": "Your sweet moves have become things of beauty. You never provoke attacks of opportunity." },
				{ "name": "No Sell", "text": "Once per [Encounter], any time during a [Round], you may make a Reflex save. You may use the result of this save to replace the results of any Fortitude or Will saves you make for the rest of the [Round]." },
				{ "name": "Faster Than the Eye", "text": "Your exceedingly acrobatic movements, like the unpredictable movements of a fly, fool the eyes of those attempting to harm you. Whenever you use Just that Quick and your opponent’s attack roll misses, you gain 20% [Miss chance] for one [Round]. This stacks with itself, but not other sources, up to a maximum of 80% [Miss chance]." }
			]
		},
		{
			"name": "I Am Ten Ninjas",
			"kdmOverride": "Wis",
			"type": "rogue",
			"circles": [
				{ "name": "Smoke Bomb!", "text": "As a ninja, you are wellschooled in the art of disappearing at a moment’s notice. As a swift action, you can create an obscuring mist, as the spell. Creating a fourth obscuring mistcauses the oldest of your obscuring miststo disperse immediately." },
				{ "name": "Ninja Reflexes", "text": "Once per [Encounter], when you make a successful Reflex saving throw against an offensive action that would normally have a lesser effect on a successful save (such as a spell with a save of “Reflex half ”), you may choose to instead ignore the effect entirely." },
				{ "name": "Shadow Step", "text": "As a swift action, you gain [Blindsight] out to [Melee] range and may add the [Teleport] descriptor to any of your movements for one [Round]. Whenever you activate the Smoke Bomb! ability, you may activate Shadow Step without taking another action." },
				{ "name": "Hummingbird Stance", "text": "You gain the Fly movement mode. In addition, as a standard action, you can move up to your speed and make a single attack at any point during your movement." },
				{ "name": "Flash of Shadows", "text": "Once per [Encounter] per 4 levels, as an immediate action, you can [Teleport] a distance up to your movement speed." },
				{ "name": "Paint It Black", "text": "You can make a Stealth check as a swift or immediate action. In addition, you no longer suffer a penalty to your Stealth check for moving at more than half your speed. Once per [Encounter], you may retain the result of your Stealth check after taking an offensive action." },
				{ "name": "Void Disciple", "text": "You are permanently [Invisible] and have [Immunity] to the [Revealed] condition. Special vision modes like [Blindsight], [Ghostwise sight], and [Tremorsense] do not allow creatures to ignore the effects of the [Invisibility] condition on you. As a free action, you can turn this ability on or off. However, you must still use the Stealth skill to remain fully unseen." }
			]
		},
		{
			"name": "Fortune's Friend",
			"kdmOverride": "Cha",
			"type": "",
			"circles": [
				{ "name": "A Little to the Left", "text": "You seem to narrowly dodge what would otherwise be lethal blows. Once per [Encounter], if you would be reduced to negative hit points, you are instead reduced to 1 hit point and immediately gain a move action. If you have the Swashbuckler track, this move action triggers the Once More! ability (if you wish to use it). " },
				{ "name": "Improvisation", "text": "As a swift action, you can grant yourself or an ally within [Close] range a +2 bonus on attack rolls, saving throws, and skill checks until the beginning of your next turn. " },
				{ "name": "Gift of Gab", "text": "By distracting your opponents with constant jokes, elaborate discourse, and simple nonsense, you gain a +3 deflection bonus to Armor Class and a +3 bonus to Reflex saving throws." },
				{ "name": "Better Lucky And Good", "text": "Twice per [Encounter], once per [Round], you can remove any one of the following conditions from yourself: [Battered], [Bleeding], [Blinded], [Confused], [Cowering], [Dazed], [Dazzled], [Deafened], [Entangled], [Exhausted], [Fatigued], [Frightened], [Nauseated], [Panicked], [Paralyzed], [Petrified], [Shaken], [Sickened] or [Stunned]. Activating this ability does not require an action, and can be done even if a condition would normally prevent you from acting." },
				{ "name": "Changing the Odds", "text": "Things that shouldn’t work in your favor sometimes do anyway. Once per [Scene], plus an additional time for every Fortune’s Friend circle you possess (including this one), as a swift action, you can reroll a single d20 roll after knowing whether that roll succeeds or fails. You must keep the second result, even if it’s unfavorable." },
				{ "name": "Never Tell Me the Odds", "text": "Once per [Round], as an immediate action, you can add 1d4 to a single d20 roll. If the result of the two dice rolls together is 20 or higher, it counts as rolling a natural 20 in any situation in which a natural 20 would matter." },
				{ "name": " Roll With It", "text": "Once per [Round], when you would take any amount of damage, you may take half that much damage instead." }
			]
		},
		{
			"name": "Just Blade",
			"type": "sage",
			"circles": [
				{ "name": "Grim Heritor", "text": "As a swift action, or part of another swift action, you may form a melee weapon of your choice out of pure energy, though it may include a decorative hilt as part of your personal stylings. This weapon has the [Arcane] property and three other weapon properties of your choice, and is a Lesser item of your design with enchantments as normal for a magic weapon of its type (see Chapter XIII). These choices are permanent. This weapon, called your Grim Heritor, does not count against your normal limit of attuned magic items. When you gain your 4th circle in Just Blade, redesign this weapon as a Greater item, and when you gain your 6th circle, redesign it as a Relic. Though your Grim Heritor possesses the [Arcane] property, the weapon itself is a supernatural ability, and attacks with it benefit from magic weapon item bonuses to attack, magic item enchantments that trigger on a hit, and the [Brutal] property. While wielding your Grim Heritor, you count as having a Good Base Attack Bonus (equal to your level). You may only have a single Grim Heritor in existence at a time, and may cause it to disappear as a free action." },
				{ "name": "Mental Thrust", "text": "As a move action, you may cause target opponent within [Close] range to be [Blown away] in a direction of your choosing. If that opponent would enter and leave a square you occupy, it provokes an attack of opportunity from you before passing on its less than merry way. A successful Reflex save (DC 10 + ½ your level + your KOM) negates this effect." },
				{ "name": "Mystic Focus", "text": "The burgeoning power of your art allows you to create an unstable circuit of arcane power in your Grim Heritor. You begin each [Encounter] with your Grim Heritor uncharged. Once per [Round], as a swift action, if your Grim Heritor is not already charged, you may choose a spell-like ability that you possess. If you do so, your Grim Heritor becomes charged. While your Grim Heritor is charged, you possess a 20% [Miss chance]. When you hit an opponent with an attack made using your Grim Heritor, if the Grim Heritor is charged, you may render it uncharged; note the result of your attack roll for that attack, and activate the chosen spell-like ability (if able) without provoking attacks of opportunity as a [Surge] effect. If the spell-like ability targets one or more creatures, you must choose that opponent as a target of the spell-like ability if able. If the spell-like ability targets one or more squares, you must choose one square that opponent occupies as a target of the spell-like ability if able. If you would make an attack roll for an attack against a creature as part of activating the spell-like ability, compare the noted result to that creature’s AC instead. If it equals or exceeds that creature’s AC, that attack hits that creature. Abilities and effects other than the spell-like ability’s effects that take place as the result of a hit or critical hit don’t activate as a result of this hit." },
				{ "name": "Vectored Thrust", "text": "You gain the Fly movement mode." },
				{ "name": "Devastating Barrage", "text": "You can manipulate the latent forces of the universe. Once per [Round], as a move action, you may create a line with a maximum length of 25 ft + 5 ft per four levels originating from you. Creatures occupying a square in the line are moved to the last square in the line. You then create an implosion, dealing damage equal to twice your level to creatures other than you in that square or any square adjacent to that square, moving those creatures to that square, and knocking them [Prone]. A successful Fortitude save (DC 10 + ½ your level + your KOM) halves the damage and negates the [Prone] condition and the moving effect from the implosion." },
				{ "name": "Indestructible Focus", "text": "You gain [Lesser resistance] to all damage. At the beginning of your turn, you gain a Grim Barrier that grants [Lesser resistance] against the next source of damage you suffer. Grim Barriers accumulate during an [Encounter] and stack with one another, but each time you are dealt damage, a single Grim Barrier dissipates. All Grim Barriers dissipate at the end of each [Encounter]." },
				{ "name": "Voice of Devastation", "text": "You can call upon the fundamental truths of the universe and proclaim your enemies’ mortality. Once per [Encounter], as a swift action, you may create a spread with a radius equal to your [Close] range originating from you that deals damage equal to three times your level to all opponents and renders them [Battered] for 3 [Rounds] and [Stunned] for 1 [Round]. A successful Will save (DC 10 + ½ your level + your KOM) negates the [Stunned] condition." }
			]
		},
		{
			"name": "Arcane Lore",
			"type": "sage",
			"circles": [
				{
					"name": "Black Tidings",
					"text": "Once per [Round], as a standard action, you toss twisting gyres of energy through the air, dealing devastating damage. The actual blast wave takes one of the two following forms, which you may freely alternate between.",
					"options": [
						{ "name": "Dread Wave", "text": "The Dread Wave manifests as a wedge with a length of 20 ft + 10 ft per circle of Arcane Lore you possess originating from you that deals energy damage with the [Cold] descriptor or magical damage with the [Negative] descriptor, chosen each time you activate Dread Wave. The Dread Wave deals damage equal to your KOM plus 1d4 per character level you possess to all creatures in the wedge and renders them [Shaken] for one [Round]. A successful Will save (DC 10 + ½ character level + Key Offensive Modifier) negates the [Shaken] condition." },
						{ "name": "Hammerfall", "text": "Hammerfall deals 1d6 energy damage with the [Fire] descriptor or physical damage, chosen each time you activate Hammerfall, per character level you possess to each creature in a target square within 100 ft plus 15 ft per character level or any square within one square of that square. At 3rd circle, this increases to within two squares of that square. At 5th circle, this increases to within three squares of that square. At 7th circle, this increases to within four squares of that square at 7th circle. A successful Reflex save (DC 10 + ½ character level + Key Offensive Modifier) halves the damage." }
					]
				},
				{
					"name": "Canto",
					"text": "",
					"choice": [
						{ "name": "Red Hymn", "text": "For every five points of damage dealt to an opponent by your Black Tidings, an ally of your choice within 100 ft is healed for 2 HP." },
						{ "name": "Grey Hymn", "text": "For every ten points of damage dealt by your Black Tidings to an opponent, any ally besides yourself of your choice within 100 ft may move 5 ft. This movement does not provoke attacks of opportunity." }
					]
				},
				{ "name": "With A Word", "text": "Whenever you use your Black Tidings ability, immediately after using it, you may [Teleport] up to 15 ft in any direction." },
				{ "name": "Verso", "text": "Sometimes the few must suffer in the name of your own personal and completely opaque agenda. Whenever you use Black Tidings, select one opponent who failed the associated save. This opponent is [Battered] for one [Round]." },
				{
					"name": "Recto",
					"text": "Recto improves the ability you selected as your canto. The following text replaces your Red Hymn or Grey Hymn respectively:",
					"choice": [
						{ "name": "Crimson Hymn", "text": "For every four points of damage dealt by your Black Tidings, an ally within 100 ft of your choice is healed for 2 hit points." },
						{ "name": "Silver Hymn", "text": "For every ten points of damage dealt by your Black Tidings, any ally besides yourself of your choice within 100 ft may move 10 ft. This movement does not provoke attacks of opportunity." }
					]
				},
				{ "name": "Bitter News", "text": "Once every two [Rounds], immediately after dealing damage with Black Tidings, you may inflict [HP reduction] equal to the damage dealt on each affected creature to each affected creature." },
				{
					"name": "Binding",
					"text": "",
					"choice": [
						{ "name": "Glimpse of Madness", "text": "Any creature affected by your Black Tidings who fails the associated save is [Blinded] for two [Rounds]." },
						{ "name": "Life Fades", "text": "Any creature affected by your Black Tidings who fails the associated save is [Exhausted] for the rest of the [Encounter]. This ability does not work if the target has [Immunity] to [Negative]." }
					]
				}
			]
		},
		{
			"name": "Force of Will",
			"type": "sage",
			"circles": [
				{ "name": "Healing Burst", "text": "By focusing for a moment on the mechanisms of creation, you can force a bit of life back into the world. As a move action, you may create a 15 ft radius spread originating from you, healing 1 HP per character level plus your Key Defensive Modifier to all allies within the spread. This is not a [Positive] or [Negative] effect and can only be used once per [Round]." },
				{ "name": "A Stitch In Time", "text": "Time is fleeting, but you have learned how to warp it for just a second, long enough perhaps to change fate. As a standard action, you may create a 15 ft radius spread originating from you, which affects a single ally within the area, plus an additional ally within the area for every circle you possess in this track. Those affected may immediately make a single melee or ranged attack. A creature may only be affected by A Stitch in Time once per [Round]." },
				{ "name": "Stem The Tide", "text": "Twice per [Encounter] as an immediate action, you may craft a shimmering rune of force, then bestow it on a single ally within 45 ft. You start any [Encounter] with one rune placed, and may have up to two placed at any given time. This rune serves to block half the damage that would be dealt against that ally by a single source, and then dissipates in a shudder of smoke. This effect stacks in such a way that someone with two active runes protecting them takes no damage from a single source, but cannot opt to split them across two sources of damage." },
				{ "name": "Steady Old Hand", "text": "You may use A Stitch In Time as a standard action or as a swift action, and the radius of its spread is increased to 25 ft." },
				{ "name": "Shields, Brace!", "text": "Whenever an opponent sets off a rune from the Stem the Tide ability, that opponent provokes an attack of opportunity. A successful Reflex save (DC 10 + ½ your level + your KOM) negates this effect." },
				{ "name": "Swift As Thought", "text": "Whenever you activate A Stitch in Time, you may also activate Healing Burst at the same time without taking another action. Healing Burst can now be activated any number of times per [Round]." },
				{ "name": "The Time Is Now", "text": "The clock is but an illusion. Once per [Round], you may place the protective rune from your Stem the Tide ability upon yourself in response to taking damage after learning how much damage you would take. This does not count against Stem the Tide’s [Encounter] limits." }
			]
		},
		{
			"name": "Arcane Secrets",
			"type": "sage",
			"circles": [
				{ "name": "Hungry Shadows", "text": " As a standard action, you may create a 15 ft radius spread originating from target square within [Medium] range, dealing damage equal to your KOM and inflicting a -1 penalty to attack rolls and and Reflex and Fortitude saves to all opponents in the spread and halving the movement speed of each of those opponents for 2 [Rounds]. This is an Evocation effect." },
				{
					"name": "Space, Discontent",
					"text": "",
					"choice": [
						{ "name": "Lungbreaker", "text": "As a standard action, you may create one 5 ft radius spread originating from target square within [Close] range for every 4 levels you possess (minimum one). Each spread lasts for 4 [Rounds]. Creatures on opposite sides of a spread lose line of effect to each other and are [Concealed] in respect to one another. Creatures within a spread are [Concealed] to creatures outside of it, and vice versa. Whenever a creature besides yourself begins its turn inside a spread or the first time each [Round] that a creature besides yourself enters a spread, it becomes [Nauseated] for one [Round]. A successful Fortitude save (DC 10 + ½ your level + your KOM) negates the [Nauseated] condition. This is a Creation effect." },
						{ "name": "Stutter Step", "text": "As a standard action, you may create a 30 ft radius spread originating from target square within [Close] range, inflicting the [Slowed] condition for 1 [Round] per 5 levels you possess (minimum one [Round]) on all creatures besides yourself in the area. A successful Will save (DC 10 + ½ your level + your KOM) negates the [Slowed] condition. This is a [Binding] Evocation effect." }
					]
				},
				{
					"name": "Dweomertide",
					"text": "You gain access to two Arcane Secrets, Spellbreaker and Reweave.",
					"options": [
						{ "name": "Spellbreaker", "text": "As a standard action, you may end a single target effect created by a spell or spell-like ability of a circle lower than your highest Arcane Secrets circle that has a duration and that originates from a creature or square within [Medium] range or targeted a creature within [Medium] range. This is a [Dispelling] effect." },
						{ "name": "Reweave", "text": "As a standard action, you may restore one effect ended by a [Dispelling] effect in the last two [Rounds] that affected a creature or object within [Medium] range." }
					]
				},
				{
					"name": "Space, Twisted",
					"text": "You gain access to the following Arcane Secrets:",
					"options": [
						{ "name": "Revelation", "text": "As a standard action, you may create a spread with a radius of 5 ft per circle of this track you possess originating from target square within [Close] range. This spread lasts for 2 [Rounds]. While they are within the spread, creatures are [Revealed], and if they are [Invisible], they are treated as not being [Invisible]. This is a Divination effect." },
						{ "name": "Dark Tendrils", "text": "As a standard action, you may use wall of thorns, as the spell." }
					]
				},
				{ "name": "Unbearable Lightness Of Casting", "text": "You may activate any Arcane Secret you know as a swift action." },
				{ "name": "Gravity Smash", "text": "You are able to summon the strength of the earth itself. As a standard action, you may create a 15 ft radius spread originating from target square within [Close] range, which lasts for 2 [Rounds]. While in the spread, creatures suffer a -2 penalty to attack rolls, AC, and all physical skill checks. Whenever a creature in the spread spends an action to cast a spell, if that creature has not made a save against an ability named Gravity Smash since spending that action, that spell has no effect. A successful Will save (DC 10 + ½ your level + your KOM) negates this effect. Each [Round], at the end of your turn, Gravity Smash deals 35 damage to each creature in the spread. This is a [Binding] Transmutation effect." },
				{ "name": "Cascade Failure", "text": "For each different Arcane Secret you’ve activated during this [Encounter], the save DCs of all your Arcane Secrets increases by +1, to a maximum of +4. For each different Arcane Secret you’ve chosen when activating the Mystic Focus ability during this [Encounter], your Grim Heritor gains a +1 bonus to hit while it is charged with an Arcane Secret, to a maximum of +4." }
			]
		},
		{
			"name": "Incantation",
			"type": "shaman",
			"circles": [
				{ "name": "Incantation", "text": "As a standard action, you may either heal an ally or deal damage to an opponent within [Medium] range. You heal HP or deal damage equal to 2d4 plus your Key Offensive Modifier. This amount increases by 1d4 for each character level beyond 1st; for example, you heal HP or deal damage equal to 21d4 + your KOM at level 20. Dealing damage to an opponent with your Incantation requires a successful ranged attack roll (this is not considered an attack with a weapon); healing an ally does not require an attack roll.Additionally, whenever you decide to use your Incantation, you count as having a Good Base Attack Bonus (equal to your character level) until the beginning of your next turn. This applies to any attack rolls you make as part of that Incantation." },
				{ "name": "Imbue Spell", "text": "As a swift action, you may spend a spell slot of any circle. If you do, choose a spell you know of that circle or lower which either has a Target listing of a single creature or has a listed Incantation version (if a spell fits both criteria, you must choose the Incantation version). When you hit an opponent with an Incantation or heal an ally with an Incantation this [Round], if the chosen spell is not discharged from your Incantation, you may note the result of your attack roll for your Incantation attack (if you attacked with your Incantation), and cast the chosen spell without provoking attacks of opportunity and without offering a save as a [Surge] effect. If you do, that spell is discharged from your Incantation. You must choose that opponent or ally as the target of the spell. If you would make an attack roll for an attack against a creature as part of casting the spell, compare the noted result to that creature’s AC instead. If it equals or exceeds that creature’s AC, that attack hits that creature. Abilities and effects other than the spell’s effects that take place as the result of a hit or critical hit don’t activate as a result of this hit." },
				{ "name": "Shaman’s Presence", "text": "Allies within 30 ft of you have [Fast healing] equal to your KDM. " },
				{ "name": " Guardian Spirits", "text": "Once per [Scene] after making a d20 roll and seeing the result, you may reroll it as an immediate action, taking the better of the two results." },
				{ "name": "Shallow Grave", "text": "Once per [Scene], as an immediate action, you can prevent an ally within [Close] range from dying for 1 [Round]. The ally ignores the [Dying], [Unconscious] and [Stable] conditions and has [Immunity] to the [Dead] condition for the duration of Shallow Grave, but unless the ally receives sufficient healing to raise their hit points above what would kill them, it immediately dies at the end of your turn after the effect expires. At 20th level, you can activate this ability once per [Encounter]." },
				{ "name": "Twin Incantation", "text": "Once per [Encounter], as a standard action, you may activate the Incantation ability twice. You may activate the Imbue Spell ability without taking an action immediately before the second Incantation is activated; the spell that may be cast as a result is not a [Surge] effect." },
				{ "name": "Stolen Moment", "text": "Once per [Encounter], you may immediately activate your healing Incantation upon an ally that has just been dealt damage or afflicted with a harmful condition or effect. This does not require an action. You may activate the Imbue Spell ability as an immediate action before activating the Incantation ability in this way; the spell must be cast and discharged." }
			]
		},
		{
			"name": "Shaman Spellcasting",
			"type": "shaman",
			"ksm": "Wis",
			"circles": [
				{ "name": "Circle 1", "text": "You cast spells drawn from the shaman spell list, detailed in Chapter XII. Your Wisdom modifier is your Spellcasting Ability Modifier (SAM) for this track. The DC for your spells is equal to 10 + ½ your character level + your Spellcasting Ability Modifier. You can only cast a certain number of spells of each spell level in a [Scene]. That number is noted on the “Spells per [Scene] by Circle” section of the table above. You also receive bonus spells per [Scene] for having a high Spellcasting Ability Modifier.You can only cast spells that you know. Any time that you level up, you can unlearn a single spell and learn a new spell of the same level. You cannot learn spells of a level you cannot cast. You may use an available spell slot of a circle to cast any spell you know of that circle or lower." },
				{ "name": "Cirlce 2", "text": "Gain 3 spells" },
				{ "name": "Cirlce 3", "text": "Gain 3 spells" },
				{ "name": "Cirlce 4", "text": "Gain 3 spells" },
				{ "name": "Cirlce 5", "text": "Gain 3 spells" },
				{ "name": "Cirlce 6", "text": "Gain 3 spells" },
				{ "name": "Cirlce 7", "text": "Gain 3 spells" }
			]
		},
		{
			"name": "Tactical Insight",
			"type": "tactician",
			"circles": [
				{ "name": "Combative Precognition", "text": "You and your allies may gain either a +3 bonus to attack rolls or a +3 deflection bonus to Armor Class against opponents affected by your Knowledge check. You choose which bonus to apply when activating your Tactical Insight ability. When you gain the 3rd circle of this track, you no longer have to choose: you gain both benefits of Combative Precognition whenever you activate it." },
				{ "name": "Psychological Warfare", "text": "You and your allies may gain a +2 bonus to Bluff, Diplomacy, Intimidate, and Perception checks against opponents affected by your Knowledge check." },
				{ "name": "Precognitive Resistance", "text": "You and your allies may gain a +2 bonus to saving throws against effects used or abilities activated by opponents affected by your Knowledge check." },
				{ "name": "Exploit Weakness", "text": "You and your allies may gain a +2 bonus to the DC of any abilities you or they activate against opponents affected by your Knowledge check." },
				{
					"name": "Advanced Insights",
					"text": "",
					"choice": [
						{ "name": "Quick Insight", "text": "You can activate your Tactical Insight ability as a swift action." },
						{ "name": "Deep Insight", "text": "Choose one of your Tactical Insight circles other than this one. You increase the bonus granted by that circle by 1." }
					]
				},
				{ "name": "Countermeasures", "text": "Once per [Encounter], as an immediate action, you may automatically cancel a spell, spell-like ability, or supernatural ability that an opponent affected by your Knowledge check attempts to activate. The ability automatically fails, but counts as having been activated for the purpose of any resource cost (such as spell slots) and the opponent’s action counts as having been used." },
				{ "name": "Unspeakable Secret", "text": "Once per [Encounter], as a swift action, you may divulge a secret so profound that it renders a single opponent affected by your Knowledge check [Stunned] for one [Round]. There is no save allowed, and if the opponent has [Immunity] to being [Stunned] the opponent is [Dazed] instead. If the opponent has [Immunity] to both, the ability has no effect, but you really should have known about its [Immunity] beforehand." }
			]
		},
		{
			"name": "Bag of Tricks",
			"type": "tactician",
			"circles": [
				{ "name": "Surgical Precision", "text": "Once per [Encounter] per circle of Bag of Tricks you possess, as a swift action, when you create an instantaneous spread, line, or wedge, you may remove or rearrange squares from the area effect, so long as the entire area effect is a contiguous shape within the effect’s range." },
				{ "name": "Early Warning", "text": "You and all allies within 30 ft gain a bonus to initiative checks equal to ¼ your level (minimum 1)." },
				{ "name": "Bait and Switch", "text": "Once per 4 levels per [Encounter] as a move action, you can switch the positions of two willing creatures. Both creatures must be within 10 ft per your character level of your location. You can use this ability to switch yourself with another creature. This is a [Teleport] effect." },
				{ "name": "The Enemy You Know", "text": "You gain permanent arcane sight as the spell. Many tacticians use this ability to counter enemies’ spells and abilities with their own." },
				{ "name": "Dweomerbreaker", "text": "Once per [Encounter], as a standard action, you may empower the attacks of allies within 30 ft until the beginning of your next turn. The first time each ally under this effect hits an opponent with an attack, they may end a single target effect created by a spell or spell-like ability that has a duration and that originates from the opponent or targeted the opponent. This is a [Dispelling] effect." },
				{ "name": "Saw That Coming", "text": "Once per [Encounter], as an immediate action, you can negate an offensive action that targets you specifically. This includes targeted spells, abilities, or attacks, but not area effects." },
				{ "name": "Checkmate", "text": "Once per [Encounter], as a standard action, you can imprison an opponent within your [Close] range for the next 2 [Rounds]. The opponent is incapable of acting or perceiving its surroundings, but it gains [Immunity] to damage and [HP reduction], it cannot be targeted by an attack or ability, and line of effect is blocked between the creature and any attack, ability, or effect. A successful Will save (DC 10 + ½ your level + your KOM) negates this effect, but leaves your target [Dazed] for 1 [Round]." }
			]
		},
		{
			"name": "Tactician Spellcasting",
			"type": "tactician",
			"ksm": "Int",
			"circles": [
				{ "name": "Circle 1", "text": "You cast spells drawn from the tactician spell list, detailed in Chapter XII. Your Intelligence modifier is your Spellcasting Ability Modifier (SAM) for this track. The DC for your spells is equal to 10 + ½ your character level + your Spellcasting Ability Modifier. You can only cast a certain number of spells of each spell level in a [Scene]. That number is noted on the “Spells per [Scene] by Circle” section of the table above. You also receive bonus spells per [Scene] for having a high Spellcasting Ability Modifier.You can only cast spells that you know. Any time that you level up, you can unlearn a single spell and learn a new spell of the same level. You cannot learn spells of a level you cannot cast. You may use an available spell slot of a circle to cast any spell you know of that circle or lower." },
				{ "name": "Cirlce 2", "text": "Gain 3 spells" },
				{ "name": "Cirlce 3", "text": "Gain 3 spells" },
				{ "name": "Cirlce 4", "text": "Gain 3 spells" },
				{ "name": "Cirlce 5", "text": "Gain 3 spells" },
				{ "name": "Cirlce 6", "text": "Gain 3 spells" },
				{ "name": "Cirlce 7", "text": "Gain 3 spells" }
			]
		},
		{
			"name": "Celestial",
			"type": "racial",
			"circles": [
				{ "name": "Divine Radiance", "text": "At will, as a free action, if you do not already have a radiant spread, you may create a radiant spread with a radius of your [Close] originating from you that moves with you and lasts until dismissed as a swift action. This spread causes opponents in it to lose the [Covered] condition and be [Revealed]. Any opponent who leaves the spread is [Revealed] for one [Round] and cannot benefit from the [Covered] condition for one [Round]. As a swift action, you may increase the light’s brightness momentarily, leaving all opponents within the radiant spread [Dazzled] for 5 [Rounds]. A successful Fortitude save (DC 10 + ½ your level + your Wisdom modifier) reduces the duration of the [Dazzled] condition to 1 [Round]." },
				{ "name": "Sway the Heavens", "text": "Your attacks awe opponents with their wondrous grace. Once per [Round], if you hit an opponent that has been [Revealed] by your Divine Radiance with an attack, you may cause that opponent to be unable to make attacks of opportunity for one [Round]. This does not require an action. You may activate this ability an additional time per [Round] for every circle of Celestial you possess above 2nd." },
				{
					"name": "Path to Glory",
					"text": "",
					"choice": [
						{ "name": "Angelic Wings", "text": "You gain a pair of wings and the Fly movement mode." },
						{ "name": "Prophetic Vision", "text": "Brief glimpses into the future offer you keen insight into battle. Once per [Round], when you activate Divine Radiance as a swift action, you may gain a +3 bonus to attack rolls or Armor Class until the beginning of your next turn." }
					]
				},
				{
					"name": "Benediction",
					"text": "",
					"choice": [
						{ "name": "Strength of Fate", "text": "Twice per [Encounter], you can activate the Divine Radiance ability as an immediate action, and replace the Armor Class or one saving throw bonus of an ally within the range of your Divine Radiance with your own for one [Round]. When you do so, you may benefit from other abilities you possess that trigger when you activate Divine Radiance as a swift action." },
						{ "name": "Aura of Vitality", "text": "You gain [Immunity] to the [Blinded] condition. In addition, twice per [Encounter], when you activate Divine Radiance as a swift action, you may grant all allies within the range of your Divine Radiance 2 temporary HP per level you possess." }
					]
				},
				{
					"name": "Harmonious Scales",
					"text": "",
					"choice": [
						{ "name": "Purifying Flame", "text": "Twice per [Encounter], as a standard action, you may use sunburst, as the spell. The DC to resist it is (10 + ½ your level + your Wisdom modifier)." },
						{ "name": "Cleansing Light", "text": "Twice per [Encounter], as a standard action, you may use heal, as the spell. The DC to resist it is (10 + ½ your level + your Wisdom modifier)." }
					]
				},
				{
					"name": "Righteous Wrath",
					"text": "",
					"choice": [
						{ "name": "Strike Senseless", "text": "The first time you hit an opponent with an attack each [Round], that opponent is [Blinded] and [Deafened] for 1 [Round]. A successful Fortitude save (DC 10 + ½ your level + your Wisdom modifier) negates the [Blinded] and [Deafened] conditions." },
						{ "name": "That Hideous Strength", "text": "Once per [Round], when you make an attack, you may force all enemies within the area of your Divine Radiance to make a Will save (DC 10 + ½ your level + your Wisdom modifier) or be [Battered] for 2 [Rounds]." }
					]
				},
				{ "name": "Divine Mercy", "text": "Once per [Encounter], when you activate Divine Radiance as a swift action, you call down a shield of blistering light which grants a single ally within [Long] range [Immunity] to damage for a single [Round]." }
			]
		},
		{
			"name": "Demon",
			"type": "racial",
			"circles": [
				{ "name": "Demonic Traits", "text": "Select one Interaction skill (Bluff, Diplomacy, Intimidate, or Perception). You gain a +3 bonus on all checks with that skill. A demon also has the following natural weapon:", "options": [{ "name": "Demon Claws", "text": "Melee, range [Melee], [Brutal 2], [Devastating]." }] },
				{ "name": "Demon Magic", "text": "Once per [Encounter], as a standard action, you may use either darkness or see invisibility, as the spells." },
				{
					"name": "Abominable Essence",
					"text": "",
					"choice": [
						{ "name": "Fell Flight", "text": "You gain wings and the Fly movement mode." },
						{ "name": "Apocalyptic Visions", "text": "Brief glimpses into the future offer you keen insights into battle. Once per [Round], as a swift action, you may gain a +3 bonus to attack rolls or to Armor Class for one [Round]. " }
					]
				},
				{ "name": "Thick Skinned", "text": "You gain a +1 item bonus to your Armor Class for every circle of Demon that you possess, and [Lesser resistance] to physical damage." },
				{
					"name": "Vessel of Entropy:",
					"text": "",
					"choice": [
						{ "name": "Shield of Chaos", "text": "You gain a 20% [Miss chance], and your [Lesser resistance] to physical damage improves to [Resistance] to physical damage." },
						{ "name": "Chaos Hammer", "text": "Twice per [Encounter], as a standard action, you may deal 1d8 damage per level and inflict [Energy drained] to all opponents within [Close] range. A successful Fortitude save (DC 10 + ½ your level + your Key Offensive Modifier) halves the damage and negates the [Energy drained] condition." }
					]
				},
				{
					"name": "Cruel Reality",
					"text": "",
					"choice": [
						{ "name": "Bonded by Blood", "text": "You gain the ability to sense how close to death creatures are. You know the maximum and current HP of every creature within [Medium] range to which you have line of sight. In addition, as a swift action, you can form a horrifying bond with a creature within [Medium] range that splits all damage you take equally with that creature until the end of the [Encounter]. (You can damage yourself to damage the bonded creature.) [Damage reduction] and [Resistance] do not apply to damage that creature takes from this ability. As a move action, that creature may make a Fortitude save (DC 10 + ½ your level + your Key Offensive Modifier) to sever this bond. You may only have one such bond at a time." },
						{ "name": "Aura of Insanity", "text": "Once per [Round], as a free action, you may create spread with a radius of your [Close] range originating from you, which renders all opponents within the area [Confused] for one [Round]. A successful Will save (DC 10 + ½ your level + your KOM) negates the [Confused] condition. Each opponent may only be affected by this ability once per [Encounter]." }
					]
				},
				{ "name": "Aura of Death", "text": "Everything around you seems to die faster than it otherwise should. At the start of each of your turns, all opponents in [Medium] range gain the [Bleeding] condition, all opponents in [Close] range gain the [Battered] condition for one [Round], and whenever you hit an opponent with an attack in [Melee] range, that attack deals additional damage equal to twice your Key Offensive Modifier. A successful Fortitude save (DC 10 + ½ your level + your KOM) negates the [Battered] condition. (These effects are cumulative. For instance, a creature in your [Melee] range suffers all three effects.)" }
			]
		},
		{
			"name": "Dragon",
			"type": "racial",
			"circles": [
				{ "name": "Agility", "text": "You gain the Fly movement mode. You also gain the following natural weapon:", "options": [{ "name": "Dragon Claws", "text": "Melee, range [Melee], [Brutal 3]." }] },
				{ "name": "Vitality", "text": "Your maximum HP increases by one point per character level per circle of the Dragon track you possess, to a maximum of +140 HP at 20th level." },
				{ "name": "True Dragon", "text": "This marks your transition from your previous form to the dragon you were meant to be. Your scales have hardened into a suit of natural armor, which can be improved with enchantments (see Chapter XIII) as if it were a normal suit of armor. This armor grants you a bonus to AC that is both item and deflection (and thus stacks with neither item not deflection bonuses), equal to your circles in the Dragon track, which improves by +1 if it is enchanted as a Greater Item or Relic, or +2 if it is enchanted as an Artifact. The Masterwork enchantment can never be applied to your scales. In addition, whenever you hit with an attack using your Dragon Claws, you are healed for half the damage you dealt on that attack, up to your level in HP." },
				{ "name": "Dignity", "text": "All conditions and [Binding] effects affecting you have their durations reduced by one [Round], to a minimum of 1 [Round]. If a condition would normally persist for an [Encounter], it instead lasts eight [Rounds] or until the [Encounter] ends, whichever occurs first. If a condition would normally persist for a [Scene], it instead lasts for the [Encounter]. If a condition would normally persist for a [Quest], it instead lasts for the [Scene]. Permanent conditions are unaltered." },
				{ "name": "Endurance", "text": "Fatal damage you are subjected to takes a full [Round] to kill or incapacitate you. During that [Round], you may be healed." },
				{ "name": "Power", "text": "Twice per [Encounter], as a swift action, you may let loose a horrible challenge. Opponents within [Close] range are [Deafened] for one [Round], and they must use their standard and move actions to either flee or approach you (using standard actions to Run and move actions to move away), or target you with offensive actions for one [Round]. A successful Will save (DC 10 + ½ your level + your KOM) negates this effect." },
				{ "name": "Great Wyrm", "text": "You have grown in power, transcending the mortality of lesser beings. Once per [Scene], whenever you die or are rendered [Unconscious], you are revived at the beginning of the next [Round] with full HP. You can delay your revival or choose not to return at all. If you die more than once during a [Scene], you may come back to life at the beginning of the next [Quest]." }
			]
		},
		{
			"name": "Sentient Construct",
			"type": "racial",
			"circles": [
				{
					"name": "Sturdy Frame",
					"text": "",
					"choice": [
						{ "name": "Hard to Break", "text": "Once per [Encounter], if you make a successful Fortitude or Will save against an effect that would normally have a lesser effect on a successful save (such as a spell with a save of “Fortitude half ”), you instead ignore the effect entirely." },
						{ "name": "Harder, Better, Faster, Stronger", "text": "You gain a +1 bonus to all damage for every circle of this track that you possess, and a 5 ft. bonus to your movement speed for every even circle of this track that you possess. You also gain a +2 bonus to saves against combat maneuvers." }
					]
				},
				{
					"name": "Built to Last",
					"text": "",
					"choice": [
						{ "name": "Nanites", "text": "You gain [Fast healing] equal to your Key Defensive Modifier." },
						{ "name": "Heavy Metal", "text": "As a standard action, you deal damage equal to your character level + your Key Offensive Modifier to every opponent in [Melee] range. Opponent dealt damage by this ability are [Knocked down]. A successful Reflex save (DC 10 + ½ your level + your Key Offensive Modifier) negates being [Knocked down]." }
					]
				},
				{
					"name": "Onboard Radar",
					"text": "",
					"choice": [
						{ "name": "Sensor Suite", "text": "Your advanced senses enable you to penetrate illusions that would fool organic creatures. You gain [Immunity] to effects with the [Figment] descriptor. You also gain [Tremorsense] out to [Close] range and [Blindsight] out to [Melee] range." },
						{ "name": "Targeting System", "text": "You gain [Tremorsense] out to [Close] range. Whenever you use [Tremorsense] to image the area (see Chapter IX), you gain a +2 bonus to attack rolls against any opponent within your [Tremorsense] that [Round], and whenever you deal damage with an attack to an opponent within your [Tremorsense] that [Round], you deal 1d4 additional damage with the [Precision] descriptor per circle of Sentient Construct." }
					]
				},
				{
					"name": "Auxiliary Systems",
					"text": "",
					"choice": [
						{ "name": "Precise Logic", "text": "You gain [Immunity] to effects with the [Mind-affecting] descriptor." },
						{ "name": "Suppressive Fire", "text": "As a move action, you may create a line with a length of your [Medium] range originating from you that deals 2d4 times your Key Offensive Modifier damage to creatures within the area and knocks them [Prone]. A successful Reflex save (DC 10 + ½ your level + your KOM) negates the [Prone] condition." }
					]
				},
				{
					"name": "Defensive Matrix",
					"text": "",
					"choice": [
						{ "name": "Spell Disruption", "text": "You gain [Resistance] to energy and magic damage." },
						{ "name": "Active Stabilizer", "text": "You gain [Resistance] to physical damage." }
					]
				},
				{
					"name": "Upgraded Chassis",
					"text": "",
					"choice": [
						{ "name": "Iron Constitution", "text": "You gain [Immunity] to the [Bleeding], [Sickened], and [Nauseated] conditions." },
						{ "name": "Charged Attack", "text": "Once per [Round], as a swift action, you may charge up energy. Whenever you do so, you gain a bonus to damage you deal with attacks or offensive actions equal to your KOM for one [Round]. All damage you deal with attacks or offensive actions during that [Round] also ignores 1 point of [Damage reduction] and [Resistance] per 2 levels you possess, and may inflict the [Burning] and [Bleeding] conditions at your choice." }
					]
				},
				{
					"name": "State of the Art",
					"text": "",
					"choice": [
						{ "name": "Kinetic Bombardment", "text": "As a standard action, you may pick one square within [Medium] range. You deal 15d6 damage to all creatures within your [Close] range from that square. Those creatures lose [Flying] and the the Fly movement mode for two [Rounds]. In addition, creatures dealt damage by this ability are [Blown away] in a direction of your choice. A successful Fortitude save (DC 10 + ½ your level + your Key Offensive Modifier) negates being [Blown away]." },
						{ "name": "Big Finish", "text": "Three times per [Encounter], as a move action, the next time you hit an opponent with an attack, that attack deals 4 additional fury damage per level and inflicts the [Battered] condition until the end of the [Encounter], and the [Slowed] condition for two [Rounds]. A successful Fortitude save (DC 10 + ½ your level + your Key Offensive Modifier) halves the additional damage and negates the [Slowed] condition. This is a [Death] effect." }
					]
				}
			]
		},
		{
			"name": "Undead (Ghoul)",
			"type": "racial",
			"circles": [
				{ "name": "Horrible Bite", "text": "You draw strength from the flesh of sentient creatures. Once per [Round], when you hit an opponent with your Ghoul Bite natural weapon, you may cause that opponent to become [Sickened] for one [Round] and heal yourself 1 hit point per level. A successful Fortitude save (DC 10 + 1/2 your level + your KOM) negates the [Sickened] condition and the healing. You also gain the Ghoul Bite natural weapon", "options": [{ "name": "Ghoul Bite", "text": "Melee, range [Melee], [Brutal 3]" }] },
				{ "name": "Unholy Regeneration", "text": "You gain [Fast healing] equal to your Key Defensive Modifier." },
				{ "name": "The Flesh is Strong", "text": "You gain [Immunity] to [Fear], [Bleeding], and the in-combat use of Intimidate." },
				{ "name": "Infected Bite", "text": "Whenever you hit an opponent with an attack using your Ghoul Bite natural weapon, that opponent gains [Vulnerability] to physical damage for 1 [Round]." },
				{ "name": "Necrotic Aura", "text": "Each opponent takes a penalty to all d20 rolls based on how close it is to you: a -3 penalty within your [Melee] range, a -2 penalty within your [Close] range, and a -1 penalty within your [Medium] range. These penalties do not stack and expire as soon as the opponent leaves the area of effect." },
				{ "name": "Heartstopper", "text": "You radiate an aura of decay.Any effect that would heal an opponent within [Medium] range heals 2 fewer points per level, to a minimum of 1 hit point healed." },
				{ "name": "No Requiem", "text": "Heroes who manage to strike you down are doomed to frustration. Once per [Scene], if you are killed or rendered [Unconscious], you return to undeath after 1 [Round] with full hit points. You may delay your revival or choose not to return at all." }
			]
		},
		{
			"name": "Undead (Lich)",
			"type": "racial",
			"circles": [
				{ "name": "Undying Magecraft", "text": "You draw strength from ambient magical energy. Whenever you cast a spell or spell-like ability, or an effect created by a spell or spell-like ability is ended by a [Dispelling] effect within [Close] range, you heal 1 hit point per 2 character levels, minimum 1. At will, as a standard action, you may also use magic missile, as the spell, as a spell-like ability." },
				{ "name": "Sorcerous Endurance", "text": "Choose either [Cold] or [Electricity]. You gain [Resistance] to the chosen element. At 6th circle, this improves to [Resistance] to energy damage." },
				{ "name": "The Flesh is Strong", "text": "You gain [Immunity] to [Fear], [Bleeding], and the in-combat use of Intimidate." },
				{ "name": "Hellfire Empowerment", "text": "You gain a +2 bonus to the DCs of spells, spell-like abilities, and supernatural abilities you possess that have one or more targets, and may use those spells or abilities as if their range categories were one higher, to a maximum of [Extreme] range. Whenever an opponent is hit by one of your spells, spell-like abilities, or supernatural abilities or fails a save against one, you may cause that opponent to become [Burning]." },
				{ "name": "Necrotic Aura", "text": "Each opponent takes a penalty to all d20 rolls based on how close it is to you: a -3 penalty within your [Melee] range, a -2 penalty within your [Close] range, and a -1 penalty within your [Medium] range. These penalties do not stack and expire as soon as the opponent leaves the area of effect." },
				{ "name": "Arcane Insight", "text": "Once per [Encounter], as a swift action, you may use greater dispel magic, as the spell." },
				{ "name": "No Requiem", "text": "Heroes who manage to strike you down are doomed to frustration. Once per [Scene], if you are killed or rendered [Unconscious], you return to undeath after 1 [Round] with full hit points. You may delay your revival or choose not to return at all." }
			]
		},
		{
			"name": "Undead (Mummy)",
			"type": "racial",
			"circles": [
				{ "name": "Growing Horror", "text": "You draw strength from the fear of surrounding mortals. Every time an opponent within [Close] range fails a saving throw against a [Fear] effect, you regain 1 hit point per level. The first opponent you hit each [Round] must make a Will save (DC 10 +½ your level + your Key Offensive Modifier) or become [Shaken] for one [Round]." },
				{ "name": "Well Embalmed", "text": "You now feed on courage as well as fear. You gain [Lesser resistance] to physical damage. Whenever a creature other than yourself within [Close] range ignores a [Fear] effect due to an [Immunity] to [Fear], you regain 1 hit point per 2 levels you possess." },
				{ "name": "The Flesh is Strong", "text": "You gain [Immunity] to [Fear], [Bleeding], and the in-combat use of Intimidate." },
				{ "name": "Fear Aura", "text": "The first time each opponent enters your [Melee] range in an [Encounter], you may choose to give that opponent a terrifying gaze that causes that opponent to become [Shaken]. A successful Will save (DC 10 + ½ your level + your Key Offensive Modifier) negates the [Shaken] condition." },
				{ "name": "Necrotic Aura", "text": "Each opponent takes a penalty to all d20 rolls based on how close it is to you: a -3 penalty within your [Melee] range, a -2 penalty within your [Close] range, and a -1 penalty within your [Medium] range. These penalties do not stack and expire as soon as the opponent leaves the area of effect." },
				{ "name": "Contagious Touch", "text": "As a standard action, you may make a single attack. On a hit, you deal damage as normal and inflict a -3 penalty to attack rolls and a -5 penalty to damage until the end of the [Encounter]. A successful Fortitude save (DC 10 + ½ your level + your Key Offensive Modifier) negates these penalties. Additionally, once per [Round], as a swift action, you may inflict a -3 penalty to attack rolls and a -5 penalty to damage until the end of the [Encounter] on any creature within 5 ft + 5 ft per 5 levels you possess of a creature already penalized by Contagious Touch. A successful Fortitude save (DC 10 + ½ your level + your Key Offensive modifier) negates these penalties." },
				{ "name": "No Requiem", "text": "Heroes who manage to strike you down are doomed to frustration. Once per [Scene], if you are killed or rendered [Unconscious], you return to undeath after 1 [Round] with full hit points. You may delay your revival or choose not to return at all." }
			]
		},
		{
			"name": "Undead (Vampire)",
			"type": "racial",
			"circles": [
				{ "name": "Bloodlust", "text": "You draw strength from feeding on blood. Whenever you deal damage with your Vampire Bite natural weapon, you heal half the damage dealt, to a maximum of your Key Offensive Modifier. You gain the Vampire Bite natural weapon:", "options": [{ "name": "Vampire Bite", "text": "Melee, range [Melee], [Brutal 2], [Magnum]." }] },
				{ "name": "Discorporation", "text": "At will, as a swift action, you can turn into a swarm of bats, mist, or similar form to move between opponents and around obstacles (and even through cracks in walls) with ease. For one [Round], you do not provoke attacks of opportunity while moving and gain the Fly movement mode. You may enter occupied squares, but if you end your movement in an occupied square, you are shunted to the last unoccupied square you entered." },
				{ "name": "The Flesh is Strong", "text": "You gain [Immunity] to [Fear], [Bleeding], and the in-combat use of Intimidate." },
				{ "name": "Entrancing Gaze", "text": "Once per [Encounter], as a standard action, you may gain the effects of a sanctuaryspell with a DC of 10 + ½ your level + your Key Offensive Modifier and cause all opponents within [Close] range to become [Confused] for three [Rounds]. A successful Will save (DC 10 + ½ your level + your Key Offensive Modifier) negates the [Confused] condition." },
				{ "name": "Necrotic Aura", "text": "Each opponent takes a penalty to all d20 rolls based on how close it is to you: a -3 penalty within your [Melee] range, a -2 penalty within your [Close] range, and a -1 penalty within your [Medium] range. These penalties do not stack and expire as soon as the opponent leaves the area of effect." },
				{ "name": "Child of Shadows", "text": "You gain [Fast healing] equal to your character level. In addition, you may now use your Discorporation ability as a free action. Whenever you use Discorporation, for one [Round], whenever you move, you may make any opponent within [Melee] range of your movement path [Shaken] for the rest of the [Encounter]. A successful Will save (DC 10 + ½ your level + your Key Offensive Modifier) negates the [Shaken] condition. You may only make each opponent [Shaken] with this ability once per [Encounter]." },
				{ "name": "No Requiem", "text": "Heroes who manage to strike you down are doomed to frustration. Once per [Scene], if you are killed or rendered [Unconscious], you return to undeath after 1 [Round] with full hit points. You may delay your revival or choose not to return at all." }
			]
		},
		{
			"name": "Undead (Skeleton Champion)",
			"type": "racial",
			"circles": [
				{ "name": "Devastating Strike", "text": "At the beginning of an [Encounter], you gain a focus point. Once per [Round], when an ally in [Close] range activates a spell, spell-like, or supernatural ability, takes an offensive action, or is affected by an offensive action, you gain a focus point. In addition, you may spend 3 focus points during an attack action to make a [Bonus attack] and heal 1 hit point per level." },
				{ "name": "Rattling Bones", "text": "Once per [Round], as a swift action, as long as you possess at least 1 point of focus, you may gain a +2 bonus to your next attack roll, and deal additional energy damage with the [Acid], [Cold], [Electricity], or [Fire] descriptor equal to your KOM whenever you deal damage with an attack for one [Round]." },
				{ "name": "The Flesh is Strong", "text": "You gain [Immunity] to [Fear], [Bleeding], and the in-combat use of Intimidate." },
				{ "name": "Fury of the Dead", "text": "Once per [Round], you may replace one attack from your attack action with the Bull Rush, Disarm, or Trip combat maneuver. The Disarm and Trip combat maneuvers are made with the same attack bonus as the replaced attack." },
				{ "name": "Necrotic Aura", "text": "Each opponent takes a penalty to all d20 rolls based on how close it is to you: a -3 penalty within your [Melee] range, a -2 penalty within your [Close] range, and a -1 penalty within your [Medium] range. These penalties do not stack and expire as soon as the opponent leaves the area of effect." },
				{ "name": "Eternal Warrior", "text": "You gain [Lesser resistance] to all damage. Whenever you would be dealt damage, you can spend a focus point to increase your [Lesser resistance] from this ability to [Resistance] against that damage, or two focus points to increase your [Lesser resistance] from this ability to [Greater resistance] against that damage." },
				{ "name": "No Requiem", "text": "Heroes who manage to strike you down are doomed to frustration. Once per [Scene], if you are killed or rendered [Unconscious], you return to undeath after 1 [Round] with full hit points. You may delay your revival or choose not to return at all." }
			]
		},
		{
			"name": "Utter Brute",
			"type": "racial",
			"circles": [
				{
					"name": "Uncivilized",
					"text": "You gain a [Melee] natural weapon with the [Brutal 2] and [Reach] properties.",
					"choice": [
						{ "name": "Defender", "text": "You gain a bonus that is both fury and item to Armor Class equal to the higher of +2 or the number of circles of Utter Brute you possess." },
						{ "name": "Attacker", "text": "You gain a bonus that is both fury and item to your attack rolls equal to the number of circles of Utter Brute you possess." }
					]
				},
				{ "name": "Unforgiving", "text": "The first time you hit with an attack each [Round], after dealing damage, you deal [HP reduction] equal to that amount of damage, up to your character level. In addition, once per [Encounter], as you die, you may take a standard action. You’re still [Dead], so healing won’t help you, and you can’t activate abilities to resurrect yourself if you opt to activate Unforgiving. Triggered abilities with no action cost may be activated instead of the standard action." },
				{ "name": "Unrelenting", "text": "At the beginning of your turn, you may move 5 ft. At the end of your turn, you may move 5 ft. Effects and conditions other than [Dead] that prevent movement do not prevent this. If you are [Grappled], or [Pinned], this movement causes the creature grappling or pinning you to move 5 ft in the same direction, and does not end the [Grappled] or [Pinned] condition. This movement does not provoke attacks of opportunity." },
				{
					"name": "Unnatural",
					"text": "",
					"choice": [
						{ "name": "Soldier", "text": "You gain a +3 bonus to attack rolls and Fortitude saves, a bonus to your maximum hit points equal to +3 per level, and a +10 ft bonus to your movement speed." },
						{ "name": "Striker", "text": "You gain a +3 bonus to attack rolls and Fortitude saves, a bonus to your maximum hit points equal to +3 per level, and a +5 ft bonus to your [Melee] range." },
						{ "name": "Skirmisher", "text": "You gain a +1 bonus to attack rolls and Fortitude saves, a bonus to your maximum hit points equal to +1 per level, a +15 ft bonus to your movement speed, and a +5 ft bonus to your [Melee] range." }
					]
				},
				{
					"name": "Unrelenting",
					"text": "",
					"choice": [
						{ "name": "Flight & Focus", "text": "You gain the Fly movement mode. & You can eavesdrop on telepathic communication if any participant is within [Close] range." },
						{ "name": "Flight & Flexibility", "text": "You gain the Fly movement mode. & Your [Melee] range is increased by 10 ft." },
						{ "name": "Flight & Flesh", "text": "You gain the Fly movement mode. & You gain [Fast healing] equal to your character level." },
						{ "name": "Focus & Flexibility", "text": "You can eavesdrop on telepathic communication if any participant is within [Close] range. & Your [Melee] range is increased by 10 ft." },
						{ "name": "Focus & Flesh", "text": "You can eavesdrop on telepathic communication if any participant is within [Close] range. & You gain [Fast healing] equal to your character level." },
						{ "name": "Flexibility & Flesh", "text": "Your [Melee] range is increased by 10 ft. & You gain [Fast healing] equal to your character level." }
					]
				},
				{ "name": "Unbreakable", "text": "You gain [Immunity] to two of the following: [Stunned], [Dazed], [Prone], [Slowed], [Fear] effects (this includes [Shaken], [Frightened], [Panicked] and [Cowering])." },
				{ "name": "Unstoppable", "text": "You gain [Immunity] to [Unconscious] and [Dying], though you still die at -(Constitution) HP. Additionally, every time you hit an opponent with an attack, that opponent is pushed back 5 ft." }
			]
		},
		{}
	];
});