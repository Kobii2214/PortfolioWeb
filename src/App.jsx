import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navigation from './components/nav'
import './style/nav.css'

import Hero from './components/hero'
import './style/hero.css'

import About from './components/about_me'
import './style/about_me.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navigation/>
    <Hero/>
    <About/>
    </>
  )
}

export default App
