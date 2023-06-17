import "./App.css";
import { Routes, Route } from "react-router";

import { Home, Navbar, Search } from "./pages/index";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
