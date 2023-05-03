import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route, } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/home" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
