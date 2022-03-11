function CarouselSlide({ projectImage }) {
    return (
        <div className="carousel-slide">
            <img src={projectImage} alt="project" />
        </div>
    );
}

export default CarouselSlide;
