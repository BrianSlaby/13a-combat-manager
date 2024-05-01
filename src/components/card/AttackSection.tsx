import React from "react"
import "./card.css"
import { monsterCardSectionProps } from "../../types"

export default function AttackSection({ monster }: monsterCardSectionProps): React.JSX.Element {
    const { attacks } = monster

    return (
        <div className="attack-sctn card-sctn card-sctn-dark">
            <h4>Attacks</h4>
            {
                attacks.map(attack => {
                    const { 
                        type,
                        target,
                        name,
                        bonus,
                        defenseTargeted,
                        numberOfAttacks,
                        damage,
                        effect,
                        miss,
                        extraEffects,
                        limitedUse
                    } = attack

                    const typeDisplayed = displayAttackType(type)
                    const targetDisplayed = target ? ` (${target}) ` 
                    : ""
                    const numAttacksDisplayed = numberOfAttacks ? ` (${numberOfAttacks} attacks) `  
                    : ""
                    const damageDisplayed = damage ? damage 
                    : ""
                    const effectDisplayed = effect ?  
                        damage ? `, and ${effect}` 
                        : effect.charAt(0).toUpperCase() + effect.slice(1)
                    : ""
                    
                    function displayAttackType(t: "melee" | "ranged" | "close") {
                        if (t === "melee") {
                            return ""
                        }
                        if (t === "ranged") {
                            return "R: "
                        }
                        if (t === "close") {
                            return "C: "
                        }
                    }

                    return (
                        <div 
                            className="monster-attack"
                            key={name}
                        >
                            <p><span className="bold">{`${typeDisplayed}${name}`}</span>{` + ${bonus} vs ${defenseTargeted}${targetDisplayed}${numAttacksDisplayed} - ${damageDisplayed}${effectDisplayed}`}</p>
                            {
                                miss &&
                                <p className="sub-p"><span className="bold">Miss</span>{`: ${miss}`}</p>
                            }
                            {
                                extraEffects &&
                                extraEffects.map(ee => {
                                    const { trigger, effect } = ee
                                    return (
                                        <p 
                                            key={trigger}
                                            className="sub-p"
                                        ><span className="bold">{trigger}</span>{`: ${effect}`}</p>
                                    )
                                })
                            }
                            {
                                limitedUse &&
                                <p className="sub-p"><span className="bold">Limited Use</span>{`: ${limitedUse}`}</p>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}