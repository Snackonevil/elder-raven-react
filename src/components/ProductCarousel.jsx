import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function ProductCarousel({ product }) {
    const { productState, handleProduct } = useContext(ProductContext);
    const { id, product_name, images } = product;
    return (
        <div className="product-carousel">
            <div className="product-carousel-track">
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
                className={`product-carousel-btns ${
                    productState !== id ? "hidden" : ""
                }`}
            >
                <button
                    className="product-left"
                    onClick={() => console.log("click left")}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className="product-right"
                    onClick={() => console.log("click right")}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
