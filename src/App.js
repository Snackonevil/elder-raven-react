import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const [navbarState, setNavbarState] = useState(false);
    const handleScroll = () => {
        window.pageYOffset >= window.innerHeight
            ? setNavbarState(true)
            : setNavbarState(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <Router>
                {navbarState ? <Navbar /> : ""}
                <Routes>
                    <Route
                        path="/"
                        element={<Home navbarState={navbarState} />}
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
