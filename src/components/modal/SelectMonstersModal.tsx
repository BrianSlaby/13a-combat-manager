import React, { useState } from "react"
import { modalProps, monsterStatBlock } from "../../types"
import Modal from "./Modal"
import { monsterData } from "../../data/monsterData"
import "./modal.css"

type selectMonstersModalProps = modalProps & {
    setSelectedMonsters: React.Dispatch<React.SetStateAction<monsterStatBlock[]>>
}


export default function SelectMonstersModal({ 
    isOpen, 
    closeModal, 
    setSelectedMonsters 

}: selectMonstersModalProps): React.JSX.Element {
    
    const [ selectedMonsterLevels, setSelectedMonsterLevels ] = useState<number[]>([])

    const levels: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    
    const filteredMonsterData = handleFilterByLevel(monsterData)

    function handleCheckboxChange(level: number) {
        setSelectedMonsterLevels(prevLevels => {
            if (prevLevels.includes(level)) {
                return prevLevels.filter(l => l !== level)
            } else {
                return [...prevLevels, level]
            }
        })
    }

    function handleMonsterSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedMonsterObj: monsterStatBlock = filteredMonsterData.filter(monster => monster.name === event.target.value)[0]

        if (selectedMonsterObj) {
            setSelectedMonsters( prevMonsters => {
                return [ ...prevMonsters, selectedMonsterObj ]
            })
            event.target.value = ""
        }
    }

    function handleFilterByLevel(data: monsterStatBlock[]) {
      return data.filter(monster => {
        return selectedMonsterLevels.includes(monster.level)
      }).sort((a, b) => (a.name > b.name) ? 1 : -1)
    }

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <div className="select-monsters-modal-content">
                <div id="level-check-container">
                    {
                        levels.map(level => {
                            return (
                                <div 
                                    className="checkbox-container"
                                    key={level}
                                >
                                    <label
                                        htmlFor={`level-${level}`}
                                        className="level-check-label"
                                    >
                                        {level}
                                    </label>

                                    <input 
                                        type="checkbox"
                                        id={`level-${level}`}
                                        name={`level-${level}`}
                                        data-level={level}
                                        className="level-check"
                                        checked={selectedMonsterLevels.includes(level)}
                                        onChange={() => handleCheckboxChange(level)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>

                <div id="dropdown-container">
                    <label htmlFor="monsters-dropdown">Select Monsters</label>
                    <select 
                        id="monsters-dropdown" 
                        name="monsters-dropdown"
                        onChange={handleMonsterSelect}
                    >
                        <option value="">Please Select a Monster</option>
                        {
                            filteredMonsterData.map(monster => {
                                return (
                                    <option
                                        value={monster.name}
                                        key={monster.id}
                                    >
                                        {`${monster.name}, level ${monster.level} ${monster.sizeOrStrength} ${monster.role}`}
                                    </option>
                                )
                            })
                          
                        }
                    </select>
                </div>

            </div>

        </Modal>
    )
}