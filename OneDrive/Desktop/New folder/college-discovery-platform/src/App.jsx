import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CollegeDetail from "./pages/CollegeDetail";
import Compare from "./pages/Compare";
import Predictor from "./pages/Predictor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/college/:id" element={<CollegeDetail />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/predictor" element={<Predictor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;