import React, { useState, useRef } from 'react'
import Child from './Child'

function Parent() {
    const childRef = useRef()
    console.log(childRef)
    console.log(childRef.current)

    const HandleOnclick = () => {
        childRef.current.changeUsername()
        childRef.current.changePassword()
    }
    return (
        <div>
            <button type="text" onClick={HandleOnclick} value="button"> CLEAR! </button>
            <br/>
            <Child ref={childRef} />
        </div>
    )
}

export default Parent
