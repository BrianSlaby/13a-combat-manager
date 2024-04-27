import React, { useState } from 'react'
import { monsterStatBlock } from "../src/types"



export default function App(): React.JSX.Element {
  const [ selectedMonsters, setSelectedMonsters ] = useState<monsterStatBlock[]>([])

  // Should App check for edition and render a separate homepage depending on edition state?  Obviously selectedMonsters would get moved to edition pages, and app would contain currentEdition state.

  return (
    <>
      <h1>Placeholder</h1>
    </>
  )
}

