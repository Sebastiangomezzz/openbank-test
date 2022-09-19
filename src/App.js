import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OpenbankLogo from "./assets/img/key_openbank.png";
import { Step1, Step2, Step3 } from "./views";
import { Layout } from "./components/common";

import "./App.scss";

export const App = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/create_password" element={<Step2 />} />
          <Route path="/feedback" element={<Step3 />} />
        </Routes>
      </Router>
    </Layout>
  );
};
