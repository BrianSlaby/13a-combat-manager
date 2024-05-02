import React from "react"
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
    const hasAbilitySection = monster.specialAbilities || monster.nastierSpecials


    function removeMonsterCard(event: React.MouseEvent<HTMLButtonElement>) {
        if (event.currentTarget.dataset.cardindex) {
            const cardIndex = parseInt(event.currentTarget.dataset.cardindex)

            const newSelectedMonsters = [...selectedMonsters.slice(0, cardIndex), ...selectedMonsters.slice(cardIndex + 1)]

            setSelectedMonsters(newSelectedMonsters)
        }        
    }

    function handleMookNumber(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.currentTarget.dataset.mookinput) {
            const cardIndex = parseInt(event.currentTarget.dataset.mookinput)
            const currentMonsterObj = {...selectedMonsters[cardIndex]}

            if (event.currentTarget.value) {
                currentMonsterObj.mookNumber = parseInt(event.currentTarget.value)
                currentMonsterObj.health = currentMonsterObj.hp * currentMonsterObj.mookNumber

                const newSelectedMonsters = [...selectedMonsters.slice(0, cardIndex), currentMonsterObj, ...selectedMonsters.slice(cardIndex + 1)]

                setSelectedMonsters(newSelectedMonsters)
            }
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
                    dataset="cardindex"
                    datasetValue={index}
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
                        className={`ADD checkStaggeredClass(index) HERE!!!!`}
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
                        data-dmginput={index}
                    />
                </div>
                <div className="dmg-btn-container">
                    <Button
                        onClick={() => console.log(EventTarget)}
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
                        data-mookinput={index} 
                        onChange={handleMookNumber}
                    />
                    <p id={`mookstatus${index}`}>Number of Mooks: {monster.mookNumber}</p>
                </div>
            }
           
        </div>
    )
}