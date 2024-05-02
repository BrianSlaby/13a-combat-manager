import React from "react"
import "./button.css"
import { buttonProps } from "../../types"

export default function Button({ 
    onClick, 
    children, 
    style="standard-btn",
    color,
    dataset,
    datasetValue
}: buttonProps): React.JSX.Element {
    
    const buttonClasses = `${style} ${color}`
    const datasetAttribute = dataset ? `data-${dataset}` : ""

    return (
        <button
            onClick={onClick}
            className={buttonClasses}
            {...(datasetAttribute && {[datasetAttribute]: datasetValue})}
        >{children}</button>
    )
}