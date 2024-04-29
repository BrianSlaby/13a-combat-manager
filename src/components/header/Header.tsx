import React from "react"
import "./header.css"
import { headerProps } from "../../types"
import Button from "../button/Button"

export default function Header({ 
    handleChooseMonstersClick, 
    handleClearMonstersClick 
}: headerProps): React.JSX.Element {

   

    return (
        <>
            <header>
                <h1>13th Age Combat Manager</h1>

                <div>
                    <Button 
                        onClick={handleChooseMonstersClick}
                        style="standard-btn"
                        color="main"
                    >Choose Monsters</Button>

                    <Button
                        onClick={handleClearMonstersClick}
                        style="standard-btn"
                        color="ghost"
                    >Clear Monsters</Button>
                </div>
            </header>
        </>
    )
}