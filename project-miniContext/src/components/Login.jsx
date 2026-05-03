import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})

    }

    return (
        <div onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
            <h2 className="text-xl font-semibold text-center">Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='Username' />
            {"   "}
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
            {"   "}
            <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 transition p-2 rounded font-semibold">
                Submit
            </button>
        </div>
    )
}

export default Login
