import React, { useState } from "react"
import { monsterStatBlock } from "../types"
import "./home.css"

export default function Home(): React.JSX.Element {
    const [ selectedMonsters, setSelectedMonsters ] = useState<monsterStatBlock[]>([])

    return (
      <div className="home-container">

        {
            selectedMonsters.length === 0 ? 
            <p 
                className="intro-message" 
            >You don't have any monsters selected.  To build a combat encounter, click "choose monsters" in the header, select the desired monster levels, and then select a monster from the dropdown.</p> : ""
        }
       
      </div>
    )
}