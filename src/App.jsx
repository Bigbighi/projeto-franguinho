import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header/header'
import Home from './Pages/Home/home'
import Login from './Pages/login/login'
import About from './Pages/about/about'
import {useEffect, useState} from 'react'
import { FaCaretDown } from 'react-icons/fa'

function App() {

  const [cartNumber, setCartNumber] = useState (0)


  function Number (number) {
    setCartNumber(number)
  }

  const [user, setUser] = useState ('')

  function User (name) {
    setUser(name)
  }

  console.log(user)


  return (
    <>
      <Router>
        <Header 
         cartNumber={cartNumber}
         user={user}/>

        <Routes>
        <Route  path='/' element={<Home Number={Number} />}/>
        <Route path='/login' element={<Login User={User}/>}/>
        <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
