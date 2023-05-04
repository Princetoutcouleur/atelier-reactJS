import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/bakeli.png";

const ForgotPw = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mx-auto">
          <center>
            <img src={logo} alt="" />
          </center>
        </div>
        <div className="col-12 w-50 mx-auto">
          <h6 className="mb-3 text-center">
            Saisir votre addresse email pour reinitialiser votre mot de passe.
          </h6>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <Link to="" className="btn btn-success w-100 fw-bold mb-5">
            Réinitialiser
          </Link>
          <div>
            <p>
              Vous vous souvenez de votre mot de passe?
              <Link to="/">Se connecter</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPw
