import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Work from "../components/Work";

function Home({ navbarState }) {
    return (
        <>
            <Jumbotron navbarState={navbarState} />
            <Carousel />
            <Work />
        </>
    );
}

export default Home;
