import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext, createContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

export const DeviceWidth = createContext();

function App() {
    const [deviceType, setDeviceType] = useState();

    const handleWidth = () => {
        window.innerWidth <= 600
            ? console.log("mobile")
            : window.innerWidth > 600 && window.innerWidth <= 1000
            ? console.log("tablet")
            : console.log("Desktop");
    };

    useEffect(() => {
        window.addEventListener("resize", handleWidth);
    }, []);

    return (
        <>
            <DeviceWidth.Provider value={deviceType}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </Router>
            </DeviceWidth.Provider>
        </>
    );
}

export default App;
