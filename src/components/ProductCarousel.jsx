import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

export default function ProductCarousel({ product }) {
    const { productState } = useContext(ProductContext);
    const [activeIndex, setSlideIndex] = useState(0);
    const { id, product_name, images } = product;

    const nextSlide = () => {
        activeIndex === images.length - 1
            ? setSlideIndex(0)
            : setSlideIndex(activeIndex + 1);
    };
    const prevSlide = () => {
        activeIndex === 0
            ? setSlideIndex(images.length - 1)
            : setSlideIndex(activeIndex - 1);
    };

    return (
        <div className="product-carousel">
            <div
                className="product-carousel-track"
                style={{
                    width: `${100}%`,
                    transform: `translateX(-${100 * activeIndex}%)`,
                }}
            >
                {images.map((image, index) => {
                    return (
                        <img
                            key={product_name + index}
                            className="picture"
                            src={image}
                            alt="product"
                        />
                    );
                })}
            </div>
            <div
                className={`product-carousel-btns ${
                    productState !== id ? "hidden" : ""
                }`}
            >
                <button className="product-left" onClick={() => prevSlide()}>
                    <FaChevronLeft />
                </button>
                <button className="product-right" onClick={() => nextSlide()}>
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}
