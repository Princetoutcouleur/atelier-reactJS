import React from 'react'
import "./Sidebar.css"
import home from "../../Assets/images/icones/home.png";
import like from "../../Assets/images/icones/like.png";
import search from "../../Assets/images/icones/search.png";
import playlist from "../../Assets/images/icones/create-playlist.png";
import library from "../../Assets/images/icones/library.png";
// import langage from "../../Assets/images/icones/langage.png";
const Sidebar = () => {
  return (
    <div className="side text-light p-3">
      <ul className="list-unstyled">
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
          <img className="img-fluid side-icone me-3" src={playlist} alt="" />
          Create your playlist
        </li>
        <li className="mb-5">
          <img className="img-fluid side-icone me-3" src={like} alt="" />
          Like songs
        </li>
        {/* <li className="mt-auto">
          <img className="img-fluid side-icone me-3" src={langage} alt="" />
          langage
        </li> */}
      </ul>
    </div>
  );
}

export default Sidebar
