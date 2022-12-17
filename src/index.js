import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Whatsthehapps from "./Components/Whatsthehapps";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Components/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/whatsthehapps" element={<Whatsthehapps />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
