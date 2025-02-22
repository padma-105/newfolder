
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/navbar'
import React from 'react'
import Home from './pages/home'
import Events from './pages/events'
import DashBoard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Footer from './components/footer/footer'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

function App() {


  return (
    <>
     <Provider store ={store}>
     <Navbar/>
     <Routes>
      <Route path= "/" element = {<Home/>}/>
      <Route path= "/events" element = {<Events/>}/>
      <Route path= "/dashboard" element = {<DashBoard/>}/>
      <Route path= "/login" element = {<Login/>}/>
      <Route path= "/register" element = {<Register/>}/>
      
     </Routes>
     </Provider>
     <Footer/>
    </>
  )
}

export default App
