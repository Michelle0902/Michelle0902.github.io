import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterText from './components/CounterText'
import ProductList from './components/productsList'

function App() {
  const [count, setCount] = useState(0)
  const handleClickIn = () => {
    setCount(pre=>pre+1);
  }

  const handleClickDe = () => {
    setCount(pre=>pre-1);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClickIn}>
          +1
        </button>
        <CounterText count = {count}></CounterText>
        <button onClick={handleClickDe}>
          -1
        </button>
        <ProductList></ProductList>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
