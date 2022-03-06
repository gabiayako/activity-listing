// import React from "react";
import ReactDOM from "react-dom";
import App from "./src/App";

import * as React from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

// function App() {
//   // 2. Wrap ChakraProvider at the root of your app
//   return (
//     )
//   }

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
