import React, { useState } from 'react'
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { 
  //handleChooseMonstersClick, 
  handleClearMonstersClick 

} from './utils/modalFunctions'



export default function App(): React.JSX.Element {
  const [ isSelectMonstersModalOpen, setIsSelectMonstersModalOpen ] = useState<boolean> (false)
  // add state variable for 1st vs 2nd edition

  function handleChooseMonstersClick() {
    setIsSelectMonstersModalOpen(true)
  }

  return (
    <>
      <Header 
        handleChooseMonstersClick={handleChooseMonstersClick}
        handleClearMonstersClick={handleClearMonstersClick}
      />
      <Home 
        isSelectMonstersModalOpen={isSelectMonstersModalOpen} 
        setIsSelectMonstersModalOpen={setIsSelectMonstersModalOpen}     
      />
      <Footer />
    </>
  )
}

