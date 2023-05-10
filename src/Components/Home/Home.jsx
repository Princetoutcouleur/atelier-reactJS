import React from 'react'
import logo from "../../Assets/images/bakeli.png";
import "./Home.css"

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 mt-5">
          <center>
            <img src={logo} alt="" />
          </center>
        </div>
        <div className="col-12">
          <h1 className="mx-auto mt-3">
            Bienvenue vous êtes connecté dans le plateforme de Bakeli !
          </h1>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Home
