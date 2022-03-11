import { useContext } from "react";
import { DeviceWidth } from "../App";
import Navbar from "../components/Navbar";

function About() {
    const test = useContext(DeviceWidth);

    return (
        <>
            <Navbar />
            <h1>{test}</h1>
        </>
    );
}

export default About;
