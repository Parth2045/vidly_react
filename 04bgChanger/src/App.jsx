import { useState } from 'react'
import './App.css'

function App() {
    //  Variable, Function/Method      DefaultValue
  const [bgcolor, setBgcolor] = useState("olive");

  // This is the another way, not preferable as multiple function call
  const changeBgColor = (color) => {
    setBgcolor(color);
  };

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: bgcolor}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { setBgcolor("red") }}
          style={{backgroundColor: 'red'}}
        >Red
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { setBgcolor("blue") }}
          style={{backgroundColor: 'blue', color: 'white'}}  
        >Blue
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { setBgcolor("black") }}
          style={{backgroundColor: 'black', color: 'white'}}
          >Black
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { changeBgColor("yellow") }}
          style={{backgroundColor: 'yellow'}}
          >Yellow
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { setBgcolor("green") }}
          style={{backgroundColor: 'green'}}
          >Green
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { changeBgColor("white") }}
          style={{backgroundColor: 'white'}}
          >White
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { setBgcolor("olive") }}
          style={{backgroundColor: 'olive'}}
          >Olive
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { setBgcolor("pink") }}
          style={{backgroundColor: 'pink'}}
          >Pink
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { changeBgColor("skyblue") }}
          style={{backgroundColor: 'skyblue'}}
          >Skyblue
        </button>
        <button 
          className='outline-none px-4 py-1 rounded-full shadow-lg text-black' 
          onClick={() => { setBgcolor("orange") }}
          style={{backgroundColor: 'orange'}}
          >Orange
        </button>
        </div>
      </div>
    </div>
  )
}

export default App
