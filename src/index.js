import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StateProvider } from "./context/StateProvider";

import "./styles/index.scss";

//fonts
import "./fonts/Roboto-Bold.ttf";
import "./fonts/Roboto-Regular.ttf";
import "./fonts/Roboto-Light.ttf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>
);
