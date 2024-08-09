import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: "P",
    age: 25,
    address: {
      city: 'VL',
      state: 'GJ',
      country: 'IN'
    }
  };
  let newArr = [1,2,3,4];

  return (
    <>
      <Header />
      <h1 className='text-3xl bg-green-500 p-3 rounded-md' >Vite with Tailwind</h1>
      <Card username="P" myArr={newArr} />
      <Card username="Q" post='Staffed' userimage="https://images.pexels.com/photos/569292/pexels-photo-569292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Card post='Staffed - 2' myObj={myObj} />
      <Footer />
    </>
  )
}

export default App
