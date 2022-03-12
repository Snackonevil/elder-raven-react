import React from "react";

function Product({ product }) {
    let toggle = false;
    const toggleProject = target => {
        toggle = !toggle;
        console.log(toggle);
    };
    return (
        <div id="project-1" className="project inactive-project">
            <div className="project-carousel">
                <div className="project-carousel-track">
                    {product.images.map((image, index) => {
                        return (
                            <img
                                key={index}
                                className="picture"
                                src={image}
                                alt="product"
                            />
                        );
                    })}
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
            <div
                className="overlay"
                onClick={() => toggleProject(product.product_name)}
            >
                <div className="project-name">
                    <h1>{product.product_name}</h1>
                    <h1>{product.second_line}</h1>
                </div>
                <p className="project-description hidden">
                    {product.description}
                </p>
            </div>
        </div>
    );
}

export default Product;
