import React from 'react'
import Appbar from './components/Appbar';
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Appbar/>
      
      <Outlet />
    </>
  )
}

export default App
