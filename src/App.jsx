import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/about/Intro'
import Boxinfo from './components/about/Boxinfo'
import BlackFriday from './components/about/BlackFriday'
import MidPart from './components/about/MidPart'
import From from './components/about/From'
import Header from './components/about/Header'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Header></Header>
      <Intro></Intro>
      <Boxinfo></Boxinfo>
      <BlackFriday></BlackFriday> 
      <MidPart></MidPart>
      <From></From>
    </>
  )
}

export default App
