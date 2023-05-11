import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/bakeli.png";
import Input from "../Input/Input";

const Inscription = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <center>
            <img src={logo} alt="" />
          </center>
        </div>
        <div className="col-lg-12 w-75 mx-auto">
          <form>
            <div className="d-flex gap-2">
              <Input type="text" placeholder="Baba Thiam" label="Name" />
              <Input type="tel" placeholder="77 777 77 77" label="Phone" />
            </div>
            <Input
              type="email"
              placeholder="babathiam@gmail.com"
              label="Email adresse"
            />
            <div className="d-flex gap-2">
              <Input type="password" placeholder="******" label="Password" />
              <Input type="password" placeholder="******" label="Confirm" />
            </div>
            <div className="d-flex justify-content-center mb-3">
              <Link className="btn btn-success w-50">Register</Link>
            </div>
            <div>
              <p>
                Vous avez déjà un compte? <br />
                <Link to="/">Se connecter</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
