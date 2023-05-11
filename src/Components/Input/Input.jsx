import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const Input = ({type, placeholder, label}) => {
  return (
    <div>
      <FloatingLabel
        controlId="floatingLabel"
        className="mb-3"
        type={type}
        label={label}
        placeholder={placeholder}
        >
        <Form.Control type="" placeholder="" />
      </FloatingLabel>
    </div>
  );
}

export default Input
