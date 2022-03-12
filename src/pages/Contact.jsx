import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import { useContext } from "react";
import WindowWidthContext from "../context/WindowWidthContext";

function Contact() {
    const deviceType = useContext(WindowWidthContext);

    return (
        <>
            {deviceType === "mobile" || deviceType === "tablet" ? (
                <MobileNavbar />
            ) : (
                <Navbar />
            )}
            <h1>Contact</h1>
        </>
    );
}

export default Contact;
