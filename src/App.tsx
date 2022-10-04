import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//MaterialUI
import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/materialUIOverrides";
import { StyledEngineProvider } from "@mui/material/styles";
//Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
//Global Layout
import { Layout } from "./components/common/Layout";
//Components
import { Header } from "./components/passwordManager/Header";
//React-query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//Views-passwordManager
import { PasswordManager } from "./views/passwordManager/PasswordManager";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <Layout header={<Header />}>
              <Router>
                <Routes>
                  <Route path="*" element={<PasswordManager />} />
                </Routes>
              </Router>
            </Layout>
          </ThemeProvider>
        </StyledEngineProvider>
      </QueryClientProvider>
    </Provider>
  );
};
