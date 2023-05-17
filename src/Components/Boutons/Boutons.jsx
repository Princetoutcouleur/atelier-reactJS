import React from "react";
import "./Boutons.css";
import Button from "react-bootstrap/Button";

// const Boutons = ({ text, onClick }) => {
//   return (
//     <Button variant="success" onClick={onClick}>
//       {text}
//     </Button>
//   );
// };
const Boutons = (props) => {
   return (
     <div>
       <Button variant="success">
         {props.children}
       </Button>
     </div>
   );
};

export default Boutons;
