import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Navbar from './components/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='grid'>
        <Card contact="111-222-3333" />
        <Card contact="111-222-3333" />
        <Card contact="111-222-3333" />
      </div>
    </>
  )
}

export default App
