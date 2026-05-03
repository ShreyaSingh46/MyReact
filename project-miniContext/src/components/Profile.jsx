import React, {useContext} from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user)
        return <p className="text-center text-gray-400">Please Login</p>

    return (
        <div className="text-center mt-4">
            <p className="text-green-400 font-medium">
                Welcome {user.username}
            </p>
        </div>
    )
}

export default Profile