import React from "react";
import ReactDOM from "react-dom";
import styles from './Portal.module.scss';

const Portal = () => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(< div className={styles.wrapper} />, document.getElementById("portal"))}
        </React.Fragment>
    )
}

export default Portal