import React from "react";
import ReactDOM from "react-dom/client";
import App from "./widgets/List";
import { ChakraProvider } from "@chakra-ui/react";

const appendWIdget = () => {
  console.log("window is loaded, initiating sapp widget");
  const root = ReactDOM.createRoot(document.getElementById("sapp-widget-root"));
  root.render(
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
};

let isWindowLoaded = false;

window.addEventListener("DOMContentLoaded", function () {
  isWindowLoaded = true;
  appendWIdget();
});

window.onload = function () {
  if (!isWindowLoaded) {
    isWindowLoaded = true;
    appendWIdget();
  }
};
