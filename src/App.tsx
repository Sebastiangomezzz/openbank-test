import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//MaterialUI
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/materialUIOverrides";
import { StyledEngineProvider } from "@mui/material/styles";
//Redux
import { Provider } from "react-redux";
import { store } from "./store";
//Views
import { Step1, Step2, Step3OK, Step3KO } from "./views";
//Global Layout
import { Layout } from "./components/passwordManager/Layout";

export const App = () => {
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
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
      </StyledEngineProvider>
    </Provider>
  );
};
