import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Track from "./pages/Track";
import Home from "./pages/Home";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign up" element={<Signup />} />

          <Route path="/track" element={<Track />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
