import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/bakeli.png";

const Connexion = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <center>
            <img src={logo} alt="" />
          </center>
        </div>
        <div className="col-lg-12 w-50 mx-auto">
          <form>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Password"
              className="mb-3"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <div className="d-flex justify-content-between mb-5">
              <Link to="/forgotpw">Mot de passe oublié</Link>
              <Link to="/connexion" className="btn btn-success">
                Connexion
              </Link>
            </div>
            <hr />
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
