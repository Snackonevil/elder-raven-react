import Product from "./Product";
import products from "../images/products/index";
import { ProductContextProvider } from "../context/ProductContext";

function Work() {
    return (
        <ProductContextProvider>
            <section className="product-section">
                {products.map((product, index) => (
                    <Product key={index} product={product} />
                ))}
            </section>
        </ProductContextProvider>
    );
}

export default Work;
