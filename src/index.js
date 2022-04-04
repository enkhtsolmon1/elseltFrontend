import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProgramStore } from "./Context/ProgramContext";
import { ElseltStore } from "./Context/ElseltContext";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={4000}
      >
        <ElseltStore>
          <ProgramStore>
            <App />
          </ProgramStore>
        </ElseltStore>
      </SnackbarProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
