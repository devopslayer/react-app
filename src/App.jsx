import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const curYear = new Date().getFullYear();

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React App</h1>
      <div className="card">
        <h2>Procedure to deploy any React Application in <a href="https://github.com" target="_blank">GitHub</a></h2>
        <p>
          <strong>Step 1</strong> - Create React Application
          <code>npm create vite@latest</code>
          or with any method you are aware with.
        </p>

        <p>
          <strong>Step 2</strong> - Run React Application
          <code>npm run dev</code>
          just to make sure it's working in the browser.
        </p>

      </div>
      <p className="read-the-docs">
        Copyright &copy; {curYear}. All rights reserved. <a href='https://github.com/devopslayer/' target='_blank'>@Devopslayer</a>
      </p>
    </>
  )
}

export default App
