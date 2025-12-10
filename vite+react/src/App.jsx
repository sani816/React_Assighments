import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponent from './FirstComponent.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <FirstComponent/>
     </div>
  )
}

export default App
