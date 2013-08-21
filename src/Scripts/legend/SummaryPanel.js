define([
	'dojo/_base/declare',
	'dijit/layout/ContentPane',
	'dijit/_TemplatedMixin',
	'dojo/text!./templates/SummaryPanel.html',
    "dojo/string",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "./data/currentCharacter"
], function (
	declare,
	ContentPane,
    _TemplatedMixin,
    template,
    string,
    lang,
    domConstruct,
    currentCharacter) {
    return declare('legend.SummaryPanel', [ContentPane, _TemplatedMixin],
        {
            templateString: template,
            postCreate: function () {
                currentCharacter.watch(lang.hitch(this, this.update));
                this.update();
            },
            update: function () {
                this.initiative.innerHTML = currentCharacter.get("initiative");
                this.speed.innerHTML = currentCharacter.get("speed");
                this.size.innerHTML = currentCharacter.get("size");
                this.type.innerHTML = currentCharacter.get("type");
                this.combatManeuverDC.innerHTML = currentCharacter.get("combatManeuverDC");

                this.hp.innerHTML = currentCharacter.get("hp");
                this.ac.innerHTML = currentCharacter.get("ac");
                this.fort.innerHTML = currentCharacter.get("fort");
                this.reflex.innerHTML = currentCharacter.get("reflex");
                this.will.innerHTML = currentCharacter.get("will");
                this.awareness.innerHTML = currentCharacter.get("awareness");
                this.updateSpecialQualities();

                //this.ab.innerHTML = currentCharacter.get("ab");
                //this.damage.innerHTML = currentCharacter.get("damage");
                //this.attack.innerHTML 

                this.str.innerHTML = currentCharacter.get("Str");
                this.dex.innerHTML = currentCharacter.get("Dex");
                this.con.innerHTML = currentCharacter.get("Con");
                this.int.innerHTML = currentCharacter.get("Int");
                this.wis.innerHTML = currentCharacter.get("Wis");
                this.cha.innerHTML = currentCharacter.get("Cha");

                this.updateSkills();

                this.bluffDefense.innerHTML = currentCharacter.get("bluffDefense");
                this.diplomacyDefense.innerHTML = currentCharacter.get("diplomacyDefense");
                this.intimidateDefense.innerHTML = currentCharacter.get("intimidateDefense");
                this.perceptionDefense.innerHTML = currentCharacter.get("perceptionDefense");

                this.kom.innerHTML = currentCharacter.getKOM();
                this.komValue.innerHTML = currentCharacter.get("kom");
                this.kdm.innerHTML = currentCharacter.getKDM();
                this.kdmValue.innerHTML = currentCharacter.get("kdm");
                this.bab.innerHTML = currentCharacter.get("bab");

                this.updateAbilities();
            },
            updateSpecialQualities: function () {
                this.specialQualities.innerHTML = "TBD";
            },
            updateSkills: function () {
                var s = currentCharacter.get("skills");
                var output = [];
                for (var i = 0; i < s.length; i++) {
                    output.push(s[i] + " +" + currentCharacter.getSkill(s[i]));
                }
                this.skills.innerHTML = output.join(", ");
            },
            updateAbilities: function () {
                var circles = currentCharacter.getCircles();
                var html = "";
                for (var i = 0; i < circles.length; i++) {
                    var circle = circles[i];
                    html += string.substitute("<div><span class='title'>${name}</span>&ndash;${text}", circle);
                    if (circle.options) {
                        for (var j = 0; j < circle.options.length; j++) {
                            html += string.substitute("<br/><span class='title'>&nbsp;&nbsp;&nbsp;&raquo;&nbsp;${name}</span>&ndash;${text}", circle.options[j]);
                        }
                    }
                    html += "</div><br/>";
                }
                this.abilities.innerHTML = html;
            }
        });
})