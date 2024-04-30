import React from "react"
import { monsterStatBlock } from "../../types"

type monsterCardProps = {
    monster: monsterStatBlock,
    index: number
}

export default function MonsterCard({ monster, index }: monsterCardProps): React.JSX.Element {

    return (
        <div className="monster-card">
            <p>{`Placeholder for ${monster.name}, card index ${index}`}</p>
        </div>
    )
}