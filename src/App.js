import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext, createContext } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

export const WindowWidthContext = createContext();

function App() {
    const [deviceType, setDeviceType] = useState();

    const handleWidth = () => {
        window.innerWidth <= 600
            ? setDeviceType("mobile")
            : window.innerWidth > 600 && window.innerWidth <= 1200
            ? setDeviceType("tablet")
            : setDeviceType("desktop");
    };

    useEffect(() => {
        window.addEventListener("resize", handleWidth);
    }, []);

    return (
        <>
            <WindowWidthContext.Provider value={deviceType}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </Router>
            </WindowWidthContext.Provider>
        </>
    );
}

export default App;
