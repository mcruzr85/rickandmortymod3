import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store.js";
//import "./index.css";

 //el Provider le permite a toda la App conocer sobre la existencia del store



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>   
      <Router>        
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
