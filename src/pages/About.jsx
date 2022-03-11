import { useContext } from "react";
import { WindowWidthContext } from "../App";
import Navbar from "../components/Navbar";

function About() {
    const deviceType = useContext(WindowWidthContext);

    return (
        <>
            {deviceType === "tablet" ? <Navbar /> : ""}
            <h1>{deviceType}</h1>
        </>
    );
}

export default About;
