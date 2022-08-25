import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from './Custom.module.css';
import cx from 'classnames';
import Button from './components/Button';
import DropdownMenu from './components/DropdownMenu';

function App() {
  const [count, setCount] = useState(0)

  const [isRed, setIsRed] = useState(false)

  const handleButtonClick = () => {
    setIsRed(prev => !prev);
  }

  const [currentValue, setCurrentValue] = useState('üres');

  const options = [
    'red',
    'blue',
    'yellow'
  ];

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card blue">
        <button onClick={handleButtonClick}>
          count is {count}
        </button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p className={cx(styles.blue, {
          [styles.red]: isRed
        })} style={{fontSize: '40px'}}>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button onClick={handleButtonClick}>Change color</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button title="Ez egy gomb" disabled />

      <DropdownMenu options={options} currentValue={currentValue} changeValue={setCurrentValue} />
    </div>
  )
}

export default App
