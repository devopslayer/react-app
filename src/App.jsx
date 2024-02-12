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
        <div className='card-body'>
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

          <p>
            <strong>Step 3</strong> - Add these to Package.json
            <ul>
              <li>
                <code>"homepage": "https://YourUserName.github.io/RepositoryName"</code>
                <span>Add it before project name.</span>
              </li>

              <li>
                <code>"predeploy": "npm run build",</code>
                <code>"deploy": "gh-pages -d dist",</code>
                <span>Add it before "scripts".</span>
              </li>

              <li>
                <code>npm install gh-pages --save-dev</code>
                <span>Install this to publish and deploy your app to GitHub Pages</span>
              </li>
            </ul>
          </p>

          <p>
            <strong>Step 4</strong> - After Pushing React Application to GitHub Repository
            <code>npm run deploy</code>
            to publish and deploy Application in GitHub Pages.
          </p>

          <p>
            <strong>Step 5</strong> - After Deploying React Application to GitHub, Refresh the page and navigate to the settings page. There you'll get the Link for your application or directly go to the Link you've given in the package.json - homepage.
          </p>
        </div>

      </div>
      <p className="read-the-docs">
        Copyright &copy; {curYear}. All rights reserved. <a href='https://github.com/devopslayer/' target='_blank'>@Devopslayer</a>
      </p>
    </>
  )
}

export default App
