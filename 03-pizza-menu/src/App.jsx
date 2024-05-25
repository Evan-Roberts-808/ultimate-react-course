import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/header'
import Menu from './components/menu'
import Footer from './components/footer'

function App() {

  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

export default App
