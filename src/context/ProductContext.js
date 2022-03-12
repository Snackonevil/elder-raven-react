import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [productState, setProductState] = useState({});
    return (
        <ProductContext.Provider value={(productState, setProductState)}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
