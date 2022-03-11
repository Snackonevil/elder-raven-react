function Carousel() {
    return (
        <section className="carousel">
            <div className="carousel-container">
                <div className="carousel-track">
                    <div className="carousel-slide current-slide">
                        <img src="./public/img/carousel-test1.jpg" alt="" />
                    </div>
                    <div className="carousel-slide">
                        <img src="./public/img/carousel-test2.jpg" alt="" />
                    </div>
                    <div className="carousel-slide">
                        <img src="./public/img/carousel-test3.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div className="billboard-container">
                <div className="nav-container">
                    <button className="carousel-nav-left">
                        <i className="fa-solid fa-caret-left"></i>
                    </button>
                    <div className="carousel-nav">
                        <button className="nav-indicator current-indicator"></button>
                        <button className="nav-indicator"></button>
                        <button className="nav-indicator"></button>
                    </div>
                    <button className="carousel-nav-right">
                        <i className="fa-solid fa-caret-right"></i>
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
                            elit. Totam qui et quas velit commodi cum ullam
                            iure, sapiente sunt explicabo iusto! Recusandae
                            doloribus, quod eius ea nihil consequuntur rerum
                            porro!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Carousel;
