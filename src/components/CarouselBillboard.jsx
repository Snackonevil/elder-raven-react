import products from "../images/showcase/index";
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
                    onClick={() => prevSlide()}
                >
                    <FaCaretLeft />
                </button>
                <div className="carousel-nav">
                    {products.map((item, index) => {
                        return (
                            <button
                                onClick={() => setSlideIndex(index)}
                                key={`indicator-${index}`}
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
                    onClick={() => nextSlide()}
                >
                    <FaCaretRight />
                </button>
            </div>
            <h4 className="latest-product">LATEST product:</h4>
            <div className="latest-product-content">
                <div className="latest-product-header">
                    <h2>PRODUCT NAME</h2>
                    <h2>SECOND LINE</h2>
                </div>
                <div className="latest-product-description">
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
