import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//MaterialUI
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/materialUIOverrides";
import { StyledEngineProvider } from "@mui/material/styles";
//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
//Views
import { Step1, Step2, Step3 } from "./views";
//Global Layout
import { Layout } from "./components/passwordManager/Layout";
//React-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Layout>
              <Router>
                <Routes>
                  <Route path="/" element={<Step1 />} />
                  <Route path="/create_password" element={<Step2 />} />
                  <Route path="/feedback" element={<Step3 />} />
                </Routes>
              </Router>
            </Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </Provider>
  );
};
