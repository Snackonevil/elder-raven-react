import CarouselBillboard from "./CarouselBillboard";
import CarouselSlide from "./CarouselSlide";
import ProjectImages from "../images/projects/index";

function Carousel() {
    return (
        <section className="carousel">
            <div className="carousel-container">
                <div className="carousel-track">
                    <CarouselSlide projectImage={ProjectImages[0]} />
                    <div className="carousel-slide">
                        <img src="./public/img/carousel-test2.jpg" alt="" />
                    </div>
                    <div className="carousel-slide">
                        <img src="./public/img/carousel-test3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <CarouselBillboard />
        </section>
    );
}

export default Carousel;
