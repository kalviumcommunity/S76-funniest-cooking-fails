import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import FunniestCookingFails from '../src/pages/landingpage.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
         <Routes>
             <Route path="/" element={<FunniestCookingFails/>}/>
         </Routes>
      </BrowserRouter>
      {/* <FunniestCookingFails/> */}
      {/* <h1 className='text-red-500'>App</h1> */}
    </>
  )
}

export default App
