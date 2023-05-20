import "./index.css";
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
// import Home from './Components/Home/Home'
// import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
// import Connexion from './Components/Connexion/Connexion'
// import Inscription from './Components/Inscription/Inscription'
// import ForgotPw from './Components/ForgotPw/ForgotPw'
import "bootstrap/dist/css/bootstrap.min.css";
// import { Routes, Route} from 'react-router-dom';
import Sidebar from "./Components/Sidebar/Sidebar";
import Fead from "./Components/Fead/Fead";

function App() {
  return (
    <div className="App bg-dark d-flex text-white">
      <Sidebar />
      <div>
        <NavBar />
        <Fead />
      </div>
      {/* <Routes>
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/register" element={<Inscription />} />
        <Route path="/forgotPw" element={<ForgotPw />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </div>
  );
}

export default App;
