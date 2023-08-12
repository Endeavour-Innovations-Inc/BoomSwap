import React from "react";
import ReactDOMClient from "react-dom/client";
import { Home } from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Trade } from "./screens/Trade/Trade";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trade" element={<Trade />} />
    </Routes>
  </Router>
);