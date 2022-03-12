import Product from "./Product";
import products from "../images/products/index";
import { ProductContextProvider } from "../context/ProductContext";

function Work() {
    return (
        <ProductContextProvider>
            <section className="project-section">
                {products.map((product, index) => (
                    <Product key={product.product_name} product={product} />
                ))}
            </section>
        </ProductContextProvider>
    );
}

export default Work;
