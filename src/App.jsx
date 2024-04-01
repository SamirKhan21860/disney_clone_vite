// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2>Disney+ Clone</h2>
      <Router>
        <Routes exact path="/">
          <Route>
            <Login />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
