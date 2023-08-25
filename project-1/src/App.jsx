import { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation/Navigation'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Formfooter from './components/Formfooter/Formfooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <ContactHeader/>
      <Formfooter/>
    </>
  )
}

export default App
