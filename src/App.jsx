import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import ColorButton from './colorbutton'
import './colorbutton.css'

function App() {
  const [count, setCount] = useState(0)
 const name = 'Liz';
  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>My Color Button</h1>
      <ColorButton />
    </div>
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Greeting name={name} />

        <a href="https://goexperiance.com" target="_blank">
          <img src="https://goexperiencecloud.com/wp-content/uploads/2021/10/go_experience_logo_vertical.png12" alt="GoIP logo" />
        </a>

    </>
  )
}

export default App
