import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';


function App() {

  const [open, setopen] = useState(false);

  function ChangeOpenNav() {
    setopen(true);
  }

  useEffect(()=>{

  },[open])

  return (
    <div className='w-full h-screen'>
      <Navbar
       Open={open}
       Changeopennav={ChangeOpenNav}
      />
    </div>
  )
}

export default App;
