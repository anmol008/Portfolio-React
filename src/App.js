import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { Home } from './Components/Home'
import { Header } from './Common-Comp/Header'
import {Footer} from './Common-Comp/Footer'
import { Certificate } from './Components/Certificate'

  const App = () => {
  

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/certificate' element={<Certificate/>}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}



export default App;
