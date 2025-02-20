
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import React from 'react'
import Foryou from './pages/foryou'
import Events from './pages/events'
import Dining from './pages/dining'
import Login from './pages/login'
import Register from './pages/register'
import Footer from './components/footer/footer'

function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path= "/for-you" element = {<Foryou/>}/>
      <Route path= "/events" element = {<Events/>}/>
      <Route path= "/dining" element = {<Dining/>}/>
      <Route path= "/login" element = {<Login/>}/>
      <Route path= "/register" element = {<Register/>}/>
      
     </Routes>
     <Footer/>
    </>
  )
}

export default App
