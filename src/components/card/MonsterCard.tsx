import React, {useState} from "react"
import { monsterCardProps } from "../../types"
import Button from "../button/Button"
import CircleX from "../../assets/icons/CircleX"
import AttackSection from "./AttackSection"
import AbilitySection from "./AbilitySection"
import "./card.css"


export default function MonsterCard({ 
    monster, 
    index,
    selectedMonsters,
    setSelectedMonsters 

}: monsterCardProps): React.JSX.Element {
    const [ dmgInputValue, setDmgInputValue ] = useState<number | "">("")

    const hasAbilitySection = monster.specialAbilities || monster.nastierSpecials
    const staggeredClass = monster.isStaggered ? "staggered" : ""


    function removeMonsterCard() {
        const newSelectedMonsters = [...selectedMonsters.slice(0, index), ...selectedMonsters.slice(index + 1)]

        setSelectedMonsters(newSelectedMonsters)    
    }

    function handleMookNumber(event: React.ChangeEvent<HTMLInputElement>) {
        const currentMonsterObj = {...selectedMonsters[index]}
        
        if (event.currentTarget.value) {
            currentMonsterObj.mookNumber = parseInt(event.currentTarget.value)
            currentMonsterObj.health = currentMonsterObj.hp * currentMonsterObj.mookNumber

            const newSelectedMonsters = [...selectedMonsters.slice(0, index), currentMonsterObj, ...selectedMonsters.slice(index + 1)]

            setSelectedMonsters(newSelectedMonsters)
        }
    }

    function updateDamageInput(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget.value) {
            setDmgInputValue(parseInt(event.currentTarget.value))
        } else (
            setDmgInputValue("")
        )
    }

    function handleDamage() {
        if (dmgInputValue) {
            const currentMonsterObj = {...selectedMonsters[index]}
            currentMonsterObj.health = currentMonsterObj.health - dmgInputValue

            if (currentMonsterObj.health <= currentMonsterObj.hp / 2) {
                currentMonsterObj.isStaggered = true
            } else (
                currentMonsterObj.isStaggered = false
            )

            if (currentMonsterObj.role === "mook") {
                currentMonsterObj.mookNumber = Math.ceil(currentMonsterObj.health / currentMonsterObj.hp)
            }

            const newSelectedMonsters = [...selectedMonsters.slice(0, index), currentMonsterObj, ...selectedMonsters.slice(index + 1)]

            setSelectedMonsters(newSelectedMonsters)
            setDmgInputValue("")
        }
    }

    return (
        <div 
            className="monster-card"
            id={`monster-card${index}`}
            data-cardindex={index}
        >
            <div className="card-header card-sctn">
                <h3>{monster.name}</h3>
                <Button
                    onClick={removeMonsterCard}
                    style="delete-card-btn"
                    color="none"
                >
                    <CircleX 
                        size={25}
                        color="ghostwhite"
                    />
                </Button>
            </div>

            <div className="card-subheader card-sctn card-sctn-light">
                <p>{`Level ${monster.level} ${monster.sizeOrStrength} ${monster.role} [${monster.type}]`}</p>
                <p>{`Initiative: ${monster.initiative}`}</p>
            </div>

            <div className="defense-sctn card-sctn card-sctn-dark">
                <ul className="defense-list">
                    <li>{`AC: ${monster.ac}`}</li>
                    <li>{`PD: ${monster.pd}`}</li>
                    <li>{`MD: ${monster.md}`}</li>
                </ul>
                <div className="health-container">
                    <p>{`Total HP: ${monster.hp}`}</p>
                    <p><span
                        className={staggeredClass}
                        id={`accent${index}`}
                    >{`Current HP: ${monster.health}`}</span></p>
                </div>
            </div>

            <div className="dmg-sctn card-sctn card-sctn-light">
                <div className="dmg-input-container">
                    <label
                        htmlFor={`dmg${index}`}
                    >Damage</label>
                    <input 
                        type="number"
                        step="1"
                        id={`dmg${index}`}
                        name={`dmg${index}`}
                        className="dmg-input"
                        value={dmgInputValue}
                        onChange={updateDamageInput}
                    />
                </div>
                <div className="dmg-btn-container">
                    <Button
                        onClick={handleDamage}
                        style="standard-btn"
                        color="secondary"
                    >Deal Damage</Button>
                </div>
            </div>

            
            <AttackSection 
                monster={monster}
            />
            

            {
                hasAbilitySection && 
                <AbilitySection 
                    monster={monster}
                />
            }         

            {
                monster.role === "mook" &&
                <div className="mook-container card-sctn card-sctn-dark">
                    <label htmlFor="mooks${index}">Enter number of mooks</label>
                    <input 
                        type="number" 
                        step="1" 
                        className="mooks-input" 
                        id={`mooks${index}`}
                        name={`mooks${index}`}
                        onChange={handleMookNumber}
                    />
                    <p id={`mookstatus${index}`}>Number of Mooks: {monster.mookNumber}</p>
                </div>
            }
           
        </div>
    )
}