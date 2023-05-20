import { useState } from "react";
import "./Sidebar.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../Assets/images/poster/logo.png";
import logovert from "../../Assets/images/poster/logovert.jpg";
import home from "../../Assets/images/icones/home.png";
import like from "../../Assets/images/icones/like.png";
import search from "../../Assets/images/icones/search.png";
import playlist from "../../Assets/images/icones/create-playlist.png";
import library from "../../Assets/images/icones/library.png";
import langage from "../../Assets/images/icones/langage.png";
import { Link } from "react-router-dom";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant=""
        className="d-lg-none bg-black text-light fw-bold mb-auto"
        onClick={handleShow}
      >
        <img src={logovert} alt="" className="logovert" />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="sidebar bg-black"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h1 className="text-light">Menu</h1>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-light d-block pt-3 pe-5 ps-3 100vh sticky-top">
          <div>
            <img src={logo} alt="" className="mb-3" />
          </div>
          <ul className="sidebar-menu list-unstyled">
            <li>
              <img className="img-fluid side-icone me-3" src={home} alt="" />
              Home
            </li>
            <li>
              <img className="img-fluid side-icone me-3" src={search} alt="" />
              Search
            </li>
            <li className="mb-5">
              <img className="img-fluid side-icone me-3" src={library} alt="" />
              Library
            </li>
            <li>
              <img
                className="img-fluid side-icone me-3"
                src={playlist}
                alt=""
              />
              New playlist
            </li>
            <li className="mb-5">
              <img className="img-fluid side-icone me-3" src={like} alt="" />
              Like songs
            </li>
          </ul>
          <div className="lien-rapides">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Legal
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Privacy Center
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Privacy Policy
                </a>
              </li>
            </ul>

            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Cookies
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#">
                  Ads
                </a>
              </li>
            </ul>
            <div className="my-5">
              <Link className="btn btn-dark rounded-pill">
                <img src={langage} alt="" /> English
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
