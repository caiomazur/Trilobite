import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import FanArts from "./pages/FanArts";
import Games from "./pages/Games";
import NavBar from "./components/NavBar";
import Learn from "./pages/Learn";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fan-arts" element={<FanArts />} />
          <Route path="/games" element={<Games />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
