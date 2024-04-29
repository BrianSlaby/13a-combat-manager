import React, { useState, useRef, useEffect } from "react"
import "./modal.css"
import { modalProps } from "../../types"
import Button from "../button/Button"

export default function Modal({ 
    children, 
    isOpen, 
    closeModal 

}: modalProps): React.JSX.Element {
    const [ isModalOpen, setIsModalOpen ] = useState(isOpen)
    const modalRef = useRef(null)

    function handleCloseModal() {
        if (closeModal) {
            closeModal()
        }
        setIsModalOpen(false)
    }

    function handleKeydown(event: React.KeyboardEvent<HTMLDialogElement>) {
        if (event.key === "Escape") {
            handleCloseModal()
        }
    }

    useEffect(() => {
        setIsModalOpen(isOpen)
    }, [isOpen])

    useEffect(() => {
        if (modalRef.current) {
            const modalEl: HTMLDialogElement = modalRef.current
            if (isModalOpen) {
                modalEl.showModal()
            } else {
                modalEl.close()
            }
        }

    }, [isModalOpen])

    return (
        <dialog
            onKeyDown={handleKeydown}
            ref={modalRef}
        >
            <div className="top-banner">
                <Button
                    onClick={handleCloseModal}
                    style="delete-card-btn"
                    color="secondary"
                >
                    X
                </Button>
            </div>

            { children }

        </dialog>
    )
}