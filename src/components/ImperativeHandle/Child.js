import React from 'react'
import { useState, useRef, useImperativeHandle, forwardRef } from 'react'

const Child = forwardRef((props, ref) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    useImperativeHandle(ref, () => ({
        changeUsername(){setUsername('')},
        changePassword(){setPassword('')},
    }))
    return (
        <>
        <label htmlFor="username">username</label>
        <input ref={usernameRef} type="text" id="username" name="username" value={username} onChange={handleUsernameChange}/>
        <label htmlFor="password">password</label>
        <input ref={passwordRef} type="text" id="password" name="password" value={password} onChange={handlePasswordChange}/>
        <button>submit</button>
        </>
    )
});

export default Child
