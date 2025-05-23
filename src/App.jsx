import { Container } from "react-bootstrap";
import "./App.css";
import Homepage from "./components/Homepage";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import { useState } from "react";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="central">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:query" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
