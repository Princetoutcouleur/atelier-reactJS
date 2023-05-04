import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/bakeli.png";

const Inscription = () => {
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
            <div className="d-flex justify-content-between">
              <FloatingLabel
                controlId="floatingName"
                label="Name"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Baba Thiam" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingNumber"
                label="Number"
                className="mb-3"
              >
                <Form.Control type="tel" placeholder="77 101 05 02" />
              </FloatingLabel>
            </div>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <div className="d-flex justify-content-between">
              <FloatingLabel
                controlId="floatingPassword"
                label="Password"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingConfirm"
                label="Confirmation"
                className="mb-3"
              >
                <Form.Control type="password" placeholder="Confirm password" />
              </FloatingLabel>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <Link className="btn btn-success w-50">Register</Link>
            </div>
            <div>
              <p>
                Vous avez déjà un compte?
                <Link to="/">Se connecter</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inscription
