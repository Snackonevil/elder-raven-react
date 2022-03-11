function CarouselSlide({ key, projectImage }) {
    return (
        <div className="carousel-slide">
            <img src={projectImage} alt={`project-${key}`} />
        </div>
    );
}

export default CarouselSlide;
