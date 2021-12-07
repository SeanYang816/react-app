import React from 'react';
import styles from './Card.module.scss'

const Card = ({children}) => {
    return (
        <div className={styles.card}>
            {children}
        </div>
    );
}
const Header = ({children}) => {
    return (
        <div className={styles.header}>
            {children}
        </div>
    );
}
const Body = ({children}) => {
    return (
        <div className={styles.body}>
            {children}
        </div>
    );
}
const Footer = ({children}) => {
    return (
        <div className={styles.footer}>
            {children}
        </div>
    );
}

Card.Header = Header
Card.Body = Body
Card.Footer = Footer

export default Card;
