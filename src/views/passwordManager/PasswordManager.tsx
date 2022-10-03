import React from "react";
import { Routes, Route } from "react-router-dom";
import { Step1 } from "./Step1/Step1";
import { Step2 } from "./Step2/Step2";
import { Step3 } from "./Step3/Step3";
import { Error404 } from "../Error404";
export const PasswordManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Step1 />} />
      <Route path="/create_password" element={<Step2 />} />
      <Route path="/feedback" element={<Step3 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
