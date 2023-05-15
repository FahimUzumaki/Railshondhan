import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Track from "./pages/Track";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import Location from "./pages/Location";
import Help from "./pages/Help";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign up" element={<Signup />} />

          <Route path="/track" element={<Track />} />
          <Route path="/location" element={<Location />} />
          <Route path="/get" element={<Services />} />
          <Route path="/service" element={<Service />} />

          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
