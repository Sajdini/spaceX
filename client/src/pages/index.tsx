import React from "react";
//react router
import { Routes, Route } from "react-router-dom";
//pages
import Launch from "./Launch";
import Launches from "./Launches";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Launches />} />
      <Route path="/flight:id" element={<Launch />} />
    </Routes>
  );
};

export default Pages;
