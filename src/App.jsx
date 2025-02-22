import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log('loged in')
        navigate('/')
      }else{
        console.log('loged out')
        navigate('/login')
      }
    })
  },[])

  return (
    <>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/player/:id' element={<Player />}/>
      </Routes>
    </>
  )
}

export default App
