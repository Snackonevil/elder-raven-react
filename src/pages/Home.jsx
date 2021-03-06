import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Work from "../components/Work";
import WindowWidthContext from "../context/WindowWidthContext";
import { motion, AnimatePresence } from "framer-motion";

function Home() {
    const deviceWidth = useContext(WindowWidthContext);
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
            {navbarState &&
            deviceWidth !== "mobile" &&
            deviceWidth !== "tablet" ? (
                <Navbar />
            ) : deviceWidth === "mobile" || deviceWidth === "tablet" ? (
                <MobileNavbar />
            ) : (
                ""
            )}
            <Jumbotron navbarState={navbarState} />
            <Carousel />
            <Work />
        </>
    );
}

export default Home;
