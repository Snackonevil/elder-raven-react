import LogoImage from "../images/logos/background-logo.png";
import Video from "../test-video.mp4";

function Jumbotron() {
    return (
        <>
            <video autoPlay muted loop id="background-vid">
                <source src={Video} type="video/mp4" alt="video" />
            </video>
            <section className="jumbotron">
                <img className="logo" src={LogoImage} alt="logo-background" />
            </section>
        </>
    );
}

export default Jumbotron;
