import React from "react"
import "./button.css"
import { buttonProps } from "../../types"

export default function Button({ 
    onClick, 
    children, 
    style="standard-btn",
    color
}: buttonProps): React.JSX.Element {
    
    const buttonClasses = `${style} ${color}`

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
        >{children}</button>
    )
}