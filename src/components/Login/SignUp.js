import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMember } from 'reducers/member'

function SignUp() {
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(addMember([{ username: username, password: password }]))
        setUsername('')
        setPassword('')
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label htmlFor="username">username</label>
                <br />
                <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} autoComplete />
                <br />
                <label htmlFor="password" >password</label>
                <br />
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
