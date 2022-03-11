import React from "react";

function Work() {
    return (
        <section className="project-section">
            <div id="project-1" className="project inactive-project">
                <div className="project-carousel">
                    <div className="project-carousel-track">
                        <img
                            className="picture current-slide"
                            src="./public/img/carousel-test1.jpg"
                            alt=""
                        />

                        <img
                            className="picture"
                            src="./public/img/carousel-test2.jpg"
                            alt=""
                        />

                        <img
                            className="picture"
                            src="./public/img/carousel-test3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="project-carousel-btns hidden">
                        <button className="project-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="project-right">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="overlay">
                    <div className="project-name">
                        <h1>PROJECT NAME</h1>
                        <h1>SECOND LINE</h1>
                    </div>
                    <p className="project-description hidden">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A quo corporis voluptatem officia nostrum illo
                        inventore similique dolorum, cupiditate sed quos
                        asperiores minima quas! Beatae dolor odit obcaecati
                        mollitia corporis. Iste, amet accusantium in doloremque
                        assumenda natus omnis molestias enim?
                    </p>
                </div>
            </div>
            <div id="project-2" className="project inactive-project">
                <div className="project-carousel">
                    <div className="project-carousel-track">
                        <img
                            className="picture current-slide"
                            src="./public/img/carousel-test2.jpg"
                            alt=""
                        />

                        <img
                            className="picture"
                            src="./public/img/carousel-test1.jpg"
                            alt=""
                        />

                        <img
                            className="picture"
                            src="./public/img/carousel-test3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="project-carousel-btns hidden">
                        <button className="project-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="project-right">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="overlay">
                    <div className="project-name">
                        <h1>PROJECT NAME</h1>
                        <h1>SECOND LINE</h1>
                    </div>
                    <p className="project-description hidden">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A quo corporis voluptatem officia nostrum illo
                        inventore similique dolorum, cupiditate sed quos
                        asperiores minima quas! Beatae dolor odit obcaecati
                        mollitia corporis. Iste, amet accusantium in doloremque
                        assumenda natus omnis molestias enim?
                    </p>
                </div>
            </div>
            <div id="project-3" className="project inactive-project">
                <div className="project-carousel">
                    <div className="project-carousel-track">
                        <img
                            className="picture current-slide"
                            src="./public/img/carousel-test3.jpg"
                            alt=""
                        />

                        <img
                            className="picture"
                            src="./public/img/carousel-test1.jpg"
                            alt=""
                        />

                        <img
                            className="picture"
                            src="./public/img/carousel-test2.jpg"
                            alt=""
                        />
                    </div>
                    <div className="project-carousel-btns hidden">
                        <button className="project-left">
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="project-right">
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
                <div className="overlay">
                    <div className="project-name">
                        <h1>PROJECT NAME</h1>
                        <h1>SECOND LINE</h1>
                    </div>
                    <p className="project-description hidden">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A quo corporis voluptatem officia nostrum illo
                        inventore similique dolorum, cupiditate sed quos
                        asperiores minima quas! Beatae dolor odit obcaecati
                        mollitia corporis. Iste, amet accusantium in doloremque
                        assumenda natus omnis molestias enim?
                    </p>
                </div>
            </div>
            <div id="project-4" className="project inactive-project">
                <div className="project-carousel">
                    <div className="project-carousel-track">
                        <div className="picture"></div>
                    </div>
                </div>
                <div className="overlay">
                    <div className="project-name">
                        <h1>PROJECT NAME</h1>
                        <h1>SECOND LINE</h1>
                    </div>
                    <p className="project-description hidden">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. A quo corporis voluptatem officia nostrum illo
                        inventore similique dolorum, cupiditate sed quos
                        asperiores minima quas! Beatae dolor odit obcaecati
                        mollitia corporis. Iste, amet accusantium in doloremque
                        assumenda natus omnis molestias enim?
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Work;
