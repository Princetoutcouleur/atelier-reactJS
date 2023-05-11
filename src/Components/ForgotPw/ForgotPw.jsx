import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/bakeli.png";
import "./ForgotPw.css";
import Input from "../Input/Input";

const ForgotPw = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mx-auto">
          <center>
            <img src={logo} alt="" />
          </center>
        </div>
        <div className="col-12">
          <div className="contenu d-flex justify-content-center align-items-center">
            <div>
              <h6 className="mb-3 text-center">
                Saisir votre addresse email pour reinitialiser votre mot de
                passe.
              </h6>
              <Input type="password" placeholder="******" label="Password" />
              <Link to="" className="btn btn-success w-100 fw-bold mb-5">
                Réinitialiser
              </Link>
              <div>
                <p>
                  Vous vous souvenez de votre mot de passe? <br />
                  <Link to="/">Se connecter</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPw;
