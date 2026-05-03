import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContext from './Context/UserContext'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      

        <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-xl p-8">
      

          <h1 className="text-3xl font-bold text-center mb-6">
            React with Shreya
          </h1>
          <Login />
          <Profile />
        
        </div>

      </div>
    </UserContext.Provider>
  )
}

export default App
