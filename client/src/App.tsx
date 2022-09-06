import React from "react";
// react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Pages from "./pages/";

function App() {
  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
