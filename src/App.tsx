import React, { useState } from 'react'
import Home from "./pages/Home"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"



export default function App(): React.JSX.Element {
  // add state variable for 1st vs 2nd edition

  

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

