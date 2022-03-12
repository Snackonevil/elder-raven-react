import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
    const [productState, setProductState] = useState();

    function handleProduct(id) {
        if (productState === id) {
            // setProductState(null);
            return;
        } else {
            setProductState(id);
        }
    }

    return (
        <ProductContext.Provider value={{ productState, handleProduct }}>
            {children}
        </ProductContext.Provider>
    );
};
