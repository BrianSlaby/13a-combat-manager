import { monsterStatBlock } from "../types"

// Complete data for CRB monsters
// Data based on 13th Age Core Rulebook, 1st Edition

const crbMonsterData: monsterStatBlock[] = [

    // ANIMALS

    {
        name: "Dire Rat",
        type: "beast",
        level: 1,
        sizeOrStrength: "normal",
        role: "mook",
        mookNumber: 1,
        initiative: "+2",
        ac: 15,
        pd: 15,
        md: 10,
        hp: 6,
        health: 6,
        attacks: [ 
            {
                type: "melee",
                target: "",
                name: "Infected Bite",
                bonus: 5,
                defenseTargeted: "AC",
                damage: null,
                effect: "4 ongoing damage",
                miss: "",
                extraEffects: [],
                limitedUse: ""
            }

        ],
        specialAbilities: [],
        nastierSpecials: [
            {
                name: "Squealing Pack Attack",
                text: "This creature gains a +1 attack bonus per other dire rat engaged with the target it's attacking."
            },
            {
                name: "Dire Features",
                text: "Roll on table or make up."
            }
        ],
        isStaggered: false,
        id: 3
    },

    {
        name: "Giant Ant",
        type: "beast",
        level: 0,
        sizeOrStrength: "normal",
        role: "troop",
        initiative: "+0",
        ac: 14,
        pd: 13,
        md: 9,
        hp: 20,
        health: 20,
        attacks: [
            {
                type: "melee",
                name: "Mandibles",
                bonus: 5,
                defenseTargeted: "AC",
                damage: "3 damage",
                extraEffects: [
                    {
                        trigger: "Natural 16+",
                        effect: "The target also takes 1D3 ongoing acid damage"
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Wall Crawler",
                text: "A giant ant can climb on ceilings and walls as easily as it moves on the ground."
            }
        ],
        isStaggered: false,
        id: 4
    },

    {
        name: "Giant Scorpion",
        type: "beast",
        level: 1,
        sizeOrStrength: "normal",
        role: "wrecker",
        initiative: "+6",
        ac: 16,
        pd: 15,
        md: 10,
        hp: 22,
        health: 22,
        attacks: [
            {
                type: "melee",
                name: "Pincer",
                bonus: 6,
                defenseTargeted: "PD",
                damage: "1 damage",
                effect: "the scorpion gains a +2 attack bonus against the same target this turn with its stinger attack",
                limitedUse: "2/round, each requiring a quick action (hitting the same target twice with pincer gives the stinger attack a +4 bonus)"
            },

            {
                type: "melee",
                name: "Stinger",
                bonus: 6,
                defenseTargeted: "AC",
                damage: "3 damage",
                effect: "3 ongoing poison damage"
            }
        ],
        specialAbilities: [],
        isStaggered: false,
        id: 5
    },

    {
        name: "Hunting Spider",
        type: "beast",
        level: 2,
        sizeOrStrength: "normal",
        role: "wrecker",
        initiative: "+6",
        ac: 17,
        pd: 14,
        md: 11,
        hp: 34,
        health: 34,
        attacks: [
            {
                type: "melee",
                name: "Bite",
                bonus: 6,
                defenseTargeted: "AC",
                damage: "8 damage",
                extraEffects: [
                    {
                        trigger: "Natural 16+",
                        effect: "The target also takes 1D8 ongoing poison damage"
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Scuttle",
                text: "A hunting spider can turn its own failed disengage check into a success by taking 1D4 damage."
            },
            {
                name: "Wall Crawler",
                text: "A hunting spider can climb on ceilings and walls as easily as it moves on the ground."
            }
            ],
        isStaggered: false,
        id: 6
    },
    
    {
        name: "Giant Web Spider",
        type: "beast",
        sizeOrStrength: "large",
        level: 2,
        role: "blocker",
        initiative: "+4",
        ac: 17,
        pd: 16,
        md: 12,
        hp: 68,
        health: 68,
        attacks: [
            {
                type: "melee",
                name: "Bite",
                bonus: 7,
                defenseTargeted: "AC",
                damage: "5 damage",
                effect: "5 ongoing poison damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "The target also takes 2D6 ongoing poison damage if it's dazed or stuck"
                    }
                ]
            },
            {
                type: "close",
                target: "Up to 2 nearby enemies in a group",
                name: "Web",
                bonus: 7,
                defenseTargeted: "PD",
                damage: "3 damage",
                effect: "the target is Dazed until the end of the spider's next turn",
                extraEffects: [
                    {
                        trigger: "Natural 18+",
                        effect: "The target is also stuck until the end of the spider's next turn"
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Wall Crawler",
                text: "A giant web spider can climb on ceilings and walls as easily as it moves on the ground."
            }
        ],
        isStaggered: false,
        id: 7
    },
    
    {
        name: "Wolf",
        type: "beast",
        level: 1,
        sizeOrStrength: "normal",
        role: "troop",
        initiative: "+4",
        ac: 17,
        pd: 15,
        md: 11,
        hp: 28,
        health: 28,
        attacks: [
            {
                type: "melee",
                name: "Bite",
                bonus: 5,
                defenseTargeted: "AC",
                damage: "5 damage"
            }
        ],
        specialAbilities: [
            {
                name: "Pack Attack",
                text: "This creature gains a +2 bonus to attack and damage for each other ally engaged with the target (max +4 bonus)."
            }
        ],
        isStaggered: false,
        id: 8
    },

    {
        name: "Bear",
        type: "beast",
        level: 2,
        sizeOrStrength: "normal",
        role: "troop",
        initiative: "+4",
        ac: 17,
        pd: 16,
        md: 12,
        hp: 45,
        health: 45,
        attacks: [
            {
                type: "melee",
                name: "Bite",
                bonus: 7,
                defenseTargeted: "AC",
                damage: "6 damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "The target takes +1D6 damage from a claw swipe"
                    }
                ]
            }
        ],
        specialAbilities: [],
        isStaggered: false,
        id: 9
    },

    {
        name: "Dire Wolf",
        type: "beast",
        level: 3,
        sizeOrStrength: "large",
        role: "troop",
        initiative: "+6",
        ac: 18,
        pd: 17,
        md: 13,
        hp: 80,
        health: 80,
        attacks: [
            {
                type: "melee",
                name: "Vicious Bite",
                bonus: 8,
                defenseTargeted: "AC",
                damage: "18 damage"
            }
        ],
        specialAbilities: [
            {
                name: "Pack Attack",
                text: "This creature gains a +2 bonus to attack and damage for each other ally engaged with the target (max +4 bonus)"
            },
            {
                name: "Chilling Howl",
                text: "Whenever a dire wolf's attack drops an enemy to 0 HP or below, all dire wolves in the battle can howl as a free action. When the wolves howl, each enemy in the battle takes a penalty to its attacks and all defenses equal to equal to the number of living dire wolves in the battle (max - 5) until the end of the attacking wolf's next turn. New howls extend the duration of the current howl rather than downgrading the howl's effect if dire wolves have been slain in the meantime."
            },
            {
                name: "Dire Feature",
                text: "Roll on table or make up."
            }
        ],
        isStaggered: false,
        id: 10
    },
    
    {
        name: "Dire Bear",
        type: "beast",
        level: 4,
        sizeOrStrength: "large",
        role: "troop",
        initiative: "+7",
        ac: 19,
        pd: 19,
        md: 14,
        hp: 130,
        health: 130,
        attacks: [
            {
                type: "melee",
                name: "Bite",
                bonus: 8,
                defenseTargeted: "AC",
                damage: "24 damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "The target takes +2D6 damage from a claw swipe"
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Savage",
                text: "The dire bear gains a +2 attack bonus against staggered enemies."
            },
            {
                name: "Dire Feature",
                text: "Roll on table or make up."
            }
        ],
        isStaggered: false,
        id: 11
    },
    
    // ANKHEG

    {
        name: "Ankheg",
        type: "beast",
        level: 2,
        sizeOrStrength: "large",
        role: "troop",
        initiative: "+8",
        ac: 19,
        pd: 17,
        md: 11,
        hp: 60,
        health: 60,
        attacks: [
            {
                type: "melee",
                name: "Mandibles",
                bonus: 7,
                defenseTargeted: "AC",
                damage: "8 damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "If the target is small the ankheg grabs it. While the ankheg is grabbing a creature, the only legal target for its mandibles attack is the grabbed creature"
                    }
                ]
            },
            {
                type: "close",
                target: "one nearby enemy, plus any enemy the ankheg has grabbed",
                name: "Acid Spit",
                bonus: 7,
                defenseTargeted: "PD",
                damage: null,
                effect: "5 ongoing acid damage",
                limitedUse: "1/round, as a quick action"
            }
        ],
        specialAbilities: [
            {
                name: "Escape Speed",
                text: "At the end of the ankheg's turn, roll a D6. If it's equal to or less than the escalation die, the ankheg can move again as a free action. (Usually it's trying to flee to a pre-dug burrow with a small sized creature in its mandibles)"
            }
        ],
        isStaggered: false,
        id: 12
    },
    
    // BULETTE

    {
        name: "Bulette",
        type: "beast",
        level: 5,
        sizeOrStrength: "large",
        role: "wrecker",
        initiative: "+7",
        ac: 22,
        pd: 19,
        md: 14,
        hp: 170,
        health: 170,
        attacks: [
            {
                type: "melee",
                name: "Gigantic Claws",
                bonus: 12,
                defenseTargeted: "AC",
                numberOfAttacks: 2,
                damage: "15 damage",
                extraEffects: [
                    {
                        trigger: "Dual hit",
                        effect: "If both claws hit during the same turn, the bulette can make a Terrible Bite attack during its next turn as a standard action"
                    }
                ]
            },
            {
                type: "melee",
                name: "[special trigger] Terrible Bite",
                bonus: 14,
                defenseTargeted: "AC",
                damage: "45 damage",
                miss: "22 damage"
            }
        ],
        specialAbilities: [
            {
                name: "Blood Frenzy",
                text: "The bulette's crit range expands to 16+ while the escalation die is 4+."
            },
            {
                name: "Serious Burrower",
                text: "A bulette can burrow incredibly quickly for short distances. They're renowned for the mounds of dirt and rock they push above them as they surge through the ground like land torpedoes."
            }
        ],
        nastierSpecials: [
            {
                name: "Savage Response",
                text: "When an attacker scores a critical hit against the bulette and it survives, the bulette can make a terrible bite attack as a free action against one target engaged with it."
            }
        ],
        isStaggered: false,
        id: 13
    },
    
    // CHIMERA

    {
        name: "Chimera",
        type: "beast",
        level: 9,
        sizeOrStrength: "large",
        role: "wrecker",
        initiative: "+15",
        ac: 24,
        pd: 20,
        md: 16,
        hp: 320,
        health: 320,
        attacks: [
            {
                type: "melee",
                name: "Fangs, Claws, and Horns",
                bonus: 14,
                defenseTargeted: "AC",
                numberOfAttacks: 3,
                damage: "25 damage",
                extraEffects: [
                    {
                        trigger: "Natural 14-15",
                        effect: "The target is dazed until the end of the chimera's next turn from a headbutt"
                    },
                    {
                        trigger: "Natural 16-17",
                        effect: "The target takes 20 ongoing damage from raking claws"
                    },
                    {
                        trigger: "Natural 18-20",
                        effect: "The chimera makes a fiery breath attack as a free action"
                    }
                ]
            },
            {
                type: "melee",
                target: "up to 3 nearby enemies in a group",
                name: "[special trigger] Fiery Breath",
                bonus: 14,
                defenseTargeted: "PD",
                damage: "3D10 fire damage"
            }
        ],
        specialAbilities: [
            {
                name: "Bestial Thresher",
                text: "Whenever a creature misses the chimera with a melee attack, the chimera's multiple sharp bits deal 3D10 damage to that attacker."
            }
        ],
        nastierSpecials: [
            {
                name: "Now It's Angry",
                text: "When an attacker scores a critical hit against the chimera and it survives, its attack rolls on its next turn deal the effects of the lower rolls as well as their own results."
            }
        ],
        isStaggered: false,
        id: 14
    },
    
    // DEMONS

    {
        name: "Imp",
        type: "demon",
        level: 3,
        sizeOrStrength: "normal",
        role: "spoiler",
        initiative: "+8",
        ac: 20,
        pd: 13,
        md: 16,
        hp: 40,
        health: 40,
        attacks: [
            {
                type: "melee",
                name: "Festering Claws",
                bonus: 7,
                defenseTargeted: "AC",
                damage: "3 damage",
                effect: "5 ongoing damage"
            },
            {
                type: "ranged",
                name: "Blight Jet",
                bonus: 7,
                defenseTargeted: "PD",
                damage: "7 damage",
                effect: "the target is dazed (save ends).",
                extraEffects: [
                    {
                        trigger: "First Natural 16+ each turn",
                        effect: "The imp can choose one: the target is weakened instead of dazed; OR the imp can make a blight jet attack against a different target as a free action."
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Curse Aura",
                text: "Whenever a creature attacks the imp and rolls a natural 1-5, that creature takes 1D10 psychic damage."
            },
            {
                name: "Flight",
                text: "Imps are hard to pin down because they fly. Not that fast or well, but you don't have to fly well to fly better than humans and elves."
            },
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        isStaggered: false,
        id: 15
    },

    {
        name: "Dretch",
        type: "demon",
        level: 3,
        sizeOrStrength: "normal",
        role: "mook",
        mookNumber: 1,
        initiative: "+5",
        ac: 17,
        pd: 15,
        md: 11,
        hp: 13,
        health: 13,
        attacks: [
            {
                type: "melee",
                name: "Claws",
                bonus: 8,
                defenseTargeted: "AC",
                damage: "6 damage"
            }
        ],
        specialAbilities: [
            {
                name: "Fear",
                text: "While engaged with this creature, enemies that have 15 HP or fewer are dazed (-4 attack) and do not add the escalation die to their attacks."
            }
        ],
        isStaggered: false,
        id: 16
    },

    {
        name: "Despoiler",
        type: "demon",
        level: 4,
        sizeOrStrength: "normal",
        role: "caster",
        initiative: "+9",
        ac: 19,
        pd: 14,
        md: 18,
        hp: 52,
        health: 52,
        attacks: [
            {
                type: "melee",
                name: "Horns and Daggers",
                bonus: 8,
                defenseTargeted: "AC",
                numberOfAttacks: 2,
                damage: "5 damage",
                extraEffects: [
                    {
                        trigger: "Natural 16+",
                        effect: "The despoiler can pop free from the target."
                    }
                ]
            },
            {
                type: "ranged",
                target: "one nearby or far away enemy",
                name: "Abyssal Whispers",
                bonus: 9,
                defenseTargeted: "MD",
                damage: "15 psychic damage",
                effect: "the target is confused (save ends); OR the target can choose to avoid the confusion effect by taking 6D6 damage to clear their head..."
            },
            {
                type: "close",
                target: "Two nearby enemies engaged with the same creature or each other",
                name: "Sow Discord",
                bonus: 9,
                defenseTargeted: "MD",
                damage: null,
                effect: "One target makes an at-will melee attack against this power's other target.",
                limitedUse: "1/day, as a quick action"
            }
        ],
        specialAbilities: [
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        isStaggered: false,
        id: 17
    },

    {
        name: "Frenzy Demon",
        type: "demon",
        level: 5,
        sizeOrStrength: "normal",
        role: "wrecker",
        initiative: "+10",
        ac: 21,
        pd: 17,
        md: 17,
        hp: 70,
        health: 70,
        attacks: [
            {
                type: "melee",
                name: "Claw",
                bonus: 9,
                defenseTargeted: "AC",
                numberOfAttacks: 2,
                damage: "9 damage"
            }
        ],
        specialAbilities: [
            {
                name: "Raging Frenzy",
                text: "Whenever the frenzy demon misses with a melee attack, it gains a +1 attack bonus and deals +1D4 damage until the end of the battle (maximum bonus +4, 4D4)."
            },
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        isStaggered: false,
        id: 18
    },

    {
        name: "Vrock",
        type: "demon",
        level: 6,
        sizeOrStrength: "normal",
        role: "spoiler",
        initiative: "+9",
        ac: 21,
        pd: 18,
        md: 18,
        hp: 88,
        health: 88,
        attacks: [
            {
                type: "melee",
                name: "Filth-covered Claws",
                bonus: 11,
                defenseTargeted: "AC",
                numberOfAttacks: 2,
                damage: "7 damage",
                effect: "5 ongoing poison damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "The Vrock can make a demonic screech attack as a free action."
                    }
                ]
            },
            {
                type: "close",
                target: "1D3 nearby enemies",
                name: "[special trigger] Demonic Screech",
                bonus: 11,
                defenseTargeted: "MD",
                damage: "5 psychic damage",
                effect: "the target is vulnerable until the end of the battle"
            }
        ],
        specialAbilities: [
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        nastierSpecials: [
            {
                name: "Predation",
                text: "Creatures hit by the vrock's demonic screech attack that are already vulnerable are also hampered (save ends)."
            },
        ],
        isStaggered: false,
        id: 19
    },

    {
        name: "Hezrou",
        type: "demon",
        level: 7,
        sizeOrStrength: "large",
        role: "troop",
        initiative: "+11",
        ac: 22,
        pd: 16,
        md: 20,
        hp: 210,
        health: 210,
        attacks: [
            {
                type: "melee",
                name: "Meaty, Clawed Hands",
                bonus: 12,
                defenseTargeted: "AC",
                numberOfAttacks: 2,
                damage: "28 damage",
                extraEffects: [
                    {
                        trigger: "Any Hit",
                        effect: "The demon can grab the target if it isn't already grabbing a creature. The grabbed foe can't move except to teleport, pop free, or attempt to disengage, and disengage attempts take a -5 penalty unless the creature hit the Hezrou with an attack that turn. The Hezrou gains a +4 attack bonus against any enemy it is grabbing."
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Demonic Stench",
                text: "While engaged with this creature, enemies with 84 HP or fewer are dazed (-4 attacks) and do not add the escalation die to their attacks."
            },
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        nastierSpecials: [
            {
                name: "Abyssal Sergeant",
                text: "Lower level non-mook demons nearby the hezrou deal damage equal to their level when they miss with an attack."
            },
            {
                name: "Stab This Now",
                text: "The hezrou's allies gain a +4 attack bonus against any creature it is grabbing."
            }
        ],
        isStaggered: false,
        id: 20
    },

    {
        name: "Glabrezou",
        type: "demon",
        level: 8,
        sizeOrStrength: "large",
        role: "caster",
        initiative: "+16",
        ac: 22,
        pd: 22,
        md: 18,
        hp: 320,
        health: 320,
        attacks: [
            {
                type: "melee",
                name: "Pincer",
                bonus: 13,
                defenseTargeted: "AC",
                damage: "45 damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "The demon can grab the target as long as it isn't already grabbing a creature. The grabbed foe can't move except to teleport, pop free, or attempt to disengage, and disengage attempts take a -5 penalty unless the creature hit the Glabrezou with an attack that turn. The Glabrezou gains a +4 attack bonus against any enemy it is grabbing."
                    }
                ]
            },
            {
                type: "ranged",
                target: "one nearby or far away creature",
                name: "Painbolt",
                bonus: 13,
                defenseTargeted: "MD",
                damage: "70 psychic damage"
            },
            {
                type: "close",
                target: "1D3 nearby enemies in a group AND any Glabrezou allies engaged with those enemies",
                name: "Hellfire",
                bonus: 13,
                defenseTargeted: "PD",
                damage: "50 fire damage"
            }
        ],
        specialAbilities: [
            {
                name: "Mirror Images",
                text: "At will, as a move action, a glabrezou can create multiple images of itself that make it harder to target. The next time an attack would hit the glabrezou, the attacker has to roll 11+ with another D20 roll: success indicates a hit, failure is a miss that hits one of the mirror images instead, dealing no miss damage to the glabrezou but dispelling all the images. Once the glabrezou is staggered, it takes 2D10 damage whenever it uses mirror image, so movement or escape start registering as alternatives."
            },
            {
                name: "Power Word Stun",
                text: "Once per day as a free action, the glabrezou can utter a word of power, canceling a single action just taken by a nearby creature with fewer HP than the glabrezou - whether it was casting a spell, healing an ally, or whatever. The GM can see the results of the action, such as a die roll, before deciding whether to use the power word."
            },
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        isStaggered: false,
        id: 21
    },

    {
        name: "Despoiler Mage",
        type: "demon",
        level: 9,
        sizeOrStrength: "normal",
        role: "caster",
        initiative: "+14",
        ac: 24,
        pd: 19,
        md: 23,
        hp: 170,
        health: 170,
        attacks: [
            {
                type: "melee",
                name: "Horns and Swords",
                bonus: 13,
                defenseTargeted: "AC",
                numberOfAttacks: 2,
                damage: "20 damage",
                extraEffects: [
                    {
                        trigger: "Natural 16+",
                        effect: "The despoiler mage can pop free from the target."
                    }
                ]
            },
            {
                type: "ranged",
                target: "one nearby or far away enemy",
                name: "Abyssal Whispers",
                bonus: 14,
                defenseTargeted: "MD",
                damage: "45 psychic damage",
                effect: "the target is confused (save ends); OR the target can choose to avoid the confusion effect by taking 10D10 psychic damage to clear their head..."
            },
            {
                type: "ranged",
                target: "one nearby or far away enemy",
                name: "Magic Missile",
                bonus: null,
                defenseTargeted: null,
                damage: "10 automatic force damage",
                limitedUse: "1/round, as a quick action"
            },
            {
                type: "close",
                target: "two nearby enemies engaged with the same creature or with each other",
                name: "Sow Discord",
                bonus: 14,
                defenseTargeted: "MD",
                damage: null,
                effect: "One target makes an at-will melee attack against this power's other target.",
                limitedUse: "1/battle, as a quick action"
            }
        ],
        specialAbilities: [
            {
                name: "Aura of Betrayal",
                text: "At the start of each of the despoiler mages turns, choose a random nearby enemy. Until the start of the despoiler mages next turn, that creatures allies no longer consider it an ally, though its enemies powers can still target it as an enemy. The creature isnt compelled to attack its former friends, but the effect tends to screw up all sorts of spells, bardic songs, and the Diabolist knows what else. But at least the betrayal effect is likely to target someone else next round."
            },
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        isStaggered: false,
        id: 22
    },

    {
        name: "Hooked Demon",
        type: "demon",
        level: 9,
        sizeOrStrength: "normal",
        role: "mook",
        mookNumber: 1,
        initiative: "+12",
        ac: 23,
        pd: 21,
        md: 17,
        hp: 45,
        health: 45,
        attacks: [
            {
                type: "melee",
                name: "Hooks and Barbs",
                bonus: 14,
                defenseTargeted: "AC",
                damage: "27 damage",
                extraEffects: [
                    {
                        trigger: "Natural 16+",
                        effect: "The Hooked Demon can make another Hooks and Barbs attack as a free action (and yes, this can keep going up to a maximum number of attacks equal to the escalation die + 1)."
                    }
                ]
            }
        ],
        nastierSpecials: [
            {
                name: "Bleeding Wounds",
                text: "Whenever the hooked demon hits a creature with hooks and barbs, that creature takes 10 damage each time it makes a non-basic attack (save ends)."
            }
        ],
        isStaggered: false,
        id: 23
    },

    {
        name: "Giant Vrock",
        type: "demon",
        level: 9,
        sizeOrStrength: "large",
        role: "spoiler",
        initiative: "+12",
        ac: 24,
        pd: 21,
        md: 21,
        hp: 333,
        health: 333,
        attacks: [
            {
                type: "melee",
                name: "Giant Filth-covered Claws",
                bonus: 14,
                defenseTargeted: "AC",
                numberOfAttacks: 2,
                damage: "30 damage",
                effect: "15 ongoing poison damage.",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "The Vrock can make a Demonic Screech attack as a free action."
                    }
                ]
            },
            {
                type: "close",
                target: "1D3 nearby enemies",
                name: "[special trigger] Demonic Screech",
                bonus: 14,
                defenseTargeted: "MD",
                damage: "15 psychic damage",
                effect: "the target is vulnerable until the end of the battle"
            },
            {
                type: "close",
                target: "all nearby enemies",
                name: "Sporeburst",
                bonus: 14,
                defenseTargeted: "PD",
                damage: "30 damage",
                effect: "30 ongoing damage; while the target is taking ongoing damage, it is hampered.",
                limitedUse: "1/battle, when the escalation die is 4+."
            }
        ],
        specialAbilities: [
            {
                name: "Predation",
                text: "Creatures hit by the giant vrocks demonic screech attack that are already vulnerable are also hampered (save ends)."
            }
        ],
        isStaggered: false,
        id: 24
    },

    {
        name: "Nalfeshnee",
        type: "demon",
        level: 10,
        sizeOrStrength: "large",
        role: "caster",
        initiative: "+13",
        ac: 25,
        pd: 20,
        md: 24,
        hp: 400,
        health: 400,
        attacks: [
            {
                type: "melee",
                name: "Musky Claw or Slimy Hoof",
                bonus: 15,
                defenseTargeted: "AC",
                damage: "90 damage",
                miss: "The nalfeshnee gains a +4 attack bonus until it hits. Unlike most effects, let it stack."
            },
            {
                type: "ranged",
                target: "1D3 nearby enemies",
                name: "Accursed Burst",
                bonus: 15,
                defenseTargeted: "PD",
                damage: "50 cold/fire/lightning/negative energy damage (your choice)",
                effect: "the nalfeshnee can make an abyssal curse attack as a free action."
            },
            {
                type: "close",
                target: "each creature hit by Accursed Burst",
                name: "[special trigger] Abyssal Curse",
                bonus: 15,
                defenseTargeted: "MD",
                damage: null,
                effect: "the target is weakened until the end of its next turn."
            }
        ],
        specialAbilities: [
            {
                name: "Flight",
                text: "Nalfeshnee are clumsy but powerful fliers with strangely small wings."
            },
            {
                name: "Unpredictable",
                text: "Nalfeshnee always have at least two random demon abilities."
            }
        ],
        nastierSpecials: [
            {
                name: "Hooked Mooks",
                text: "Once per battle, if the nalfeshnee is staggered, it can gate in 2D4 hooked demons as a quick action. Roll initiative for the hooked demons; they do not appear in the battle and take their turns until their next initiative count comes up."
            }
        ],
        isStaggered: false,
        id: 25
    },
    
    {
        name: "Marilith",
        type: "demon",
        level: 12,
        sizeOrStrength: "large",
        role: "troop",
        initiative: "+20",
        ac: 28,
        pd: 21,
        md: 25,
        hp: 666,
        health: 666,
        attacks: [
            {
                type: "melee",
                name: "Six Whirling Swords",
                bonus: 17,
                defenseTargeted: "AC",
                numberOfAttacks: 6,
                damage: "30 damage",
                effect: "the Marilith can pop free from the target after the attacks."
            },
            {
                type: "ranged",
                target: "one nearby or far away unengaged enemy",
                name: "Beguiling Gaze",
                bonus: 17,
                defenseTargeted: "MD",
                damage: null,
                effect: "As a free action, the target immediately moves toward the marilith, attempting to engage it or get as close as possible to it.",
                limitedUse: "1/round, as a quick action."
            }    
        ],
        specialAbilities: [
            {
                name: "Terrible Swift Swords",
                text: "The marilith's crit range with melee attacks expands by a number equal to the escalation die."
            },
            {
                name: "Random Demon Ability",
                text: "roll on table."
            }
        ],
        isStaggered: false,
        id: 26
    },

    {
        name: "Balor",
        type: "demon",
        level: 13,
        sizeOrStrength: "large",
        role: "wrecker",
        initiative: "+17",
        ac: 29,
        pd: 27,
        md: 23,
        hp: 850,
        health: 850,
        attacks: [
            {
                type: "melee",
                name: "Abyssal Blade",
                bonus: 18,
                defenseTargeted: "AC",
                damage: "160 damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit",
                        effect: "The Balor deals 1D20 lightning damage to the target and to one other nearby enemy of the Balor's choice. Then repeat that damage roll against the targets once for each point on the escalation die (so if it's a 4, that's 4 more d20 rolls)."
                    },
                    {
                        trigger: "Natural Even Miss",
                        effect: "80 damage."
                    }
                ]
            },
            {
                type: "close",
                target: "one nearby enemy",
                name: "Flaming Whip",
                bonus: 18,
                defenseTargeted: "PD",
                damage: "50 fire damage",
                effect: "the target is pulled to the Balor, who engages it.",
                extraEffects: [
                    {
                        trigger: "Natural Even Miss",
                        effect: "25 fire damage"
                    }
                ],
                limitedUse: "1/round, as a quick action"
            }
        ],
        specialAbilities: [
            {
                name: "Desperate Escalator",
                text: "While staggered, the Balor adds the escalation die to its attack rolls."
            },
            {
                name: "Fiery Aura",
                text: "At the start of the balor's turn, each enemy engaged with it takes 4D10 fire damage; any die result of 10 is kept and the die rerolled."
            },
            {
                name: "Flight",
                text: "Giant bat wings are good for something besides looking tough."
            },            
            {
                name: "Random Demon Ability",
                text: "Roll on table."
            }
        ],
        nastierSpecials: [
            {
                name: "Vorpal Blade",
                text: "Critical hits with the Abyssal Blade deal triple damage instead of double damage."
            }
        ],
        isStaggered: false,
        id: 27
    },
    
    // DERRO
    
    {
        name: "Derro Maniac",
        level: 4,
        type: "troop",
        initiative: "+8",
        ac: 19,
        pd: 16,
        md: 18,
        hp: 52,
        health: 52,
        attacks: ["Shortsword +9 vs AC - 12 damage. Natural 16+: The derro can cast one of the following close-quarters spells as a quick action this turn: Cloaking Dark: all nearby derro gain a +1 bonus to attacks and defenses until the end of the derro maniac's next turn (cumulative). Sonic Squeal: two random nearby non-derro creatures take 2D4 thunder damage.", "R: Light Repeating Crossbow +9 vs AC - 10 damage. Natural 16+: The target also takes 5 ongoing poison damage. Natural 19+: As above, and the derro maniac can make another light repeating crossbow attack as a free action."],
        abilities: ["Derro Are Confused to Begin With: Confusion only affects derro if they secretely want to murder one of their own companions, a not uncommon condition."],
        isStaggered: false,
        id: 28
    },
    
    {
        name: "Derro Sage",
        level: 4,
        type: "caster",
        initiative: "+7",
        ac: 18,
        pd: 15,
        md: 18,
        hp: 40,
        health: 40,
        attacks: ["Staff +7 vs AC - 7 damage. Natural 16+: the derro can cast one of the following close-quarters spells as a quick action this turn: Cloaking Dark: all nearby derro gain a +1 bonus to attacks and defenses until the end of the derro sage's next turn (cumulative). Sonic Squeal: two random nearby non-derro creatures take 2D8 thunder damage.", "R: Mind Scream +9 vs MD - 12 psychic damage, and the target is confused until the end of the derro sage's next turn. Natural 16+: the derro sage can make another mind scream attack against a different nearby target as a free action."],
        abilities: ["Derro Are Confused to Begin With: Confusion only affects derro if they secretely want to murder one of their own companions, a not uncommon condition.", "[Nastier Special] Group Gibbering: The derro sage starts a group of derro gibbering as a quick action. It can maintain the gibber as a free action at the start of each turn by taking 1 damage. Each nearby non-derro creature that hears the gibber must roll a D6 at the start of its turn and takes psychic damage equal to the die roll or to the number of gibbering derro, whichever is lower."],
        isStaggered: false,
        id: 29
    },
    
    // DRAGONS
    
    {
        name: "Medium White Dragon",
        level: 2,
        type: "troop",
        initiative: "+6",
        ac: 18,
        pd: 15,
        md: 11,
        hp: 38,
        health: 38,
        attacks: ["Claws and Bite +6 vs AC (2 attacks) - 4 damage. Natural 16+: The white dragon can make an ice breath attack as a free action.", "[special trigger] C: Ice Breath +6 vs PD (1D3 nearby enemies) - 4 cold damage. Natural Odd Hit or Miss: The dragon takes 1D4 damage"],
        abilities: ["Vulnerability: Fire", "Resist Cold 12+", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 30
    },
    
    {
        name: "Medium Black Dragon",
        level: 3,
        type: "wrecker",
        initiative: "+9",
        ac: 19,
        pd: 17,
        md: 15,
        hp: 42,
        health: 42,
        attacks: ["Claws and Bite +8 vs AC (2 attacks) - 4 damage. Natural 16+: The target also takes 4 ongoing acid damage.", "C: Acid Breath +9 vs PD (1D3 nearby enemies) - 5 acid damage, and 5 ongoing acid damage. Miss: 3 acid damage."],
        abilities: ["Vulnerability: Thunder", "Resist Acid 12+", "Water Breathing: Black dragons swim well and breathe underwater", "Intermittent Breath: A medium black dragon can use acid breath 1D3 times per battle, but never two turns in a row.", "Draconic Grace: At the start of each turn, roll a D6 to see if this dragon gets an extra standard action. If the roll is equal to or less than the escalation die, the black dragon can take an extra standard action. After each success, bump up the die size up to a D20.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 31
    },
    
    {
        name: "Large White Dragon",
        level: 4,
        type: "troop (large)",
        initiative: "+8",
        ac: 20,
        pd: 17,
        md: 13,
        hp: 104,
        health: 104,
        attacks: ["Claws and Bite +8 vs AC (2 attacks) - 12 damage. Natural 16+: The white dragon can make an ice breath attack as a free action.", "[special trigger] C: Ice Breath +8 vs PD (1D3 nearby enemies) - 10 cold damage. Natural Odd Hit or Miss: The dragon takes 2D4 damage."],
        abilities: ["Vulnerability: Fire", "Resist Cold 16+", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 32
    },
    
    {
        name: "Medium Green Dragon",
        level: 4,
        type: "spoiler",
        initiative: "+9",
        ac: 21,
        pd: 18,
        md: 14,
        hp: 60,
        health: 60,
        attacks: ["Sharp Claws +9 vs AC - 7 damage. Natural 11-15: The dragon can make a bite attack as a free action. Natural 16+: The dragon can make a poison breath attack as a free action.", "[special trigger] Bite +9 vs AC - 10 damage. Natural 16+: The target also takes 5 ongoing poison damage.", "[special trigger] C: Poison Breath +9 vs PD (1D3 nearby enemies) - 7 poison damage, and the target is hampered (save ends)."],
        abilities: ["Vulnerability: Psychic", "Resist Poison 12+", "Burrow: As the standard monster ability.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 33
    },
    
    {
        name: "Medium Blue Dragon",
        level: 5,
        type: "caster",
        initiative: "+9",
        ac: 22,
        pd: 19,
        md: 19,
        hp: 76,
        health: 76,
        attacks: ["Dragon Claw +9 vs AC - 10 damage. Natural Even Hit or Miss: The dragon can make a bite attack as a free action.", "[special trigger] Bite +9 vs AC - 10 damage, and 2D6 lightning damage", "C: Lightning Breath +9 vs PD (1D3 nearby enemies) - 8 lightning damage. Natural Even Hit: The target is also dazed (save ends)."],
        abilities: ["Vulnerability: Force", "Resist Lightning 12+", "Intermittent Breath: A medium blue dragon can use lightning breath 1D4 times per battle, but never two turns in a row.", "Counter-spell: When an enemy targets the blue dragon with a spell, the dragon can roll a save; success means the spell has no effect on the dragon. If the level of the spell is lower than the dragon's level, it's a normal save. Against an equal or higher level spell, it's a hard save. If the dragon is staggered, the save increases by +5 (hard becomes 21+, impossible unless the dragon has a save bonus from some other source).", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 34
    },
    
    {
        name: "Huge White Dragon",
        level: 5,
        type: "troop (huge)",
        initiative: "+10",
        ac: 21,
        pd: 18,
        md: 14,
        hp: 200,
        health: 200,
        attacks: ["Claws and Bite +9 vs AC (2 attacks) - 25 damage. Natural 16+: The white dragon can make an ice breath attack as a free action.", "[special trigger] C: Ice Breath +9 vs PD (1D3 nearby enemies) - 20 cold damage. Natural Odd Hit or Miss: The dragon takes 2D8 damage."],
        abilities: ["Vulnerability: Fire", "Resist Cold 18+", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 35
    },
    
    {
        name: "Large Black Dragon",
        level: 6,
        type: "wrecker (large)",
        initiative: "+13",
        ac: 22,
        pd: 20,
        md: 18,
        hp: 160,
        health: 160,
        attacks: ["Claws and Bite +11 vs AC (2 attacks) - 18 damage. Natural 16+: The target also takes 10 ongoing acid damage.", "C: Acid Breath +11 vs PD (1D3 nearby enemies) - 20 acid damage, and 10 ongoing acid damage. Miss: 10 acid damage."],
        abilities: ["Vulnerability: Thunder", "Resist Acid 16+", "Water Breathing: Black dragons swim well and breathe underwater", "Intermittent Breath: A large black dragon can use acid breath 1D3 times per battle, but never two turns in a row.", "Draconic Grace: At the start of each turn, roll a D6 to see if this dragon gets an extra standard action. If the roll is equal to or less than the escalation die, the black dragon can take an extra standard action. After each success, bump up the die size up to a D20.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 36
    },
    
    {
        name: "Medium Red Dragon",
        level: 6,
        type: "wrecker",
        initiative: "+11",
        ac: 21,
        pd: 20,
        md: 16,
        hp: 90,
        health: 90,
        attacks: ["Fangs, Claws, and Tail +11 vs AC (2 attacks) - 8 damage. First Natural Even Hit or Miss Each Turn: Roll a third fangs, claws, and tail attack.", "C: Fiery Breath +11 vs PD (2D3 nearby enemies) - 10 fire damage. Miss: Half damage."],
        abilities: ["Vulnerability: Cold", "Resist Fire 12+", "Intermittent Breath: A medium red dragon can use fiery breath 1D3 times per battle, but never two turns in a row.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 37
    },
    
    {
        name: "Large Green Dragon",
        level: 7,
        type: "spoiler (large)",
        initiative: "+11",
        ac: 24,
        pd: 21,
        md: 16,
        hp: 230,
        health: 230,
        attacks: ["Sharp Claws +12 vs AC - 25 damage. Natural 11-15: The dragon can make a bite attack as a free action. Natural 16+: The dragon can make a poison breath attack as a free action.", "[special trigger] Bite +12 vs AC - 38 damage. Natural 16+: The target also takes 10 ongoing poison damage.", "[special trigger] C: Poison Breath +12 vs PD (1D3 nearby enemies) - 25 poison damage, and the target is hampered (save ends)."],
        abilities: ["Vulnerability: Psychic", "Resist Poison 16+", "Burrow: As the standard monster ability.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 38
    },
    
    {
        name: "Large Blue Dragon",
        level: 8,
        type: "caster (large)",
        initiative: "+13",
        ac: 25,
        pd: 22,
        md: 22,
        hp: 260,
        health: 260,
        attacks: ["Double Claws +12 vs AC (2 attacks) - 15 damage. Natural Even Hit or Miss: The dragon can make a bite attack as a free action.", "[special trigger] Bite +12 vs AC - 20 damage, and 2D10 lightning damage.", "C: Lightning Breath +12 vs PD (1D3 nearby or far away enemies) - 40 lightning damage. Natural Even Hit: The target is also dazed (save ends)."],
        abilities: ["Vulnerability: Force", "Resist Lightning 16+", "Intermittent Breath: A large blue dragon can use lightning breath 1D6 times per battle, but never two turns in a row.", "Counter-spell: When an enemy targets the blue dragon with a spell, the dragon can roll a save; success means the spell has no effect on the dragon. If the level of the spell is lower than the dragon's level, it's a normal save. Against an equal or higher level spell, it's a hard save. If the dragon is staggered, the save increases by +5 (hard becomes 21+, impossible unless the dragon has a save bonus from some other source).", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 39
    },
    
    {
        name: "Huge Black Dragon",
        level: 9,
        type: "wrecker (huge)",
        initiative: "+17",
        ac: 25,
        pd: 23,
        md: 21,
        hp: 510,
        health: 510,
        attacks: ["Claws and Bite +14 vs AC (3 attacks) - 30 damage. Natural 16+: The target also takes 15 ongoing acid damage. Miss: 20 damage.", "C: Acid Breath +14 vs PD (1D3 nearby or far away enemies) - 50 acid damage, and 15 ongoing acid damage. Miss: 4D12 acid damage."],
        abilities: ["Resist Acid 18+", "Water Breathing: Black dragons swim well and breathe underwater", "Intermittent Breath: A huge black dragon can use acid breath 2D3 times per battle, but never two turns in a row.", "Draconic Grace: At the start of each turn, roll a D6 to see if this dragon gets an extra standard action. If the roll is equal to or less than the escalation die, the black dragon can take an extra standard action. After each success, bump up the die size up to a D20.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 40
    },
    
    {
        name: "Large Red Dragon",
        level: 10,
        type: "wrecker (large)",
        initiative: "+13",
        ac: 25,
        pd: 24,
        md: 20,
        hp: 400,
        health: 400,
        attacks: ["Fangs, Claws, and Tail +15 vs AC (2 attacks) - 35 damage. First Natural Even Hit or Miss Each Turn: Roll a third fangs, claws, and tail attack.", "C: Fiery Breath +15 vs PD (2D3 nearby enemies) - 40 fire damage. Miss: Half damage."],
        abilities: ["Vulnerability: Cold", "Resist Fire 16+", "Intermittent Breath: A large red dragon can use fiery breath 1D4 times per battle, but never two turns in a row.", "Fear: While engaged with this creature, enemies with 72 HP or fewer are dazed and do not add the escalation die to their attacks.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 41
    },
    
    {
        name: "Huge Green Dragon",
        level: 11,
        type: "spoiler (huge)",
        initiative: "+15",
        ac: 28,
        pd: 25,
        md: 20,
        hp: 900,
        health: 900,
        attacks: ["Sharp Claws +16 vs AC - 100 damage. Natural 11-15: The dragon can make a bite attack as a free action. Natural 16+: The dragon can make a poison breath attack as a free action.", "[special trigger] Bite +16 vs AC - 140 damage. Natural 16+: The target also takes 20 ongoing poison damage.", "[special trigger] C: Poison Breath +16 vs PD (1D3 nearby enemies) - 100 poison damage, and the target is hampered (save ends)."],
        abilities: ["Resist Poison 18+", "Burrow: as the standard monster ability.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 42
    },
    
    {
        name: "Huge Blue Dragon",
        level: 12,
        type: "caster (huge)",
        initiative: "+17",
        ac: 29,
        pd: 26,
        md: 26,
        hp: 980,
        health: 980,
        attacks: ["Double Claws +16 vs AC (2 attacks) - 50 damage. Natural Even Hit or Miss: The dragon can make a bite attack as a free action.", "[special trigger] Bite +16 vs AC - 60 damage, and 4D10 lightning damage to the target and to one other nearby enemy of the dragon's choice.", "C: Far Slashing Lightning Breath +16 vs PD (1D4 nearby or far away enemies) - 80 lightning damage. Natural Even Hit: The target is also dazed (save ends). After the target saves, it takes a -1 attack penalty (non-cumulative) until its next full heal up (because it's vibrating slightly out of synch with the rest of the world)."],
        abilities: ["Resist Lightning 18+", "Intermittent Breath: A huge blue dragon can use far slashing lightning breath 2D4 times per battle, but never two turns in a row.", "Counter-spell: When an enemy targets the blue dragon with a spell, the dragon can roll a save; success means the spell has no effect on the dragon. If the level of the spell is lower than the dragon's level, it's a normal save. Against an equal or higher level spell, it's a hard save. If the dragon is staggered, the save increases by +5 (hard becomes 21+, impossible unless the dragon has a save bonus from some other source).", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 43
    },
    
    {
        name: "Huge Red Dragon",
        level: 13,
        type: "wrecker (huge)",
        initiative: "+19",
        ac: 28,
        pd: 27,
        md: 23,
        hp: 1200,
        health: 1200,
        attacks: ["Fangs, Claws, and Tail +19 vs AC (3 attacks) - 70 damage. First Natural Even Hit or Miss Each Turn: Roll a fourth fangs, claws, and tail attack. Second Natural Even Hit or Miss Each Turn: Roll a fifth fangs, claws, and tail attack.", "C: Fiery Breath +19 vs PD (2D3 nearby or far away enemies) - 80 fire damage. Miss: Half damage."],
        abilities: ["Resist Fire 18+", "Intermittent Breath: A huge red dragon can use fiery breath 1D6 times per battle, but never two turns in a row.", "Fear: While engaged with this creature, enemies with 144 HP or fewer are dazed and do not add the escalation die to their attacks.", "Escalator: A dragon adds the escalation die to its attack rolls.", "Flight: A dragon flies reasonably well, powerful and fast in a straight line though not as maneuverable as more agile fliers.", "Random Dragon Ability: roll on table."],
        isStaggered: false,
        id: 44
    },
    
    // DRIDER
    
    {
        name: "Drider",
        level: 6,
        type: "caster (large)",
        initiative: "+10",
        ac: 21,
        pd: 15,
        md: 20,
        hp: 170,
        health: 170,
        attacks: ["Sword or Mace +9 vs AC - 20 damage. Natural Even Hit: The drider can make a poison bite attack as a free action.", "[special trigger] Poison Bite +9 vs PD - 10 poison damage, and 10 ongoing poison damage.", "R: Lightning Bolt Spell +11 vs PD - 30 lightning damage. Natural Even Hit: The drider can make a lightning bolt spell attack against a second nearby enemy, followed by a third and final different enemy if the second attack is also a natural even hit.", "C: Web Attack +11 vs PD (up to 2 nearby enemies in a group) - the target is hampered (save ends). Limited Use: 1/round as a quick action, if the escalation die is even."],
        abilities: ["None"],
        isStaggered: false,
        id: 45
    },
    
    // ETTIN
    
    {
        name: "Ettin",
        level: 5,
        type: "troop (large)",
        initiative: "+9",
        ac: 21,
        pd: 18,
        md: 14,
        hp: 160,
        health: 160,
        attacks: ["First Big Swing +10 vs AC - 25 damage, and the target pops free from the ettin; then, as a free action, the ettin can move (or choose not to move) and make a second swing attack.", "[special trigger] Second Swing +10 vs AC (different target from first big swing) - 15 damage"],
        abilities: ["Two-headed Save: If an ettin's first save against an effect fails, it can roll a second save.", "[Nastier Special] Big Bully: The ettin deals double damage with its attacks against staggered enemies.", "Escalating Agreement: If the escalation die is 3+, the ettin can target two engaged enemies with its first big swing attack."],
        isStaggered: false,
        id: 46
    },
    
    // GARGOYLE
    
    {
        name: "Gargoyle",
        level: 5,
        type: "troop",
        initiative: "+4",
        ac: 24,
        pd: 21,
        md: 14,
        hp: 60,
        health: 60,
        attacks: ["Furious Claws and Fangs +9 vs AC - 9 damage. Natural 11+: The gargoyle can make two more melee attacks as a free action (but never more than 3 total attacks per standard action, even if you roll another 11+)."],
        abilities: ["Flight: Gargoyles can fly, but not very well. They would rather crawl or climb.", "[Nastier Special] Rocky Hide: The gargoyle has resist damage 12+ against attacks targeting AC.", "[Nastier Special] Statues, Statues, Everywhere: Because they often look like statues, gargoyles are capable of springing a surprise on inattentive PCs. When there's a chance of such an ambush, give the PCs a champion-tier skill check (usually DC 20) to notice the gargoyles and avoid being surprised (see pagee 164 of core rules)."],
        isStaggered: false,
        id: 47
    },
    
    // GHOULS
    
    {
        name: "Ghoul",
        level: 3,
        type: "spoiler",
        initiative: "+8",
        ac: 18,
        pd: 16,
        md: 12,
        hp: 36,
        health: 36,
        attacks: ["Claws and Bite +8 vs AC - 8 damage. Natural Even Hit: The target is vulnerable to attacks by undead until the end of the ghoul's next turn."],
        abilities: ["Vulnerability: Holy", "Pound of Flesh: The ghoul's claws and bite attack deals +4 damage against vulnerable targets.", "Infected Bite: Any creature that is slain by a ghoul and not consumed will rise as a ghoul the next night.", "[Nastier Special] Paralyzing Bite: When the ghoul hits a vulnerable target with a natural even attack roll, the target is also stunned (save ends)."],
        isStaggered: false,
        id: 48
    },
    
    {
        name: "Newly-risen Ghoul",
        level: 2,
        type: "mook",
        mookNumber: 1,
        initiative: "+5",
        ac: 17,
        pd: 15,
        md: 11,
        hp: 9,
        health: 9,
        attacks: ["Scrabbling Claws +7 vs AC - 3 damage. Natural 16+: The target is vulnerable to attacks by undead until the end of the ghoul's next turn."],
        abilities: ["Vulnerability: Holy", "Pound of Flesh: The newly-risen ghoul's scrabbling claws attack deals +2 damage against vulnerable targets."],
        isStaggered: false,
        id: 49
    },
    
    // GIANTS
    
    {
        name: "Hill Giant",
        level: 6,
        type: "troop (large)",
        initiative: "+8",
        ac: 20,
        pd: 20,
        md: 14,
        hp: 200,
        health: 200,
        attacks: ["Massive Gnarly Club +10 vs AC - 45 damage. Miss that's a natural 6+: Half damage (sometimes close is good enough).", "R: Two-handed Boulder Throw +8 vs PD - 35 damage."],
        abilities: ["[Nastier Special] Big Bully: The giant deals double damage with its attacks against staggered targets."],
        isStaggered: false,
        id: 50
    },
    
    {
        name: "Frost Giant",
        level: 7,
        type: "spoiler (large)",
        initiative: "+10",
        ac: 23,
        pd: 22,
        md: 17,
        hp: 210,
        health: 210,
        attacks: ["Ice-covered War Axe +12 vs AC - 45 damage. Natural Even Hit or Miss: The giant can make a frost touch attack against the target as a free action.", "[special trigger] Frost Touch +11 vs PD - 10 cold damage, and the target is hampered until the end of its next turn.", "R: Large Rock or Iceball +11 vs PD (one nearby target or far away target at -2 attack) - 35 damage", "[Nastier Special] Slam +10 vs PD (one enemy smaller than it) - 20 damage, the target pops free from the giant, and the target loses its next move action."],
        abilities: ["Vulnerability: Fire", "Resist Cold 16+", "Ancient Cold: While battling one or more frost giants, there is only a 50% chance that the escalation die increases at the start of the round.", "[Nastier Special] Strength of Giants: Twice per battle, the giant can make a slam attack as a quick action (once per round)."],
        isStaggered: false,
        id: 51
    },
    
    {
        name: "Stone Giant",
        level: 8,
        type: "troop (large)",
        initiative: "+11",
        ac: 24,
        pd: 22,
        md: 18,
        hp: 270,
        health: 270,
        attacks: ["Stone Club +13 vs AC - 50 damage. Natural Even Hit or Miss: The stone giant can also make a stomp attack against a single target as a free action.", "Stomp +13 vs PD (each smaller enemy engaged with the giant) - 30 damage, and the target is dazed (save ends).", "R: Thrown Boulder +11 vs PD (one nearby or far away enemy) - 40 damage. Natural Even Miss: 20 damage."],
        abilities: ["Built of Stone: The stone giant has resist weapons 16+."],
        isStaggered: false,
        id: 52
    },
    
    {
        name: "Fire Giant",
        level: 8,
        type: "wrecker (large)",
        initiative: "+12",
        ac: 25,
        pd: 21,
        md: 17,
        hp: 285,
        health: 285,
        attacks: ["Flaming Greatsword +13 vs AC (2 attacks) - 35 damage. Natural Even Hit or Miss: The target also takes 10 ongoing fire damage.", "R: Flaming Black-iron Javelin +11 vs AC - 40 damage. Natural Even Hit or Miss: The target also takes 10 ongoing fire damage.", "[Nastier Special] Slam +12 vs PD (one enemy smaller than it) - 10 damage, the target pops free from the giant, and the target loses its next move action."],
        abilities: ["Vulnerability: Cold", "Resist Fire 16+", "Fiery Escalator: The fire giant adds the escalation die to its attacks against targets taking ongoing fire damage.", "[Nastier Special] Burning Blood: When a fire giant becomes staggered, it deals 10 ongoing fire damage to each enemy engaged with it.", "[Nastier Special] Strength of Giants: Twice per battle, the giant can make a slam attack as a quick action (once per round)."],
        isStaggered: false,
        id: 53
    },
    
    {
        name: "Fire Giant Warlord",
        level: 9,
        type: "leader (large)",
        initiative: "+14",
        ac: 26,
        pd: 22,
        md: 18,
        hp: 355,
        health: 355,
        attacks: ["Flaming Greatsword +15 vs AC (2 attacks) - 40 damage. Natural Even Hit or Miss: The target also takes 10 ongoing fire damage.", "Massive Strike +15 vs AC - 90 damage, and 10 ongoing fire damage."],
        abilities: ["Vulnerability: Cold", "Resist Fire 16+", "Fiery Escalator: The fire giant warlord adds the escalation die to its attacks against targets taking ongoing fire damage.", "Warlord of Fire: As a standard action, the warlord can command one nearby ally that has resistance to fire to make a melee attack as a free action.", "[Nastier Special] Unquenchable Fires: Enemies engaged with the fire giant warlord take a -5 penalty to saves against ongoing fire damage."],
        isStaggered: false,
        id: 54
    },
    
    {
        name: "Storm Giant",
        level: 10,
        type: "archer (huge)",
        initiative: "+16",
        ac: 26,
        pd: 24,
        md: 22,
        hp: 650,
        health: 650,
        attacks: ["Truly Enormous Greatsword +15 vs AC - 120 damage. Natural Even Hit or Miss: The giant can make a lightning bolt attack against a random nearby enemy as a free action. Miss: 40 damage, OR the giant can make a release the thunder attack as a free action.", "R: Giant Longbow +14 vs AC (2 attacks vs nearby or far away enemies) - 60 damage. Natural Even Hit: The giant can make a lightning bolt attack against a random enemy that is nearby the target of the longbow attack.", "[special trigger] C: Lightning Bolt +15 vs PD (one random nearby enemy) - 2D6 x 10 lightning damage. Miss: Half Damage.", "[special trigger] C: Release the Thunder +15 vs PD (all nearby creatures) - 1D10 thunder damage per building thunder point (see below). Miss: Half Damage."],
        abilities: ["Storm Born: The storm giant has resist thunder 16+ and resist lightning 16+", "Building Thunder: Keep count of the number of times the storm giant uses its lightning bolt attack during the battle. Add that number to the escalation die to get the current building thunder value.", "Skystep: A storm giant can use its standard action to walk or run through air, using move actions to continue. If the storm giant makes a standard action attack, it settles back to the ground below it without falling."],
        isStaggered: false,
        id: 55
    },
    
    // GNOLLS
    
    {
        name: "Gnoll Savage",
        level: 3,
        type: "troop",
        initiative: "+7",
        ac: 19,
        pd: 16,
        md: 13,
        hp: 42,
        health: 42,
        attacks: ["Spear +7 vs AC - 10 damage. Pack Ferocity: If more than one gnoll is engaged with the target, each gnoll melee attack that misses that target deals half damage.", "R: Thrown Spear +6 vs AC - 8 damage"],
        abilities: ["[Nastier Special] Blood Fury: +1D10 melee damage if the gnoll or its target is staggered."],
        isStaggered: false,
        id: 56
    },
    
    {
        name: "Gnoll Ranger",
        level: 3,
        type: "archer",
        initiative: "+9",
        ac: 18,
        pd: 17,
        md: 14,
        hp: 46,
        health: 46,
        attacks: ["Hand Axes +6 vs AC (2 attacks) - 6 damage. Pack Ferocity: If more than one gnoll is engaged with the target, each gnoll melee attack that misses that target deals half damage.", "R: Longbow +8 vs AC - 8 damage. Natural Even Hit or Miss: The gnoll can make a second longbow attack (no more) as a free action."],
        abilities: ["Quick Shot: When the gnoll ranger is unengaged and an enemy moves to engage it, roll a D20. On an 11+, the gnoll ranger can make a longbow attack against that enemy as a free action just before being engaged.", "[Nastier Special] Hates Everyone: The crit range of attacks by gnoll rangers expands by 2 against humanoids.", "[Nastier Special] Blood Fury: +1D10 melee damage if the gnoll or its target is staggered."],
        isStaggered: false,
        id: 57
    },
    
    {
        name: "Gnoll War Leader",
        level: 4,
        type: "leader",
        initiative: "+8",
        ac: 20,
        pd: 17,
        md: 14,
        hp: 56,
        health: 56,
        attacks: ["Heavy Flail +9 vs AC - 14 damage. Natural Even Hit or Miss: The target is marked for death; until the end of the battle, all gnoll attacks against the target gain an attack bonus equal to the escalation die.  Pack Ferocity: If more than one gnoll is engaged with the target, each gnoll melee attack that misses that target deals half damage."],
        abilities: ["[Nastier Special] Blood Fury: +1D10 melee damage if the gnoll or its target is staggered."],
        isStaggered: false,
        id: 58
    },
    
    // GOBLINS
    
    {
        name: "Goblin Grunt",
        level: 1,
        type: "troop",
        initiative: "+3",
        ac: 16,
        pd: 13,
        md: 12,
        hp: 22,
        health: 22,
        attacks: ["Club +6 vs AC - 6 damage if the goblins and their allies outnumber their enemies; 4 damage if they don't.", "R: Shortbow +6 vs AC - 4 damage"],
        abilities: ["Shifty Bugger: Goblins gain a +5 bonus to disengage checks."],
        isStaggered: false,
        id: 0
    },
    
    {
        name: "Goblin Scum",
        level: 1,
        type: "mook",
        mookNumber: 1,
        initiative: "+3",
        ac: 16,
        pd: 14,
        md: 11,
        hp: 5,
        health: 5,
        attacks: ["Club +6 vs AC - 4 damage", "R: Shortbow +6 vs AC - 3 damage"],
        abilities: ["Shifty Bugger: Goblins gain a +5 bonus to disengage checks."],
        isStaggered: false,
        id: 1
    },
    
    {
        name: "Goblin Shaman",
        level: 2,
        type: "caster",
        initiative: "+6",
        ac: 17,
        pd: 12,
        md: 16,
        hp: 34,
        health: 34,
        attacks: ["Pointy Spear +6 vs AC - 5 damage", "R: Shaking Curse +6 vs PD - 8 damage, and until the end of the shaman's next turn, the target takes 2 damage whenever an enemy engages it or disengages from it. Natural Even hit or miss: Choose another nearby enemy; it also sufferes from the engage/disengage effect until the end of the shaman's next turn."],
        abilities: ["Shifty Bugger: Goblins gain a +5 bonus to disengage checks."],
        isStaggered: false,
        id: 2
    },
    
    {
        name: "Bugbear",
        level: 3,
        type: "troop",
        initiative: "+6",
        ac: 19,
        pd: 17,
        md: 12,
        hp: 55,
        health: 55,
        attacks: ["Oversized Weapon +8 vs AC - 10 damage. Natural Even Hit: The attack deals +5 damage. Miss: If the target is engaged with two or more foes, it takes 1D8 damage."],
        abilities: ["None"],
        isStaggered: false,
        id: 59
    },
    
    {
        name: "Hobgoblin Warrior",
        level: 2,
        type: "troop",
        initiative: "+3",
        ac: 19,
        pd: 14,
        md: 14,
        hp: 32,
        health: 32,
        attacks: ["Longsword +7 vs AC - 8 damage. Natural Even Miss: 2 damage."],
        abilities: ["Group Ability: For every 2 hobgoblins in the battle (round up, ignore mooks), one of them can use well-armored as a free action once during the battle.", "Well-armored (group): Ignore all damage from a hit (but not a crit) against AC."],
        isStaggered: false,
        id: 60
    },
    
    {
        name: "Hobgoblin Captain",
        level: 4,
        type: "leader",
        initiative: "+5",
        ac: 20,
        pd: 17,
        md: 14,
        hp: 50,
        health: 50,
        attacks: ["Longsword +10 vs AC - 14 damage, and willing underling triggers. Willing Underling: Until the start of its next turn, the first time an attack would hit the hobgoblin captain, it can partially avoid that attack if it has a nearby goblin ally. It only takes half damage from the attack, and that ally takes the rest.", "R: Throwing Axe +8 vs AC - 10 damage"],
        abilities: ["Group Ability: For every 2 hobgoblins in the battle (round up, ignore mooks), one of them can use well-armored as a free action once during the battle.", "Well-armored (group): Ignore all damage from a hit (but not a crit) against AC."],
        isStaggered: false,
        id: 61
    },
    
    {
        name: "Hobgoblin Warmage",
        level: 5,
        type: "caster",
        initiative: "+6",
        ac: 20,
        pd: 14,
        md: 19,
        hp: 70,
        health: 70,
        attacks: ["Warstaff +8 vs AC - 15 damage", "R: Fireblast +10 vs PD (up to 2 nearby enemies in a group) - 10 fire damage (or 20 if used against a single target), and the target loses its next move action.", "C: Concussive Blast +10 vs PD (all enemies engaged with the warmage) - 10 force damage, and the warmage pops the target off of it. Natural 20: The target is also dazed (save ends)."],
        abilities: ["None"],
        isStaggered: false,
        id: 62
    },
    
    // GOLEMS
    
    {
        name: "Flesh Golem",
        level: 4,
        type: "blocker (large)",
        initiative: "+5",
        ac: 18,
        pd: 16,
        md: 14,
        hp: 100,
        health: 100,
        attacks: ["Sweeping Fists +9 vs AC (2 attacks) - 15 damage", "Maddened Battlefield Repairs +11 vs AC (one staggered living enemy)- 20 damage, and the flesh golem heals 2D10 hit points. Miss: 10 damage, and the flesh golem heals 1D10 hit points. Limited Use: The flesh golem can only use this attack while it's staggered."],
        abilities: ["Energy Magnet: Whenever a spell that causes cold, fire, force, lightning, or negative energy damage targets one of the flesh golem's nearby allies, the flesh golem has a 50% chance of becoming the main target instead. Therefore, spells that affect groups would spread out from the flesh golem.", "Weakness of the Flesh: Unlike other golems, flesh golems are not immune to effects. Being constructed from the flesh of many, sometimes bloodily stitched together in the heat of battle, allows the golems to be affected by the fears and madness of mortals."],
        isStaggered: false,
        id: 63
    },
    
    {
        name: "Clay Golem",
        level: 6,
        type: "spoiler (large)",
        initiative: "+6",
        ac: 20,
        pd: 18,
        md: 14,
        hp: 120,
        health: 120,
        attacks: ["Bare Brutal Hands +10 vs AC - 36 damage. Cursed Wound: a non-dwarf creature damaged by a clay golem can't be healed to above half its maximum HP until after the battle."],
        abilities: ["Golem Immunity: Non-organic golems are immune to effects. They can't be dazed, weakened, confused, made vulnerable, or touched by ongoing damage. You can damage a golem, but that's about it.", "Ignore Attacks 11+: When an attack hits this creature, the attacker must roll a natural 11+ on the attack roll or it misses instead. That's ALL attacks."],
        isStaggered: false,
        id: 64
    },
    
    {
        name: "Stone Golem",
        level: 8,
        type: "blocker (large)",
        initiative: "+11",
        ac: 25,
        pd: 23,
        md: 18,
        hp: 280,
        health: 280,
        attacks: ["Massive Stone Fists +12 vs AC (2 attacks) - 35 damage. Miss: 15 damage.", "Finishing Smash +14 vs AC (one staggered enemy) - 80 damage, and the golem pops the target off it and moves it a short distance away from the golem. Natural Even Hit or Miss: 20 damage, and the target is hampered (save ends). Natural Odd Hit or Miss: 20 damage, and the target is dazed (save ends)."],
        abilities: ["Golem Immunity: Non-organic golems are immune to effects. They can't be dazed, weakened, confused, made vulnerable, or touched by ongoing damage. You can damage a golem, but that's about it.", "[Nastier Special] Former Idol: Evoke the powers of an ancient culture's strange rites by giving the stone golem any weird power you wish. If you're stuck for inspiration, consider starting with random abilities from demons that aren't related to energy or the cone of cold from the ogre mage."],
        isStaggered: false,
        id: 65
    },
    
    {
        name: "Iron Golem",
        level: 10,
        type: "wrecker (large)",
        initiative: "+13",
        ac: 28,
        pd: 24,
        md: 20,
        hp: 360,
        health: 360,
        attacks: ["Fists of Iron +17 vs AC (2 attacks) - 50 damage. Miss: 5D10 damage.", "[Nastier Special - special trigger] C: Poison Gas Cloud +15 vs PD (all nearby creatures) - 25 ongoing poison damage. "],
        abilities: ["Golem Immunity: Non-organic golems are immune to effects. They can't be dazed, weakened, confused, made vulnerable, or touched by ongoing damage. You can damage a golem, but that's about it.", "Rampage: At the start of each of the iron golem's turns, roll a D6. If the roll is equal to or less than the escalation die, the iron golem goes on a rampage that turn. Instead of its two normal fists of iron attacks, it can make three attacks with fists of iron, each against a different random nearby creature, enemy or ally. It can move after each such attack as a free action, if necessary, taking only half damage from opportunity attacks during the rampage.", "[Nastier Specials] Poison Gas: The first time the iron golem is staggered, poison gas leakes from it into the area. It can make ea poison gas cloud attack as a freee action."],
        isStaggered: false,
        id: 66
    },
    
    // HALF-ORCS
    
    {
        name: "Half-orc Legionnaire",
        level: 4,
        type: "troop",
        initiative: "+8",
        ac: 20,
        pd: 18,
        md: 14,
        hp: 56,
        health: 56,
        attacks: ["Longsword +10 vs AC - 12 damage. Natural Even Hit: The half-orc legionnaire gains a +2 bonus to all defenses until the start of its next turn. Natural Odd Hit: The target takes +1D6 damage. Natural Even Miss: 4 damage. Natural Odd Miss: If the legionnaire's next melee attack is a natural even hit, it becomes a critical hit instead!", "R: Javelin +10 vs AC - 10 damage."],
        abilities: ["[Nastier Special] Lethal Swing: Once per battle, a half-orc can reroll a melee attack and use the result it prefers."],
        isStaggered: false,
        id: 67
    },
    
    {
        name: "Half-orc Tribal Champion",
        level: 5,
        type: "wrecker",
        initiative: "+9",
        ac: 19,
        pd: 18,
        md: 17,
        hp: 80,
        health: 80,
        attacks: ["Great Axe +9 vs AC - 18 damage. Natural Odd Miss: The tribal champion heals 5 HP. Natural Even Miss: 10 damage.", "R: Longbow +8 vs AC - 12 damage"],
        abilities: ["Tribal Rage: When the escalation die is even, a tribal champion can roll 2D20 for each melee attack roll it makes and use the result it prefers. If both dice are 11+, the melee attack is a critical hit.", "[Nastier Special] Lethal Swing: Once per battle, a half-orc can reroll a melee attack and use the result it prefers."],
        isStaggered: false,
        id: 68
    },
    
    {
        name: "Half-orc Commander",
        level: 8,
        type: "leader",
        initiative: "+13",
        ac: 23,
        pd: 22,
        md: 18,
        hp: 150,
        health: 150,
        attacks: ["Jagged Longsword + 15 vs AC (2 attacks) - 15 damage. Natural Even Hit: One nearby lower-level mook makes an attack as a free action.", "R: Thrown Javelin +13 vs AC - 20 damage. Natural Even Hit: The half-orc commander gains 20 temporary HP."],
        abilities: ["Orcish Command: When a nearby ally of the half-orc commander scores a critical hit, that ally can roll a save against a save ends effect as a free action.", "[Nastier Special] Lethal Swing: Once per battle, a half-orc can reroll a melee attack and use the result it prefers."],
        isStaggered: false,
        id: 69
    },
    
    // HELL HOUND
    
    {
        name: "Hellhound",
        level: 3,
        type: "wrecker",
        initiative: "+5",
        ac: 18,
        pd: 16,
        md: 11,
        hp: 58,
        health: 58,
        attacks: ["Savage Bite +9 vs AC - 7 damage. Natural Even Hit or Miss: The hellhound can make a fiery breath attack as a free action.", "[special trigger] C: Fiery Breath +9 vs PD (1D3 nearby enemies in a group) - 10 fire damage."],
        abilities: ["Resist Fire 16+", "[Nastier Special] Fiery Aura: Each creature engaged with a hellhound at the start of its turn takes 2D6 fire damage."],
        isStaggered: false,
        id: 70
    },
    
    // HARPY
    
    {
        name: "Harpy",
        level: 4,
        type: "spoiler",
        initiative: "+7",
        ac: 18,
        pd: 14,
        md: 17,
        hp: 44,
        health: 44,
        attacks: ["Talons +6 vs AC - 10 damage. Cull: The harpy gains a +5 bonus to attack and damage with this attack against any enemy suffering from any fiendish song effect.", "C: Fiendish Song +10 vs MD (1D3 nearby enemies) - 5 psychic damage. Natural 16-17: The target is hampered (easy save ends). Natural 18-19: The target is weakened instead of hampered (easy save ends). Natural 20: The target is confused instead of weakened (easy save ends)."],
        abilities: ["Flight: Harpies are neither quick nor graceful, but their wings get the job done."],
        isStaggered: false,
        id: 71
    },
    
    // HUMANS
    
    {
        name: "Human Thug",
        level: 1,
        type: "troop",
        initiative: "+3",
        ac: 17,
        pd: 14,
        md: 12,
        hp: 27,
        health: 27,
        attacks: ["Heavy Mace +5 vs AC - 4 damage. Natural Even Hit or Miss: The thug deals +6 damage with its next attack this battle (be sure to let the PCs know this is coming)."],
        abilities: ["None"],
        isStaggered: false,
        id: 72
    },
    
    {
        name: "Demon-touched Human Ranger",
        level: 5,
        type: "archer",
        initiative: "+10",
        ac: 21,
        pd: 14,
        md: 19,
        hp: 80,
        health: 80,
        attacks: ["M or R: Demon Bow +10 vs AC - 15 damage, and the target is dazed until it pulls the arrow out using a quick action, which deals 10 ongoing damage. Natural Odd Hit or Miss: The demon bow eats at the ranger's arm and the ranger takes 1D6 damage."],
        abilities: ["Bow Teeth: Whenever an attacker hits the ranger with a melee attack, that creature takes 1D6 damage as the bow chews on it."],
        isStaggered: false,
        id: 73
    },
    
    // HUNGRY STAR
    
    {
        name: "Hungry Star",
        level: 3,
        type: "wrecker",
        initiative: "+8",
        ac: 16,
        pd: 12,
        md: 15,
        hp: 54,
        health: 54,
        attacks: ["Ripping Tentacles +8 vs AC - 10 damage. Natural Even Hit: If the target is taking ongoing psychic damage, the attack deals +2D6 damage.", "[group ability] R: Warp-pulse +8 vs PD (1D3 enemies in a group) - 5 ongoing psychic damage. Natural 16-18: While the target is taking ongoing psychic damage, it is dazed. Natural 19-20: While the target is taking ongoing psychic damage, it is confused instead of dazed."],
        abilities: ["Group Ability: For every 2 hungry stars in the battle (round up), one of them can use warp-pulse once during the battle.", "Limited Flight: Hungry stars flap and glide and hover, always within seven or eight feet of the ground. No one knows how that works."],
        isStaggered: false,
        id: 74
    },
    
    // HYDRAS
    
    {
        name: "Five-Headed Hydra",
        level: 5,
        type: "wrecker (huge)",
        initiative: "+9",
        ac: 20,
        pd: 19,
        md: 15,
        hp: 150,
        health: 150,
        attacks: ["Gnashing Teeth +10 vs AC (5 attacks) - 10 damage. Natural Even Hit or Miss: The hydra's next gnashing teeth attack, if it has an attack left this turn, can be against any nearby enemy instead of against a creature engaged with it. Miss: 5 damage."],
        abilities: ["Too Tough to Trick: Whenever the hydra would suffer any of the follow conditions, it ignores the condition and takes 5 damage instead: confused, dazed, hampered, stunned, or weakened.", "Roiling Swirl: If the hydra has at least two gnashing teeth attacks left during a turn, it can expend one of those attacks to move to engage a nearby enemy as a free action (but it will still take opportunity attacks for doing so).", "Sprout Sixth Head: The first time the hydra is staggered, as a free action it gains 40 HP and a sixth gnashing teeth attack, and is considered undamaged at its new HP total. Using the hydra's current HP as a new baseline, the hydra will be staggered again when it drops below 50% of that total.", "Sprout Seventh Head: The second time the hydra is staggered, as a free action it gains 40 HP and a seventh gnashing teeth attack, etc. Use a new HP baseline as before, but there is no eighth head waiting to sprout.", "[Nastier Special] Sprout Eighth Head: You know the drill."],
        isStaggered: false,
        id: 75
    },
    
    {
        name: "Seven-Headed Hydra",
        level: 7,
        type: "wrecker (huge)",
        initiative: "+11",
        ac: 24,
        pd: 21,
        md: 17,
        hp: 200,
        health: 200,
        attacks: ["Gnashing Teeth +12 vs AC (7 attacks) - 12 damage. Natural Even Hit or Miss: The hydra's next gnashing teeth attack, if it has an attack left this turn, can be against any nearby enemy instead of against a creature engaged with it. Miss: 7 damage.", "[Nastier Special - special trigger] C: Flame Breath +12 vs PD (1D2 nearby enemies) - 2D12 fire damage. Miss: Half damage."],
        abilities: ["Sprout Eighth Head: The first time the hydra is staggered, as a free action it gains 50 HP and an eighth gnashing teeth attack, and is considered undamaged at its new HP total. Using the hydra's current HP as a new baseline, the hydra will be staggered again when it drops below 50% of that total.", "Sprout Ninth Head: The second time the hydra is staggered, as a free action it gains 50 HP and a ninth gnashing teeth attack, and is considered undamaged at its new HP total. Using the hydra's current HP as a new baseline, the hydra will be staggered again when it drops below 50% of that total.", "Resist Opportunity Attacks 16+.", "[Nastier Special] Pyrohydra: When the hydra gets a natural even attack roll with a gnashing teeth attack, its next attack that turn (if it has one) is a flame breath attack instead. Note that flame breath attacks don't lead to other flaming breaths; they hydra has to return to making gnashing teeth attacks first."],
        isStaggered: false,
        id: 76
    },
    
    // KOBOLDS
    
    {
        name: "Kobold Archer",
        level: 1,
        type: "mook",
        mookNumber: 1,
        initiative: "+4",
        ac: 16,
        pd: 14,
        md: 10,
        hp: 6,
        health: 6,
        attacks: ["Simple Knife +6 vs AC - 3 damage", "R: Tiny Crossbow or Javelin +7 vs AC - 3 damage"],
        abilities: ["Evasive: Kobolds take no damage from missed attacks.", "Split Off: When one of the kobold's allies engages a creature engaged with the kobold, the kobold can pop free as a free action."],
        isStaggered: false,
        id: 77
    },
    
    {
        name: "Kobold Warrior",
        level: 1,
        type: "troop",
        initiative: "+4",
        ac: 18,
        pd: 15,
        md: 12,
        hp: 22,
        health: 22,
        attacks: ["Spear +8 vs AC - 4 damage. Natural Even Hit or Miss: The kobold warrior can pop free from the target."],
        abilities: ["Evasive: Kobolds take no damage from missed attacks.", "Not Brave: Kobold warriors with single digit HP will run away at the first chance they get."],
        isStaggered: false,
        id: 78
    },
    
    {
        name: "Kobold Hero",
        level: 2,
        type: "leader",
        initiative: "+3",
        ac: 18,
        pd: 16,
        md: 12,
        hp: 34,
        health: 34,
        attacks: ["Shortsword +7 vs AC - 6 damage, and each nearby non-leader kobold deals +3 damage with its next attack this battle that hits. Natural Even Miss: 3 damage."],
        abilities: ["Evasive: Kobolds take no damage from missed attacks."],
        isStaggered: false,
        id: 79
    },
    
    // LIZARDMAN
    
    {
        name: "Lizardman Savage",
        level: 2,
        type: "wrecker",
        initiative: "+6",
        ac: 17,
        pd: 16,
        md: 12,
        hp: 32,
        health: 32,
        attacks: ["Stone-tip Spear (or Club) +7 vs AC - 7 damage. Natural 16+: The lizardman savage can make a bite attack against the target or another creature engaged with it as a free action.", "[special trigger] Bite +7 vs AC - 5 damage, and the lizardman savage can make a ripping frenzy attack against the target as a standard action during its next turn if it's engaged with that target.", "[special trigger] Ripping Frenzy +9 vs AC (3 attacks) - 5 damage.", "R: Thrown Spear +6 vs AC - 5 damage"],
        abilities: ["None"],
        isStaggered: false,
        id: 80
    },
    
    // MANTICORE
    
    {
        name: "Manticore",
        level: 6,
        type: "archer (large)",
        initiative: "+13",
        ac: 22,
        pd: 20,
        md: 16,
        hp: 182,
        health: 182,
        attacks: ["Battering Paws +11 vs AC (2 attacks) - 20 damage. Natural 16+: The manticore can make a single volley of tail spikes attack (one attack roll) against a different target as a free action.", "Crushing Leonine Jaws +11 vs AC - 30 damage; OR 50 damage against a creature taking ongoing poison damage.", "C: Volley of Tail Spikes +13 vs AC (1D3 nearby or far away enemies in a group) - 5 ongoing poison damage (hard save ends)."],
        abilities: ["Flight: Manticores are poor fliers in tight spaces, but out in the open they are more capable.", "Poison Reservoirs: Each time the manticore uses its volley of tail spikes attack, it takes 1D6 damage, or 2D6 damage if it is staggered."],
        isStaggered: false,
        id: 81
    },
    
    // MEDUSAS
    
    {
        name: "Medusa Outlaw",
        level: 6,
        type: "wrecker (double-strength)",
        initiative: "+11",
        ac: 22,
        pd: 16,
        md: 20,
        hp: 150,
        health: 150,
        attacks: ["Snakes and Daggers +11 vs AC (2 attacks) - 10 damage, and 10 ongoing poison damage. Natural 18+: The medusa can make a petrifying gaze attack against the target as a free action.", "R: Poison Arrow +11 vs AC (one nearby or far away enemy) - 15 damage, and 10 ongoing poison damage. Natural 20: The medusa can make a petrifying gaze attack against the target as a free action.", "[special trigger] C: Petrifying Gaze +11 vs MD (one enemy) - 20 psychic damage, and the target must start making last gasp saves as it turns to stone."],
        abilities: ["Caught by an Eye: Whenever a nearby enemy attacks the medusa outlaw and rolls a natural 1 or 2, the medusa can make a petrifying gaze attack against that attacker as a free action.", "Escalating Threat: At the start of each of the medusa's turns, roll a D4. If you roll less than or equal to the escalation die, the medusa can also use petrifying gaze as a quick action once during that turn."],
        isStaggered: false,
        id: 82
    },
    
    {
        name: "Medusa Noble",
        level: 11,
        type: "caster (double-strength)",
        initiative: "+17",
        ac: 27,
        pd: 21,
        md: 25,
        hp: 500,
        health: 500,
        attacks: ["Snakes and Swords +17 vs AC (3 attacks) - 30 damage, and 15 ongoing poison damage. Natural 18+: The medusa can make a petrifying gaze attack against the target as a free action.", "R: Lightning Fork +17 vs PD (one nearby or far away enemy) - 80 lightning damage. Natural Odd Hit or Miss: The medusa deals 1D6 x 10 lightning damage to all nearby enemies. Natural Even Hit or Miss: The medusa can make a lightning fork attack against a different target as a free action; keep making lightning fork attacks until you run out of targets that have taken damage from lightning fork or roll a natural odd attack.", "[special trigger] C: Petrifying Gaze +17 vs MD (one enemy) - 70 psychic damage, and the target must start making last gasp saves as it turns to stone."],
        abilities: ["Caught by an Eye: Whenever a nearby enemy attacks the medusa noble and rolls a natural 1-5, the medusa can make a petrifying gaze attack against that attacker as a free action.", "Serpent Wardings: Thrice per battle, as a free action, the medusa noble can force an enemy to reroll a spell attack that targeted it. The attacker can't use the escalation die for the reroll.", "Skilled Sorcerer: If lightning isn't working against her target, the medusa noble can take a -2 attack penalty to change the energy type of her ranged attack to fire or thunder."],
        isStaggered: false,
        id: 83
    },
    
    // MINOTAUR
    
    {
        name: "Minotaur",
        level: 4,
        type: "troop (large)",
        initiative: "+8",
        ac: 19,
        pd: 17,
        md: 13,
        hp: 94,
        health: 94,
        attacks: ["Axe or Horns +9 vs AC - 27 damage, and one of the minotaur's allies can pop free from the target as a free action. Furious Charge: The attack instead deals 40 damage on a hit if the minotaur first moves before attacking an enemy it was not engaged with at the start of its turn."],
        abilities: ["Blood Frenzy: Minotaurs gain a +4 melee attack bonus against staggered enemies.", "[Nastier Special] Durable: The first time each round the minotaur takes damage, prevent 2D6 of it.", "[Nastier Special] Fear: While engaged with this creature, enemies that have 24 HP or fewer are dazed and do not add the escalation die to their attacks."],
        isStaggered: false,
        id: 84
    },
    
    // OGRE
    
    {
        name: "Ogre",
        level: 3,
        type: "troop (large)",
        initiative: "+5",
        ac: 19,
        pd: 16,
        md: 12,
        hp: 90,
        health: 90,
        attacks: ["Big Honkin' Club +7 vs AC - 18 damage. Miss: Half damage.", "Big Shove +9 vs PD (each enemy engaged with ogre) - 1D6 damage, and the target pops free from the ogre. Quick use: This power only requires a quick action (once per round) instead of a standard action when the escalation die is even."],
        abilities: ["[Nastier Special] Tough Skin: Whenever the ogre takes weapon damage, reduce that damage by 1D8 points."],
        isStaggered: false,
        id: 85
    },
    
    // OGRE MAGE
    
    {
        name: "Ogre Mage",
        level: 7,
        type: "caster (large)",
        initiative: "+14",
        ac: 23,
        pd: 19,
        md: 21,
        hp: 170,
        health: 170,
        attacks: ["Naginata +13 vs AC - 35 damage. Natural 18+: Make a second naginata attack against a nearby enemy as a free action (engaging it is not required).", "C: Cone of Cold +13 vs PD (up to 3 nearby enemies in a group) - 50 cold damage. Limited Use: 1/day,and the attack also targets the ogre's allies engaged with or between enemy targets.", "[special trigger] Aura of Treachery +13 vs MD - the target is confused until the end of the ogre mage's next turn."],
        abilities: ["Aura of Treachery: Once per round when a nearby enemy misses the ogre mage with an attack, the ogre mage can make an aura of treachery attack against it as a free action.", "Flight: The ogre mage flies using the sheer power of its superior mind.", "Invisibility: If the ogre mage is not engaged, it can turn invisible as an at-will standard action. It becomes visible when it attacks. The ogre mage takes 1D10 damage each time it uses invisibility while it's staggered.", "Resist Exceptional Attacks 16+: When a limited attack (not an at-will attack) targets this creature, the attacker must roll a natural 16+ on the attack roll or it only deals half damage.", "Trollish Regeneration 20: While an ogre mage is damaged, its uncanny flesh heals 20 HP at the start of the ogre mage's turn. It can regenerate 5 times per battle. If it heals to its maximum HP, then that use of regeneration doesn't count against the five-use limit. When the ogre mage is hit by an attack that deals fire or acid damage, it loses one use of its regeneration, and it can't regenerate during its next turn. Dropping an ogre mage to 0 HP doesn't kill it if it has any uses of regeneration left."],
        isStaggered: false,
        id: 86
    },
    
    // OOZES
    
    {
        name: "Black Pudding",
        level: 9,
        type: "wrecker (huge)",
        initiative: "+8",
        ac: 23,
        pd: 20,
        md: 19,
        hp: 470,
        health: 470,
        attacks: ["C: Acid-drenched Pseudopod +14 vs PD (up to 4 attacks, each against a different nearby enemy) - 30 acid damage, and 10 ongoing acid damage. Miss: 10 acid damage."],
        abilities: ["Flows Where it Likes: The ooze is immune to opportunity attacks.", "Ooze: The ooze is immune to effects. When an attack applies a condition to an ooze, that condition doesn't affect it.", "Climber: A black pudding sticks to ceilings and walls when it wishes, sliding along as easily as on the floor.", "Slippery: The pudding has resist weapons 12+."],
        isStaggered: false,
        id: 87
    },
    
    {
        name: "Gelatinous Cube",
        level: 5,
        type: "blocker (huge)",
        initiative: "+4",
        ac: 20,
        pd: 18,
        md: 15,
        hp: 200,
        health: 200,
        attacks: ["Shlup'n'schlorp +10 vs PD - 30 acid damage, and the cube engulfs the target (functions like a grab; see below) if it's smaller than the cube. Miss: The cube can make a spasms attack as a free action.", "[special trigger] C: Spasms +10 vs AC (up to 2 attacks, each against a different nearby enemy) - 15 damage."],
        abilities: ["Flows Where it Likes: The ooze is immune to opportunity attacks.", "Ooze: The ooze is immune to effects. When an attack applies a condition to an ooze, that condition doesn't affect it.", "Engulf and Dissolve: Targets engulfed/grabbed by the cube take 30 acid damage at the start of the cube's turn but are not viable targets for additional attacks by the cube. Multiple targets can be held within the cube simultaneously. Any engulfed creature that is also staggered must begin making last gasp saves or become paralyzed as the cube's toxins overwhelm it."],
        isStaggered: false,
        id: 88
    },
    
    {
        name: "Ochre Jelly",
        level: 3,
        type: "wrecker (large)",
        initiative: "+2",
        ac: 18,
        pd: 17,
        md: 16,
        hp: 90,
        health: 90,
        attacks: ["C: Acid-drenched Pseudopod +8 vs PD (1D4 attacks, each against a different nearby enemy) - 6 acid damage. Natural Even Hit or Miss: 3 ongoing acid damage."],
        abilities: ["Flows Where it Likes: The ooze is immune to opportunity attacks.", "Ooze: The ooze is immune to effects. When an attack applies a condition to an ooze, that condition doesn't affect it.", "Splitter: The first time an ochre jelly takes 20 or more damage from a single attack, it splits into two normal-sized ochre jellies, each with half the original creature's HP plus 2D6 HP for good luck. Treat the new jellies as undamaged jellies at their new HP totals, but they don't have the splitter ability (maybe they get back together if they survive the fight. Maybe they don't."],
        isStaggered: false,
        id: 89
    },
    
    // ORCS
    
    {
        name: "Orc Warrior",
        level: 1,
        type: "troop",
        initiative: "+3",
        ac: 16,
        pd: 14,
        md: 10,
        hp: 30,
        health: 30,
        attacks: ["Jagged Sword +6 vs AC - 6 damage. Dangerous: The crit range of attacks by orcs expands by 3 unless they are staggered."],
        abilities: ["None"],
        isStaggered: false,
        id: 90
    },
    
    {
        name: "Orc Berserker",
        level: 2,
        type: "troop",
        initiative: "+5",
        ac: 16,
        pd: 15,
        md: 13,
        hp: 40,
        health: 40,
        attacks: ["Greataxe +7 vs AC - 8 damage. Dangerous: The crit range of attacks by orcs expands by 3 unless they are staggered."],
        abilities: ["Unstoppable: When an orc berserker drops to 0 HP, it does not immediately die. Ignore any damage in excess of 0 HP, roll 2D6, and give the berserker that many temporary hit points. No other healing can affect the berserker or give it more temporary hit points: when the temporary HP are gone, the berserker dies."],
        isStaggered: false,
        id: 91
    },
    
    {
        name: "Orc Shaman",
        level: 2,
        type: "leader",
        initiative: "+5",
        ac: 18,
        pd: 12,
        md: 16,
        hp: 36,
        health: 36,
        attacks: ["Spear +6 vs AC - 6 damage. Dangerous: The crit range of attacks by orcs expands by 3 unless they are staggered.", "R: Battle Curse +7 vs MD (1D3 nearby enemies) - 4 psychic damage, and for the rest of the battle, melee attacks by orcs deal +1D4 damage against the target (non-cumulative)."],
        abilities: ["None"],
        isStaggered: false,
        id: 92
    },
    
    {
        name: "Orc Rager",
        level: 7,
        type: "mook",
        mookNumber: 1,
        initiative: "+12",
        ac: 22,
        pd: 20,
        md: 16,
        hp: 27,
        health: 27,
        attacks: ["Greataxe +12 vs AC - 16 damage. Dangerous mooks: The crit range of melee attacks by orc ragers expands by 3 until half the orc rager mob has been dropped."],
        abilities: ["Dying Strike: When an orc rager drops to 0 HP, it can make a final attack as a free action. (GM, since it isn't always important which mook dies, feel free to make these extra attacks come from the ragers engaged with a PC.)"],
        isStaggered: false,
        id: 93
    },
    
    {
        name: "Great Fang Cadre",
        level: 10,
        type: "mook",
        mookNumber: 1,
        initiative: "+13",
        ac: 27,
        pd: 25,
        md: 21,
        hp: 50,
        health: 50,
        attacks: ["Double Axe +15 vs AC - 25 damage. Natural 11+: The cadre can make a second double axe attack (no more) as a free action. Dangerous Mooks: The crit range of melee attacks by great fang cadre orcs expands by 3 until half the great fang cadre mob has been dropped.", "R: Big, Black, Creaking Bow +15 vs AC - 37 damage. Natural Even Hit or Miss: The attack targets PD instead of AC."],
        abilities: ["[Nastier Special] On the Spot Mutation: Whenever an attack eliminates one or more members of the mob, there is a 50% chance that each survivor gains a mutation like a sudden new body part or temporary magical aura. The GM chooses which of the following improvements, perhaps at random, and invents a new part or magic effect to explain it: extra melee attack, damage aura: 1D20 damage vs any enemy that starts its turn engaged with the orc, or +4 bonus to AC."],
        isStaggered: false,
        id: 94
    },
    
    // OTYUGH
    
    {
        name: "Otyugh",
        level: 3,
        type: "blocker (large)",
        initiative: "+5",
        ac: 19,
        pd: 17,
        md: 13,
        hp: 84,
        health: 84,
        attacks: ["Grasping Tentacles +8 vs PD (2 attacks) - 5 damage. Natural Even Hit: The otyugh can grab the target. Natural 18 or 20: The otyugh can grab the target and make a big toothy maw attack against it as a free action.", "Big Toothy Maw +12 vs AC (one enemy it's grabbing; includes a +4 grab bonus) - 16 damage."],
        abilities: ["Trash Nest Defense: The otyugh gains a +2 bonus to all defenses while fighting in its nest or in similar piles of excrement and trash.", "Tentacle Flail: Once per round, an otyugh can make a grasping tentacles attack as a free action against a moving nearby creature it is not engaged with; on a natural even hit, the target is grabbed and its movement stops."],
        isStaggered: false,
        id: 95
    },
    
    // OWLBEAR
    
    {
        name: "Owlbear",
        level: 4,
        type: "wrecker (large)",
        initiative: "+8",
        ac: 19,
        pd: 17,
        md: 13,
        hp: 101,
        health: 101,
        attacks: ["Rip and Peck +9 vs AC - 15 damage, and until the end of the owlbear's next turn, the target is hampered while engaged with the owlbear. Vicious Hybrid: If the escalation die is even, make another rip and peck attack."],
        abilities: ["Feed the Cubs: An owlbear that scores a critical hit against a hampered enemy tears a piece of the creature off (GM chooses a limb) and will subsequently attempt to retreat with the prize to feed its cubs. The torn-up enemy is stunned until the end of its next turn.", "Silent Hunter: Owlbear's are nearly silent until the strike. Checks to hear them approaching take a -5 penalty."],
        isStaggered: false,
        id: 96
    },
    
    // PHASE SPIDER
    
    {
        name: "Phase Spider",
        level: 7,
        type: "spoiler (large)",
        initiative: "+16",
        ac: 23,
        pd: 22,
        md: 18,
        hp: 200,
        health: 200,
        attacks: ["Phasing Fangs +11 vs PD (2 attacks) - 25 damage. Natural Even Hit: The spider can make a rummage and filch attack against the target as a free action, even if the target isn't staggered.", "Rummage and Filch +11 vs MD (one staggered creature) - the phase spider steals a random true magic item from the target (see below)."],
        abilities: ["Phasing Abilities: As long as it didn't just return from being out of phase, at the start of the phase spider's turn, roll a D6 to see which of its phase and teleport abilities it can access that turn. The spider doesn't have to use the available ability and can attack normally, if it wishes. 1-2: Short teleport - as a move action, the spider can telport anywhere it can see nearby. 3: Long teleport - As a move action, the spider can teleport anywhere it can see nearby or far away. 4-5: Phase out - as a move action, the spider can remove itself from the battlefield, returning on its next initiative turn anywhere it chooses nearby. It doesn't get to make a phase roll at the start of its next turn, though. 6: Teleport away - if the spider has stolen at least one magic item, as a move action it can teleport back to its lair, or to its master if it has one. It leaves the battle. If it hasn't stolen an item yet, it won't leave and can use its choice of the other abilities this turn.", "Stolen Items: The spider stows items it has stolen in a disgusting pouch in its abdomen. Wizards speculate that if stolen items are not handed over to a master, it somehow affects the phase spider's hideous reproductive process, so a spider without an item will fight until it gets one. If the heroes can slay the spider before it flees, they get their stuff back. If the spider hasn't returned to its lair or a master yet, there might be magic items in its pouch stolen from other beings; such items will be grateful to have been rescued. A result of 20 on a D20 means there are items in the pouch, or you can skip the roll to use something found in its pouch as an opportunity to mix the PC's up in a new story."],
        isStaggered: false,
        id: 97
    },
    
    // RAKSHASA
    
    {
        name: "Rakshasa",
        level: 8,
        type: "caster (double-strength)",
        initiative: "+16",
        ac: 23,
        pd: 20,
        md: 22,
        hp: 280,
        health: 280,
        attacks: ["Claws and Bite +11 vs AC (2 attacks) - 25 damage. Natural Even Hit: The rakshasa can make a rend mind attack as a free action.", "R: Striped Lightning Bolts +13 vs PD (1D3 nearby enemies) - 25 lightning damage, or 50 lightning damage against a staggered target. Natural Even Hit: The rakshasa can make a rend mind attack as a free action.", "C: Rend Mind +13 vs MD (one nearby enemy) - 15 psychic damage, and the target is confused until the end of the rakshasa's next turn."],
        abilities: ["Shapechange: As a standard action, the rakshasa can changes its form to that of any humanoid, or back to its own shape. Seeing through the shapechange requires a DC 25 skill check.", "[Nastier Special] Master of Chaos: The rakshasa gains a bonus to all defenses equal to the current number of confused enemies in the battle.", "[Nastier Special] Reversal of Fate: Once per day as a quick action, the rakshasa steals the escalation die; until the end of the battle, the rakshasa gains an attack bonus equal to the die's value when it was stolen. Reset the escalation die to 0 for the players and increase it normally with each new round."],
        isStaggered: false,
        id: 98
    },
    
    // SAHUAGIN
    
    {
        name: "Sahuagin",
        level: 5,
        type: "wrecker",
        initiative: "+9",
        ac: 20,
        pd: 19,
        md: 16,
        hp: 70,
        health: 70,
        attacks: ["Trident and Bite +10 vs AC (2 attacks) - 10 damage. Natural 20: Increase the escalation die by 1, and the target is hampered until the end of its next turn.", "R: Barbed Crossbow +9 vs AC (one nearby enemy, or a far away enemy at a -2 penalty) - 10 damage, and 5 ongoing damage."],
        abilities: ["Blood Frenzy: Make a note of the escalation die when the sahuagin becomes staggered. The sahuagin gains a bonus to its melee attacks and damage equal to the escalation die value for the rest of the battle.", "[Nastier Special] Demon-touched: Roll a D6 on the Demon Random Abilities table (CRB page 209). The sahuagin gains that ability."],
        isStaggered: false,
        id: 99
    },
    
    // SKELETONS
    
    {
        name: "Decrepit Skeleton",
        level: 1,
        type: "mook",
        mookNumber: 1,
        initiative: "+6",
        ac: 16,
        pd: 14,
        md: 10,
        hp: 7,
        health: 7,
        attacks: ["Sword +6 vs AC - 3 damage"],
        abilities: ["Resist Weapons 16+", "Vulnerability: Holy"],
        isStaggered: false,
        id: 100
    },
    
    {
        name: "Skeletal Hound",
        level: 1,
        type: "blocker",
        initiative: "+7",
        ac: 15,
        pd: 13,
        md: 13,
        hp: 24,
        health: 24,
        attacks: ["Bite +6 vs AC - 5 damage. Natural Even Hit: The hound leaves teeth in the wound; the target takes 5 ongoing damage, and the hound takes 1D6 damage."],
        abilities: ["Resist Weapons 16+", "Vulnerability: Holy", "Chomp Chomp Chomp: Enemies with a lower initiative than the hound take a -5 penalty to disengage checks against it.", "Skilled Intercept 11+: Once per round, an engaged skeletal hound can attempt to pop free and intercept an enemy moving past it. Roll a normal save: on an 11+, it succeeds."],
        isStaggered: false,
        id: 101
    },
    
    {
        name: "Skeleton Archer",
        level: 1,
        type: "archer",
        initiative: "+7",
        ac: 16,
        pd: 14,
        md: 11,
        hp: 26,
        health: 26,
        attacks: ["Jabby Bones +5 vs AC - 4 damage", "R: Shortbow +7 vs AC - 6 damage"],
        abilities: ["Resist Weapons 16+", "Vulnerability: Holy"],
        isStaggered: false,
        id: 102
    },
    
    {
        name: "Skeleton Warrior",
        level: 2,
        type: "troop",
        initiative: "+8",
        ac: 16,
        pd: 14,
        md: 11,
        hp: 26,
        health: 26,
        attacks: ["Spear +8 vs AC - 6 damage"],
        abilities: ["Resist Weapons 16+", "Vulnerability: Holy"],
        isStaggered: false,
        id: 103
    },
    
    {
        name: "Blackamber Skeletal Legionnaire",
        level: 4,
        type: "troop",
        initiative: "+10",
        ac: 21,
        pd: 15,
        md: 17,
        hp: 48,
        health: 48,
        attacks: ["Shortsword +10 vs AC - 14 damage. Natural 16+: The target moves down 1D3 points in initiative order, to a minimum of 1. Natural Even Miss: 5 damage.", "R: Javelin +8 vs AC - 10 damage."],
        abilities: ["Resist Weapons 16+", "Vulnerability: Holy", "Press Advantage: The legionnaire deals +1D8 damage with its attacks against enemies that have a lower initiative than it."],
        isStaggered: false,
        id: 104
    },
    
    // TROGLODYTES
    
    {
        name: "Trog",
        level: 2,
        type: "spoiler",
        initiative: "+4",
        ac: 18,
        pd: 17,
        md: 13,
        hp: 38,
        health: 38,
        attacks: ["Club +6 vs AC - 8 damage. Miss: Damage equal to the penalty the trog's stench currently imposes on the target.", "R: Javelin +5 vs AC - 6 damage"],
        abilities: ["Trog Stench: Trogs spray scents that stink so badly other humanoids take penalties to all attacks, defenses, and saves when engaged with a troglodyte or when nearby three or more troglodytes. Non-humanoids usually aren't affected. Humanoids affected by trog stench can make a normal save at the end of each of their turns (though they'll be taking a penalty). If the save succeeds, the humanoid can ignore all trog stench for the rest of the battle. Trog stench penalties vary for different kin: -4: Elves, gnolls, gnomes; -3: Humans, halflings, half-elves, holy ones, tieflings, most everyone else; -2: Half-orcs, dragonics; -1: Dwarves; -0: Forgeborn.", "Chameleon: Underground, or in swamps and rivers, attacks against troglodytes by enemies who aren't engaged with them take a -4 penalty."],
        isStaggered: false,
        id: 105
    },
    
    {
        name: "Trog Chanter",
        level: 3,
        type: "leader",
        initiative: "+5",
        ac: 19,
        pd: 16,
        md: 18,
        hp: 44,
        health: 44,
        attacks: ["Spear +8 vs AC - 12 damage. Miss: Damage equal to the penalty the trog's stench currently imposes on the target.", "Hissing Curse +10 vs MD (one nearby enemy, or a far away enemy at a -2 penalty) - 10 damage, and the target is again affected by trog stench if it had saved against the effect. Natural 20: All nearby humanoids who saved against trog stench earlier in the battle are affected by it again."],
        abilities: ["Trog Stench: Trogs spray scents that stink so badly other humanoids take penalties to all attacks, defenses, and saves when engaged with a troglodyte or when nearby three or more troglodytes. Non-humanoids usually aren't affected. Humanoids affected by trog stench can make a normal save at the end of each of their turns (though they'll be taking a penalty). If the save succeeds, the humanoid can ignore all trog stench for the rest of the battle. Trog stench penalties vary for different kin: -4: Elves, gnolls, gnomes; -3: Humans, halflings, half-elves, holy ones, tieflings, most everyone else; -2: Half-orcs, dragonics; -1: Dwarves; -0: Forgeborn.", "Chameleon: Underground, or in swamps and rivers, attacks against troglodytes by enemies who aren't engaged with them take a -4 penalty."],
        isStaggered: false,
        id: 106
    },
    
    {
        name: "Trog Underling",
        level: 8,
        type: "mook",
        mookNumber: 1,
        initiative: "+10",
        ac: 23,
        pd: 22,
        md: 17,
        hp: 38,
        health: 38,
        attacks: ["Club +12 vs AC - 22 damage. Miss: Damage equal to three times the penalty the trog's stench currently imposes on the target.", "R: Javelin +11 vs AC - 16 damage"],
        abilities: ["Trog Stench: Trogs spray scents that stink so badly other humanoids take penalties to all attacks, defenses, and saves when engaged with a troglodyte or when nearby three or more troglodytes. Non-humanoids usually aren't affected. Humanoids affected by trog stench can make a normal save at the end of each of their turns (though they'll be taking a penalty). If the save succeeds, the humanoid can ignore all trog stench for the rest of the battle. Trog stench penalties vary for different kin: -4: Elves, gnolls, gnomes; -3: Humans, halflings, half-elves, holy ones, tieflings, most everyone else; -2: Half-orcs, dragonics; -1: Dwarves; -0: Forgeborn.", "Chameleon: Underground, or in swamps and rivers, attacks against troglodytes by enemies who aren't engaged with them take a -4 penalty."],
        isStaggered: false,
        id: 107
    },
    
    // TROLL
    
    {
        name: "Troll",
        level: 4,
        type: "troop (large)",
        initiative: "+9",
        ac: 17,
        pd: 17,
        md: 13,
        hp: 90,
        health: 90,
        attacks: ["Greedy Wicked Claw +8 vs AC (2 attacks) - 15 damage"],
        abilities: ["Trollish Regeneration 10: While a troll is damaged, its rubbery flesh heals 10 HP at the start of the troll's turn. It can regenerate five times per battle. If it heals to its maximum HP, then that use of regeneration doesn't count against the five-use limit. When the troll is hit by an attack that deals fire or acid damage, it loses one use of its regeneration, and it can't regenerate during its next turn. Dropping a troll down to 0 HP doesn't kill it if it has any uses of regeneration left.", "[Nastier Special] Increased Regeneration: Increase the troll's regeneration dice; the baseline amount a troll regenerates should run about 1/9 of its total HP, but you can go higher to be nasty.", "Mutant: Fire and acid don't screw with the troll's regeneration; lightning does instead.", "Rending: If both claw attacks hit the same target, the target also takes 10 ongoing damage."],
        isStaggered: false,
        id: 108
    },
    
    // VAMPIRES
    
    {
        name: "Vampire",
        level: 10,
        type: "spoiler",
        initiative: "+15",
        ac: 26,
        pd: 20,
        md: 26,
        hp: 220,
        health: 220,
        attacks: ["Deathly Touch +15 vs PD - 50 negative energy damage. Natural 11+: The target is also weakened until the end of its next turn. In addition, the target expends one unused limited trait (a spell, power, or talent with a once per battle or daily use, but not magic item powers) of its choice.", "[Nastier Special] C: Vampiric Compulsion +15 vs MD (one enemy; see below) - the target is confused and vulnerable (save ends). Limited Use: The vampire can use vampiric compulsion as a free action only when a nearby enemy attacks the vampire and misses with a natural attack roll of 1-5."],
        abilities: ["Vulnerability: Holy", "Vampiric Regeneration: The vampire regenerates 1 HP per level at the start of each round indefinitely, but it turns to mist if it drops to 0 HP (see below).", "Mist Form: Unless it is slain in a manner appropriate for truly killing vampires in the campaign, a vampire that drops to 0 HP drifts away to return and fight some other day."],
        isStaggered: false,
        id: 109
    },
    
    {
        name: "Vampire Spawn",
        level: 6,
        type: "spoiler",
        initiative: "+10",
        ac: 20,
        pd: 17,
        md: 15,
        hp: 90,
        health: 90,
        attacks: ["Claw +10 vs AC - 18 damage. Natural Even Hit: The vampire spawn can make a fangs attack against the target as a free action.", "[special trigger] Fangs +14 vs AC - 7 damage, and a humanoid target is weakened until the end of the vampire spawn's next turn."],
        abilities: ["Vulnerability: Holy"],
        isStaggered: false,
        id: 110
    },
    
    {
        name: "Spawn of the Master",
        level: 10,
        type: "mook",
        mookNumber: 1,
        initiative: "+16",
        ac: 25,
        pd: 23,
        md: 20,
        hp: 54,
        health: 54,
        attacks: ["Claws and Fangs +15 vs AC - 30 damage. Natural 18+: If the target is staggered, it is also hampered until the end of its next turn."],
        abilities: ["Vulnerability: Holy"],
        isStaggered: false,
        id: 111
    },
    
    // WIGHT
    
    {
        name: "Wight",
        level: 4,
        type: "spoiler",
        initiative: "+7",
        ac: 21,
        pd: 17,
        md: 13,
        hp: 48,
        health: 48,
        attacks: ["Sword +9 vs AC - 10 damage. Natural Even Hit or Miss: unless the wight is staggered, the attack also deals 8 ongoing negative energy damage."],
        abilities: ["Vulnerability: Holy", "[Nastier Special] Barrow-touch: The wight's attacks against enemies taking ongoing negative energy damage are against PD instead of AC and their crit range expands by 2."],
        isStaggered: false,
        id: 112
    },
    
    // WRAITH
    
    {
        name: "Wraith",
        level: 5,
        type: "spoiler",
        initiative: "+10",
        ac: 19,
        pd: 14,
        md: 17,
        hp: 66,
        health: 66,
        attacks: ["Ice-cold Ghost Blade +10 vs PD - 14 negative energy damage. Natural 16+: The target is also weakened (save ends).", "C: Spiraling Assault +10 vs PD (1D3 nearby enemies) - 10 negative energy damage, and after the attack the wraith teleports to and engages with one target it hit. Limited Use: The wraith can use spiraling assault only when the escalation die is even."],
        abilities: ["Vulnerability: Holy", "Flight: The wraith hovers and zooms about.", "Ghostly: This creature has Resist Damage 16+ to all damage (yes, even holy damage) except force damage, which damages it normally. A wraith can move through solid objects, but it can't end its movement inside them.", "[Nastier Special] Drain Life: The wraith heals half the damage it deals when it hits with a natural 18+ attack roll."],
        isStaggered: false,
        id: 113
    },
    
    // WYVERN
    
    {
        name: "Wyvern",
        level: 5,
        type: "wrecker (large)",
        initiative: "+10",
        ac: 20,
        pd: 19,
        md: 14,
        hp: 140,
        health: 140,
        attacks: ["Tearing Jaws +10 vs AC - 35 damage. Natural Even Hit: The wyvern can make a deadly tail stinger attack during its next turn.", "[special trigger] Deadly Tail Stinger +10 vs PD - 15 damage, and the target takes 10 ongoing poison damage (hard save ends)."],
        abilities: ["Flight: Wyverns are poor fliers in tight spaces, but out in the open, they are more capable.", "[Nastier Special] Escalating Poison: Add the escalation die to the wyvern's ongoing poison damage whenever that damage is dealt."],
        isStaggered: false,
        id: 114
    },
    
    // ZOMBIES
    
    {
        name: "Zombie Shuffler",
        level: 1,
        type: "mook",
        mookNumber: 1,
        initiative: "+0",
        ac: 14,
        pd: 12,
        md: 8,
        hp: 10,
        health: 10,
        attacks: ["Rotting Fist +5 vs AC - 3 damage. Natural 16+: Both the zombie and its target take 1D4 damage!"],
        abilities: ["Vulnerability: Holy", "Headshot: A critical hit against a zombie shuffler deals triple damage isntead of the normal double damage for a crit."],
        isStaggered: false,
        id: 115
    },
    
    {
        name: "Human Zombie",
        level: 2,
        type: "troop",
        initiative: "+1",
        ac: 15,
        pd: 13,
        md: 9,
        hp: 60,
        health: 60,
        attacks: ["Rotting Fist +7 vs AC - 6 damage. Natural 16+: Both the zombie and its target take 1D6 damage!"],
        abilities: ["Vulnerability: Holy", "Headshot: A critical hit against a zombie drops it to 0 HP.", "[Nastier Special] Eat Brains: More dangerous zombies don't try to kill the moving targets before feasting on brains; they keep attacking any enemy they've knocked unconscious, rolling attacks against the helpless enemy until it's dead."],
        isStaggered: false,
        id: 116
    },
    
    {
        name: "Big Zombie",
        level: 4,
        type: "wrecker (large)",
        initiative: "+3",
        ac: 17,
        pd: 15,
        md: 12,
        hp: 160,
        health: 160,
        attacks: ["Club or Club-like Fists +9 vs AC - 22 damage. Natural Even Hit or Miss: Both the zombie and its target take 4D6 damage!"],
        abilities: ["Vulnerability: Holy", "Headshot: A critical hit against a zombie drops it to 0 HP."],
        isStaggered: false,
        id: 117
    },
    
    {
        name: "Giant Zombie (large)",
        level: 9,
        type: "mook",
        mookNumber: 1,
        initiative: "+8",
        ac: 23,
        pd: 21,
        md: 17,
        hp: 100,
        health: 100,
        attacks: ["Club or Club-like Fists +14 vs AC - 50 damage. Natural Even Hit or Miss: Both the zombie and its target take 6D10 damage!"],
        abilities: ["Vulnerability: Holy", "Headshot: A critical hit against a giant zombie mook deals triple damage instead of the normal double damage for a crit.", "Double-strength mook: The giant zombie mook counts as two 9th level mooks when you are building battles."],
        isStaggered: false,
        id: 118
    }

]

export { crbMonsterData }