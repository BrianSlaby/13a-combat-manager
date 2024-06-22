import { monsterStatBlock } from "../types"

// Data based on 13 True Ways, 1st Edition

const thirteenTrueWaysMonsterData: monsterStatBlock[] = [

    // ANIMALS
    // id for Wibble (Bestiary) was 322; next id is 323
    
    
    // AZERS
    
    
    
    // BAT DEMON
    
    
    
    // CLOUD GIANTS
    
    
    
    // DEVILS
    
    
    
    // DRAGONS, METALLIC
    
    
    
    // ELEMENTALS
    
    
    
    // FLOWER OF UNLIFE
    
    
    
    // GNOLLS
    
    
    
    // MUMMY
    
    
    
    // PIXIES
    
    
    
    // SOUL FLENSERS
    
    
    
    // SPECTERS
    
    
    
    // TREANTS
    
    
    
    // WEREBEASTS
    
    
    
    // ZOMBIES
    
    {
        name: "Zombie Beast",
        type: "undead",
        level: 2,
        sizeOrStrength: "large",
        role: "troop",
        initiative: "+1",
        ac: 14,
        pd: 12,
        md: 8,
        hp: 110,
        health: 110,
        attacks: [
            {
                type: "melee",
                name: "Smash",
                bonus: 7,
                defenseTargeted: "AC",
                damage: "20 damage",
                effect: "the zombie can only attack using Gutburst during its next turn.",
                extraEffects: [
                    {
                        trigger: "Natural 16+",
                        effect: "Both the zombie and its target take 2D6 damage."
                    } 
                ]
            },
            {
                type: "close",
                target: "up to 2 nearby enemies",
                name: "[special trigger] Gutburst",
                bonus: 6,
                defenseTargeted: "PD",
                damage: null,
                effect: "the target takes 3 ongoing acid damage from a spray of stinking, zombified gut juice. The zombie takes 1D6 damage."
            },
            {
                type: "close",
                target: "each enemy engaged with it",
                name: "[nastier special; special trigger] Thrash",
                bonus: 7,
                defenseTargeted: "PD",
                damage: "15 damage"
            }
        ],
        specialAbilities: [
            {
                name: "Headshot",
                text: "The first time an enemy crits the zombie, the beast must roll a save. If it succeeds, it takes normal crit damage. If it fails, it drops to 0 HP. A second crit just drops the thing."
            }
        ],
        nastierSpecials: [
            {
                name: "Ghastly Thrashing",
                text: "When the zombie beast is first Staggered, it makes a Thrash attack as a free action."
            }
        ],
        isStaggered: false,
        id: 219
    },
    
    {
        name: "Zombie of the Silver Rose",
        type: "undead",
        level: 4,
        sizeOrStrength: "normal",
        role: "mook",
        mookNumber: 1,
        initiative: "+7",
        ac: 17,
        pd: 15,
        md: 11,
        hp: 20,
        health: 20,
        attacks: [
            {
                type: "melee",
                name: "Iron-hard Hands",
                bonus: 9,
                defenseTargeted: "AC",
                damage: "7 damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit or Miss",
                        effect: "Both the zombie and its target take 1D6 damage."
                    }
                ]
            },
            {
                type: "close",
                target: "one nearby enemy",
                name: "[nastier special] Curse",
                bonus: 4,
                defenseTargeted: "MD",
                damage: null,
                effect: "the target is Weakened until the start of the zombie's next turn.",
                extraEffects: [
                    {
                        trigger: "Mob Rule",
                        effect: "The Curse gains an attack bonus equal to the number of Silver Rose zombies in the battle."
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Hand of the Fallen",
                text: "When a melee attack drops one or more Silver Rose mooks, the hand of one of those zombies ends up severed from its owner and latched onto a nearby enemy. The afflicted creature is Vulnerable to all attacks until the hand is removed, which takes a standard action by that creature or an ally next to them."
            },
            {
                name: "Shot to the Head",
                text: "When an attack drops this zombie and it had 2, 4, or 6 HP remaining, the attack deals the same amount of damage to another member of the mob. If this zombie has any other number of HP left? No hit to the head."
            }            
        ],
        nastierSpecials: [
            {
                name: "Curse of Failure",
                text: "Each round, one zombie mook in the Silver Rose mob can make a Curse attack as a quick action."
            }
        ],
        isStaggered: false,
        id: 220
    },
    
    {
        name: "Headless Zombie",
        type: "undead",
        level: 9,
        sizeOrStrength: "normal",
        role: "troop",
        initiative: "+8",
        ac: 22,
        pd: 20,
        md: 17,
        hp: 270,
        health: 270,
        attacks: [
            {
                type: "melee",
                name: "Flailing Fists",
                bonus: 10,
                defenseTargeted: "AC",
                damage: "25 damage",
                extraEffects: [
                    {
                        trigger: "Natural Even Hit or Miss",
                        effect: "Both the zombie and the target take 3D10 damage."
                    }
                ]
            },
            {
                type: "ranged",
                target: "1D3 closest nearby enemies",
                name: "Mouthless Cry",
                bonus: 10,
                defenseTargeted: "MD",
                damage: null,
                effect: "the target is Dazed (save ends).",
                extraEffects: [
                    {
                        trigger: "Natural 16+",
                        effect: "The target takes 20 pyschic damage."
                    }
                ]
            }
        ],
        specialAbilities: [
            {
                name: "Death Spasms",
                text: "When a headless zombie drops to 0 HP, it flails with its fists and makes a Mouthless Cry attack as a free action before it dies."
            },
            {
                name: "Inevitable Hunger",
                text: "When a creature tries to affect the zombie's attack, such as forcing a reroll or applying a penalty, it must roll a normal save; on a failure, the effect is negated."
            }
        ],
        nastierSpecials: [
            {
                name: "Baleful Aura",
                text: "While nearby a headless zombie, when a creature would heal, it only heals half the normal hit points."
            },
            {
                name: "Necrotic Supremacy",
                text: "When the escalation die increases to 6, each headless zombie in the battle is restored to maximum hit points, including the dead ones."
            }
        ],
        isStaggered: false,
        id: 221
    }
]
    
export { thirteenTrueWaysMonsterData } 