import { useContext } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";

function Product({ product }) {
    const { productState, handleProduct } = useContext(ProductContext);
    // const [productState.toggle, setproductState.Toggle] = useState(false);
    const { id, product_name, second_line, description, images } = product;
    return (
        <div
            id={`project-${id}`}
            className={`project ${
                productState !== id ? "inactive-project" : "active-project"
            }`}
            onClick={() => handleProduct(id)}
        >
            <div className="project-carousel">
                <div className="project-carousel-track">
                    <img
                        key={`${product_name}${id}`}
                        className="picture"
                        src={images[0]}
                        alt="product"
                    />
                    {/* {images.map(image => {
                        return (
                            <img
                                key={`${product_name}${id}`}
                                className="picture"
                                src={image}
                                alt="product"
                            />
                        );
                    })} */}
                </div>
                <div
                    className={`project-carousel-btns ${
                        productState !== id ? "hidden" : ""
                    }`}
                >
                    <button
                        className="project-left"
                        onClick={() => console.log("click left")}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className="project-right"
                        onClick={() => console.log("click right")}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
            <div
                className="overlay"
                style={{
                    height: productState === id ? "25%" : "",
                    opacity: productState === id ? "1" : "",
                }}
            >
                <div
                    className="project-name"
                    style={{ width: productState === id ? "50%" : "" }}
                >
                    <h1>{product_name}</h1>
                    <h1>{second_line}</h1>
                </div>
                <p
                    className={`project-description ${
                        productState !== id ? "hidden" : ""
                    }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Product;
