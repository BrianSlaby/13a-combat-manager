import React from "react"

function resetArrayState(stateSetter: React.Dispatch<React.SetStateAction<any[]>>) {
    stateSetter([])
}

export {
    resetArrayState
}