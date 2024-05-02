import React from "react"


type effect = {
    trigger: string,
    effect: string
}

type monsterAttack = {
    type: "melee" | "ranged" | "close",
    target?: string,
    name: string,
    bonus: number | null,
    defenseTargeted: "AC" | "PD" | "MD" | null,
    numberOfAttacks?: number,
    damage: string | null,
    effect?: string,
    miss?: string,
    extraEffects?: effect[],
    limitedUse?: string
}

type monsterSpecialAbility = {
    name: string,
    text: string
}

export type monsterStatBlock = {
    name: string,
    type: string,
    level: number,
    sizeOrStrength: "normal" | "large" | "double-strength" | "huge" | "triple-strength",
    role: "archer" | "blocker" | "caster" | "leader" | "mook" | "spoiler" | "troop" | "wrecker",
    mookNumber?: number,
    initiative: string,
    ac: number,
    pd: number,
    md: number,
    hp: number,
    health: number,
    attacks: monsterAttack[],
    specialAbilities?: monsterSpecialAbility[],
    nastierSpecials?: monsterSpecialAbility[],
    isStaggered: boolean,
    id: number
}


export type headerProps = {
    handleChooseMonstersClick: () => void,
    handleClearMonstersClick: () => void
}

export type homeProps = {
    isSelectMonstersModalOpen: boolean,
    setIsSelectMonstersModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
    selectedMonsters: monsterStatBlock[],
    setSelectedMonsters: React.Dispatch<React.SetStateAction<monsterStatBlock[]>>
}

export type buttonProps = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactNode,
    style: "standard-btn" | "delete-card-btn",
    color: "main" | "secondary" | "ghost" | "none",
    dataset?: string,
    datasetValue?: number | string | boolean
}

export type modalProps = {
    children?: React.ReactNode,
    isOpen: boolean,
    closeModal: () => void
}

export type circleXProps = {
    size: number,
    color?: string
}

export type monsterCardProps = {
    monster: monsterStatBlock,
    index: number,
    selectedMonsters: monsterStatBlock[],
    setSelectedMonsters: React.Dispatch<React.SetStateAction<monsterStatBlock[]>>
}

export type monsterCardSectionProps = {
    monster: monsterStatBlock
}

