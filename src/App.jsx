import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRouter from './router/AppRouter'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <AppRouter />
      <Toaster position='top-center' reverseOrder={false}/>
    </>
  )
}

export default App
