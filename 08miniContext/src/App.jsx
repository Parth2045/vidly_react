import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  // UserContextProvider wrapped components now has access of all the variables which are in the context provider
  return (
    <UserContextProvider> 
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
