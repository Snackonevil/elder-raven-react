import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WindowWidthProvider } from "./context/WindowWidthContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <>
            <WindowWidthProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <Footer />
                </Router>
            </WindowWidthProvider>
        </>
    );
}

export default App;
