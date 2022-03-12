import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCarousel from "./ProductCarousel";

function Product({ product }) {
    const { productState, handleProduct } = useContext(ProductContext);
    const { id, product_name, second_line, description } = product;
    return (
        <div
            id={`product-${id}`}
            className={`product ${
                productState !== id ? "inactive-product" : "active-product"
            }`}
            onClick={() => handleProduct(id)}
        >
            <ProductCarousel product={product} />
            <div
                className="overlay"
                style={{
                    height: productState === id ? "25%" : "",
                    opacity: productState === id ? "1" : "",
                }}
            >
                <div
                    className="product-name"
                    style={{ width: productState === id ? "100%" : "" }}
                >
                    <h1>{product_name}</h1>
                    <h1>{second_line}</h1>
                </div>
                <p
                    className={`product-description ${
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
