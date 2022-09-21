import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Step1, Step2, Step3OK, Step3KO } from "./views";
import { Layout } from "./components/common/Layout";
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/materialUIOverrides";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Step1 />} />
            <Route path="/create_password" element={<Step2 />} />
            <Route path="/feedback_OK" element={<Step3OK />} />
            <Route path="/feedback_KO" element={<Step3KO />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
};
