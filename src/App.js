import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./pages/Navbar"
import Footer from "./pages/Footer"
import DiscordWidget from "./pages/DiscordWidget"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/discord" element={<DiscordWidget />} exact />
          </Routes>
        </BrowserRouter>
      </header>

      <Footer />
    </div>
  );
}

export default App;
