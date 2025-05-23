import { Container } from "react-bootstrap";
import "./App.css";
import Homepage from "./components/Homepage";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  const [citySelected, setCitySelected] = useState("");

  return (
    <BrowserRouter>
      <TopBar />
      <Container>
        <Routes>
          <Route path="/" element={<Homepage changeState={setCitySelected} />} />
          <Route path="/details" element={<Details query={citySelected} />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
