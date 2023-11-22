import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./font.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Aeronautique } from './pages/Aeronautique'
import { Marine } from './pages/Marine'
import { Automobile } from './pages/Automobile'
import { Partenaire } from './pages/Partenaire'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/aeronautique' element={<Aeronautique />}/>
           <Route path='/marine' element={<Marine />}/>
           <Route path='/automobile' element={<Automobile />}/>
           <Route path='/partner' element={<Partenaire />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
