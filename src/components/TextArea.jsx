import { Form } from "react-bootstrap";
import React, { useState } from "react";

function TextArea(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleCapClick = () => {
    const newText = text
      .split(" ")
      .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
      .join(" ");
    setText(newText);
  };
  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  const [text, setText] = useState("Enter Your Text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <Form.Group controlId="exampleForm.ControlTextarea">
          <Form.Control
            onChange={handleChange}
            as="textarea"
            value={text}
            rows={8}
          />
        </Form.Group>
        <button onClick={handleUpClick} className="btn btn-dark my-3">
          UPPERCASE
        </button>
        <button onClick={handleCapClick} className="btn btn-success mx-3 my-3">
          Capitalize
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-3 my-3">
          lowercase
        </button>
      </div>
    </>
  );
}

export default TextArea;
