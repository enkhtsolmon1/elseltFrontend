import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProgramStore } from "./Context/ProgramContext";
import { ElseltStore } from "./Context/ElseltContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ElseltStore>
        <ProgramStore>
          <App />
        </ProgramStore>
      </ElseltStore>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
