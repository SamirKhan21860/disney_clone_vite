import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import "./App.css";
import Header from "./Components/Header/Header";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" Component={Login} />
          <Route exact path="/" Component={Header} />
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
