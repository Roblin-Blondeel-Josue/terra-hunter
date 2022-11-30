import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ThemeProvider from "./theme";
import NavBar from "./components/NavBar";
import HomePage from "./pages/homePage";
import InfosPage from "./pages/InfoPage";
import ZodiacsPage from "./pages/zodiacPage";
import SignalPage from "./pages/signalPage";

function App() {
  return (
    <ThemeProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infos" element={<InfosPage />} />
        <Route path="/zodiacs" element={<ZodiacsPage />} />
        <Route path="/signal" element={<SignalPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
