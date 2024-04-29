import React from "react"
import { modalProps } from "../../types"
import Modal from "./Modal"


export default function SelectMonstersModal({ isOpen, closeModal }: modalProps): React.JSX.Element {

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <div>
                <p>Monster Select Modal Content Placeholder</p>
            </div>

        </Modal>
    )
}