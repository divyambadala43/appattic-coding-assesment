import React, { useState, useCallback } from "react";
import { TextField, ColorPicker, Button } from "@shopify/polaris";
import Axios from "axios";
import "./Form.css";

const Form = () => {
  const [quote, setQuote] = useState("");
  const handleQuoteChange = useCallback((value) => setQuote(value), []);

  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const quote = e.target.quote.value;
    const colorPicked = color;

    Axios.post("http://localhost:5000/post", {
      quote,
      colorPicked,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => [console.log(error)]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputContainer">
        <TextField
          name="quote"
          placeholder="Quote"
          value={quote}
          onChange={handleQuoteChange}
          maxLength={100}
          autoComplete="off"
          showCharacterCount
        />
      </div>
      <div className="colorPickerContainer">
        <ColorPicker onChange={setColor} color={color} allowAlpha />
      </div>
      <div className="submitButton">
        <Button>Submit</Button>
      </div>
    </form>
  );
};

export default Form;
