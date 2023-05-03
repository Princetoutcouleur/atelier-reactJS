import './index.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Connexion from './Components/Connexion/Connexion'
import Inscription from './Components/Inscription/Inscription'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/connexion' element={<Connexion/>}/>
        <Route path='/register' element={<Inscription/>}/>
      </Routes>
    </div>
  );
}

export default App;
