import React from 'react'
import styles from './Abutton.module.scss'
import { useNavigate } from 'react-router-dom'

function AButton({to, setIsLoggedIn, value = 'Button'}) {

    const navigate = useNavigate();

    const handleOnClick = () => {
        setIsLoggedIn(true)
        navigate(to)
    }

    return (
        <button type='submit' onClick={handleOnClick} className={styles.button}>{value}</button>
    )
}

export default AButton
