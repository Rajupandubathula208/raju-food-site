import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";

createRoot(document.getElementById('root')).render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,

);