import React, { useState } from "react"
import { homeProps } from "../types"
import SelectMonstersModal from "../components/modal/SelectMonstersModal"
import MonsterCard from "../components/card/MonsterCard"
import "./home.css"

export default function Home({ 
    isSelectMonstersModalOpen, 
    setIsSelectMonstersModalOpen,
    selectedMonsters,
    setSelectedMonsters

}: homeProps): React.JSX.Element {
    

    return (
      <div className="home-container">

        {
            selectedMonsters.length === 0 ? 
            <p 
                className="intro-message" 
            >You don't have any monsters selected.  To build a combat encounter, click "choose monsters" in the header, select the desired monster levels, and then select a monster from the dropdown.</p> : ""
        }
        <div className="cards-container">
            {
                selectedMonsters.map((monster, index) => {
                    return (
                        <MonsterCard 
                            monster={monster}
                            index={index}
                            selectedMonsters={selectedMonsters}
                            setSelectedMonsters={setSelectedMonsters}
                            key={index}
                        />
                    )
                })
            }
        </div>
        


        <SelectMonstersModal 
            isOpen={isSelectMonstersModalOpen}
            closeModal={() => setIsSelectMonstersModalOpen(false)}
            setSelectedMonsters={setSelectedMonsters}
        />
       
      </div>
    )
}