import React from "react";
import { Routes, Route } from "react-router-dom";
import Associate from "./components/Associate";
import Home from "./components/Home";
import Specialization from "./components/Specialization";
import AssociateProvider from "./context/associateContext";
import SpecProvider from "./context/spec";

const App = () => {
  return (
    <div>
      <SpecProvider>
        <AssociateProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specialization" element={<Specialization />} />
            <Route path="/associate" element={<Associate />} />
          </Routes>
        </AssociateProvider>
      </SpecProvider>
    </div>
  );
};

export default App;
