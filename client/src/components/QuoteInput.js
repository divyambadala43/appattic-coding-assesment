import React, { useState, useCallback } from "react";
import { TextField } from "@shopify/polaris";

const QuoteInput = () => {
  const [quote, setQuote] = useState("");

  const handleQuoteChange = useCallback(
    (value) => setQuote(value),
    []
  );
  return (
    <TextField
      placeholder="Quote"
      value={quote}
      onChange={handleQuoteChange}
      maxLength={100}
      autoComplete="off"
      showCharacterCount
    />
  );
};

export default QuoteInput;
