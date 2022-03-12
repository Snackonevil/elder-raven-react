import { useContext } from "react";
import WindowWidthContext from "../context/WindowWidthContext";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";

function About() {
    const deviceType = useContext(WindowWidthContext);

    return (
        <>
            {deviceType === "mobile" || deviceType === "tablet" ? (
                <MobileNavbar />
            ) : (
                <Navbar />
            )}
            <h1>About</h1>
            <h1>{deviceType}</h1>
        </>
    );
}

export default About;
