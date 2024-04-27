import React from "react"
import "./header.css"
import Button from "../button/Button"

export default function Header(): React.JSX.Element {

    // PLACEHOLDER FUNCTION
    function handleClick() {
        console.log("button clicked!")
    }

    return (
        <>
            <header>
                <h1>13th Age Combat Manager</h1>

                <div>
                    <Button 
                        onClick={handleClick}
                        style="standard-btn"
                        color="main"
                    >Choose Monsters</Button>

                    <Button
                        onClick={handleClick}
                        style="standard-btn"
                        color="ghost"
                    >Clear Monsters</Button>
                </div>
            </header>
        </>
    )
}