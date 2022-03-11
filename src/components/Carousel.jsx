import { useState } from "react";
import CarouselBillboard from "./CarouselBillboard";
import CarouselSlide from "./CarouselSlide";
import ProjectImages from "../images/showcase/index";

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
                        width: `${100 * ProjectImages.length}%`,
                    }}
                >
                    {ProjectImages.map((image, index) => {
                        return (
                            <CarouselSlide key={index} projectImage={image} />
                        );
                    })}
                </div>
            </div>
            <CarouselBillboard
                activeIndex={activeIndex}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                setSlideIndex={setSlideIndex}
            />
        </section>
    );
}

export default Carousel;
