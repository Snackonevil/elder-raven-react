import { useState, useEffect, useContext } from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Work from "../components/Work";

function Home() {
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
            {navbarState ? <Navbar /> : ""}
            <Jumbotron navbarState={navbarState} />
            <Carousel />
            <Work />
        </>
    );
}

export default Home;
