import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Chef from './components/Chef/Chef'
import Food from './components/Food/Food'
import Latest from './components/Latest/Latest'
import Footer from './Shared/Footer/Footer'

function App() {
  return (
    <>
      <Banner></Banner>
      <Chef></Chef>
      <Food></Food>
      <Latest></Latest>
    </>
  )
}

export default App
