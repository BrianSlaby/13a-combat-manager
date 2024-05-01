import React from "react"
import "./card.css"
import { monsterCardProps } from "../../types"

export default function AbilitySection({ monster }: monsterCardProps): React.JSX.Element {
    const { specialAbilities, nastierSpecials } = monster

    return (
        <div className="ability-sctn card-sctn card-sctn-light">
            
            {
                specialAbilities &&
                <h4>Special Abilities</h4>
            }
            {
                specialAbilities &&
                specialAbilities.map(special => {
                    const { name, text } = special
                    return (
                        <p><span className="bold">{name}</span>{`: ${text}`}</p>
                    )
                })
                
            }
            {
                nastierSpecials && 
                <h4>Nastier Specials</h4>

            }
            {
                nastierSpecials &&
                nastierSpecials.map(special => {
                    const { name, text } = special
                    return (
                        <p><span className="bold">{name}</span>{`: ${text}`}</p>
                    )
                })
            }
        </div>
    )
}