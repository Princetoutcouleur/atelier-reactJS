import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/bakeli.png";
import "./Connexion.css";
import Input from "../Input/Input";

const Connexion = () => {
  function handleClick() {
    alert("Bienvenue cher utilusateur!");
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-12">
          <center>
            <img src={logo} alt="" />
          </center>
        </div>
        <div className="col-lg-12 d-flex justify-content-center align-items-center">
          <form>
            <Input
              type="email"
              placeholder="babathiam@gmail.com"
              label="Email adresse"
            />
            <Input type="password" placeholder="******" label="Password" />
            <div className="mb-3">
              <Link to="/forgotpw" className="text-secondary">
                Mot de passe oublié
              </Link>
            </div>
            <div className="mb-3">
              <Link
                to="/home"
                onClick={handleClick}
                className="btn btn-success w-100 fw-bold"
              >
                Connexion
              </Link>
            </div>
            <p>
              Vous avez pas encore de compte?
              <Link to="/register">S'inscrire</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
