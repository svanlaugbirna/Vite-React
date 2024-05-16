import { useRecoilState } from 'recoil';
import { recoilCount } from './state';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ComponentOne() {
  const [count, setCount] = useRecoilState(recoilCount)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
      <p>I am from Component One</p>
      </div>
      
    </>
  )
}

export default ComponentOne
