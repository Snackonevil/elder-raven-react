import { useState } from "react";
import CarouselBillboard from "./CarouselBillboard";
import CarouselSlide from "./CarouselSlide";
import ProjectImages from "../images/projects/index";

function Carousel() {
    const [activeIndex, setSlideIndex] = useState(0);

    const nextSlide = () => {
        activeIndex === ProjectImages.length - 1
            ? setSlideIndex(0)
            : setSlideIndex(activeIndex + 1);
    };
    const prevSlide = () => {
        activeIndex === 0
            ? setSlideIndex(ProjectImages.length - 1)
            : setSlideIndex(activeIndex - 1);
    };

    return (
        <section className="carousel">
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{
                        transform: `translateX(-${
                            (100 / ProjectImages.length) * activeIndex
                        }%)`,
                    }}
                >
                    {ProjectImages.map((image, index) => {
                        return (
                            <CarouselSlide key={index} projectImage={image} />
                        );
                    })}
                </div>
            </div>
            <CarouselBillboard nextSlide={nextSlide} prevSlide={prevSlide} />
        </section>
    );
}

export default Carousel;
