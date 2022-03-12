import Product from "./Product";
import products from "../images/products/index";

function Work() {
    return (
        <section className="project-section">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </section>
    );
}

export default Work;
