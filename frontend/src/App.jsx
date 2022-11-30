import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ThemeProvider from "./theme";
import HomePage from "./pages/homePage";
import InfosPage from "./pages/InfoPage";
import ZodiacsPage from "./pages/zodiacPage";
import SignalPage from "./pages/signalPage";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/infos" element={<InfosPage />} />
        <Route path="/zodiacs" element={<ZodiacsPage />} />
        <Route path="/signal" element={<SignalPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
