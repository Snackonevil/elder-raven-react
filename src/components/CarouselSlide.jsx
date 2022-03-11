function CarouselSlide({ projectImage }) {
    return (
        <div className="carousel-slide current-slide">
            <img src={projectImage} alt="project" />
        </div>
    );
}

export default CarouselSlide;
