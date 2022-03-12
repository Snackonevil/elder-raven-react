import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

function Product({ product }) {
    const [toggle, setToggle] = useState(false);

    return (
        <div
            id={`project-${product.id}`}
            className="project inactive-project"
            onClick={() => setToggle(!toggle)}
        >
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
                <div
                    className={`project-carousel-btns ${
                        !toggle ? "hidden" : ""
                    }`}
                >
                    <button className="project-left">
                        <FaChevronLeft />
                    </button>
                    <button className="project-right">
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div className="overlay">
                <div className="project-name">
                    <h1>{product.product_name}</h1>
                    <h1>{product.second_line}</h1>
                </div>
                <p className={`project-description ${!toggle ? "hidden" : ""}`}>
                    {product.description}
                </p>
            </div>
        </div>
    );
}

export default Product;
