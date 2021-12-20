import React from 'react'
import useStyles from './JSS.style'

function JSS() {
    const classes = useStyles()

    return (
        <div>
            <div className={classes.square} />
        </div>
    )
}

export default JSS
