import React, { useState } from 'react';
import './modal.css'

function Modal(props) {

    const [modal, setModal] = useState(false)

    function toggleModal(){
        setModal(!modal)
    }

    return (
        <>
        <div className="modal">
            <div className="overlay" onClick={()=>{props.closeModal()}}></div>
            <div className="modalContent">
                <p>{props.data.name}</p>
                <img src="" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi autem nulla saepe provident ipsa?</p>
                <h1>{props.data.date}</h1>
                <h2>{props.data.price}</h2>
                <div className='buttonDiv'>
                    <button
                    className="colseButton"
                    onClick={()=>{props.closeModal()}}

                    >x</button>
                    <button
                    className='printButton'
                    onClick={()=>{props.message(`${props.data.name} - ${props.data.price} receipt printed succesfully`, 'success')}}
                    >print</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Modal;