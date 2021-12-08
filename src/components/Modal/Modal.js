import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

const Modal = ({show}) => {

    // useEffect(() => {
    //     let timer = setTimeout(() => setShow(false), 3000);
    //     return () => {
    //         clearTimeout(timer);
    //     };
    // }, [])

    return (
        <React.Fragment>
            {ReactDOM.createPortal(
            show && < div className={styles.wrapper}><div className={styles.content}>Pinned</div></div>
            
            , document.getElementById("portal"))}
        </React.Fragment>
    )
}

export default Modal;
