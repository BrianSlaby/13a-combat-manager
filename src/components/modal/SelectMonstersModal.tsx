import React from "react"
import { modalProps } from "../../types"
import Modal from "./Modal"
import "./modal.css"


export default function SelectMonstersModal({ isOpen, closeModal }: modalProps): React.JSX.Element {

    return (
        <Modal
            isOpen={isOpen}
            closeModal={closeModal}
        >
            <div className="select-monsters-modal-content">
                <div id="level-check-container">
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-zero" 
                            className="level-check-label"
                        >0</label>
                        <input 
                            type="checkbox" 
                            id="level-zero" 
                            name="level-zero" 
                            data-level="0" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-one" 
                            className="level-check-label"
                        >1</label>
                        <input 
                            type="checkbox" 
                            id="level-one" 
                            name="level-one" 
                            data-level="1" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label htmlFor="level-two" className="level-check-label">2</label>
                        <input type="checkbox" id="level-two" name="level-two" data-level="2" className="level-check"/> 
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-three" 
                            className="level-check-label"
                        >3</label>
                        <input 
                            type="checkbox" 
                            id="level-three" 
                            name="level-three" 
                            data-level="3" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-four" 
                            className="level-check-label"
                        >4</label>
                        <input 
                            type="checkbox" 
                            id="level-four" 
                            name="level-four" 
                            data-level="4" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-five" 
                            className="level-check-label"
                        >5</label>
                        <input 
                            type="checkbox" 
                            id="level-five" 
                            name="level-five" 
                            data-level="5" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-six" 
                            className="level-check-label"
                        >6</label>
                        <input 
                            type="checkbox" 
                            id="level-six" 
                            name="level-six" 
                            data-level="6" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-seven" 
                            className="level-check-label"
                        >7</label>
                        <input 
                            type="checkbox" 
                            id="level-seven" 
                            name="level-seven" 
                            data-level="7" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-eight" 
                            className="level-check-label"
                        >8</label>
                        <input 
                            type="checkbox" 
                            id="level-eight" 
                            name="level-eight" 
                            data-level="8" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-nine" 
                            className="level-check-label"
                        >9</label>
                        <input 
                            type="checkbox" 
                            id="level-nine" 
                            name="level-nine" 
                            data-level="9" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-ten" 
                            className="level-check-label"
                        >10</label>
                        <input 
                            type="checkbox" 
                            id="level-ten" 
                            name="level-ten" 
                            data-level="10" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-eleven" 
                            className="level-check-label"
                        >11</label>
                        <input 
                            type="checkbox" 
                            id="level-eleven" 
                            name="level-eleven" 
                            data-level="11" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-twelve" 
                            className="level-check-label"
                        >12</label>
                        <input 
                            type="checkbox" 
                            id="level-twelve" 
                            name="level-twelve" 
                            data-level="12" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-thirteen" 
                            className="level-check-label"
                        >13</label>
                        <input 
                            type="checkbox" 
                            id="level-thirteen" 
                            name="level-thirteen" 
                            data-level="13" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-fourteen" 
                            className="level-check-label"
                        >14</label>
                        <input 
                            type="checkbox" 
                            id="level-fourteen" 
                            name="level-fourteen" 
                            data-level="14" 
                            className="level-check"
                        />
                    </div>
                    <div className="checkbox-container">
                        <label 
                            htmlFor="level-fifteen" 
                            className="level-check-label"
                        >15</label>
                        <input 
                            type="checkbox" 
                            id="level-fifteen" 
                            name="level-fifteen" 
                            data-level="15" 
                            className="level-check"
                        />
                    </div>

                </div>

                <div id="dropdown-container">
                    <label htmlFor="monsters-dropdown">Select Monsters</label>
                    <select id="monsters-dropdown" name="monsters-dropdown">

                    </select>
                </div>

            </div>

        </Modal>
    )
}