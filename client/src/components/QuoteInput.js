import React, { useState, useCallback } from "react";
import { TextField } from "@shopify/polaris";

const QuoteInput = () => {
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleTextFieldChange = useCallback(
    (value) => setTextFieldValue(value),
    []
  );
  return (
    <TextField
      placeholder="Quote"
      value={textFieldValue}
      onChange={handleTextFieldChange}
      maxLength={100}
      autoComplete="off"
      showCharacterCount
    />
  );
};

export default QuoteInput;
