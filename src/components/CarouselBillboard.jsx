import projects from "../images/showcase/index";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

function CarouselBillboard({
    activeIndex,
    setSlideIndex,
    prevSlide,
    nextSlide,
}) {
    return (
        <div className="billboard-container">
            <div className="nav-container">
                <button
                    className="carousel-nav-left"
                    onClick={e => prevSlide()}
                >
                    <FaCaretLeft />
                </button>
                <div className="carousel-nav">
                    {projects.map((item, index) => {
                        return (
                            <button
                                onClick={() => setSlideIndex(index)}
                                key={index}
                                className={`nav-indicator ${
                                    activeIndex === index
                                        ? "current-indicator"
                                        : ""
                                }`}
                            ></button>
                        );
                    })}
                </div>
                <button
                    className="carousel-nav-right"
                    onClick={e => nextSlide()}
                >
                    <FaCaretRight />
                </button>
            </div>
            <h4 className="latest-project">LATEST PROJECT:</h4>
            <div className="latest-project-content">
                <div className="latest-project-header">
                    <h2>PROJECT NAME</h2>
                    <h2>SECOND LINE</h2>
                </div>
                <div className="latest-project-description">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Totam qui et quas velit commodi cum ullam iure,
                        sapiente sunt explicabo iusto! Recusandae doloribus,
                        quod eius ea nihil consequuntur rerum porro!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CarouselBillboard;
