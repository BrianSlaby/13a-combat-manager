import React, { useState } from 'react'
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { monsterStatBlock } from "./types"
import { 
  resetArrayState
} from './utils/utilFunctions'



export default function App(): React.JSX.Element {
  const [ isSelectMonstersModalOpen, setIsSelectMonstersModalOpen ] = useState<boolean> (false)

  const [ selectedMonsters, setSelectedMonsters ] = useState<monsterStatBlock[]>([])

  // add state variable for 1st vs 2nd edition

  function handleChooseMonstersClick() {
    setIsSelectMonstersModalOpen(true)
  }

  return (
    <>
      <Header 
        handleChooseMonstersClick={handleChooseMonstersClick}
        handleClearMonstersClick={() => resetArrayState(setSelectedMonsters)}
      />
      <Home 
        isSelectMonstersModalOpen={isSelectMonstersModalOpen} 
        setIsSelectMonstersModalOpen={setIsSelectMonstersModalOpen}
        selectedMonsters={selectedMonsters}   
        setSelectedMonsters={setSelectedMonsters}
      />
      <Footer />
    </>
  )
}

