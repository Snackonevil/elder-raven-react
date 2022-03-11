function CarouselSlide({ projectImage }) {
    return (
        <div className="carousel-slide">
            <img src={projectImage} alt="project-image" />
        </div>
    );
}

export default CarouselSlide;
