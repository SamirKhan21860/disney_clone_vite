// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './Components/Login'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>Disney+ Clone</h2>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
