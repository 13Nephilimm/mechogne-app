import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/AboutUs/About";
import Leaderboard from "./pages/Leaderboard/Leaderboard";
import Players from "./pages/Players/Players";
import Contact from "./pages/ContactUs/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/leaderboard" element={<Leaderboard />}></Route>
          <Route path="/players" element={<Players />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
