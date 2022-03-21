import React from "react";
import "./App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import ColorPickerComponent from "./components/ColorPickerComponent";
import QuoteInput from "./components/QuoteInput";

const App = () => {
  return (
    <>
      <AppProvider i18n={enTranslations}>
        <div className="inputContainer">
          <QuoteInput />
        </div>
        <div className="colorPickerContainer">
          <ColorPickerComponent />
        </div>
      </AppProvider>
    </>
  );
};

export default App;
