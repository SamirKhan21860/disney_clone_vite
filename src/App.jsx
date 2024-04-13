import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import "./App.css";
import Header from "./Components/Header/Header";
import Detail from "./Components/Detail/Detail";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={Login} />
          <Route exact path="/home" Component={Home} />
          <Route path="/detail/:id" Component={Detail} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
