import React, { useState } from "react"
import { monsterStatBlock } from "../types"
import "./home.css"

export default function Home(): React.JSX.Element {
    const [ selectedMonsters, setSelectedMonsters ] = useState<monsterStatBlock[]>([])

    return (
      <div className="home-container">

        <p>content</p>
       
      </div>
    )
}