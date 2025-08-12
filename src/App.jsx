import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // Import Bootstrap J
import 'bootstrap-icons/font/bootstrap-icons.css' // Import Bootstrap Icons
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Navigate to="/login" />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
  )
}

export default App
