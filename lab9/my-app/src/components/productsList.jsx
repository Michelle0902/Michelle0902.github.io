import { useState } from "react";
import { useReducer } from "react";
import Product from "./Product"
export default function Q1(){
    const data = [
        { id: 1, name: 'Apple', price: 1, inStock: true },
        { id: 2, name: 'Banana', price: 1, inStock: false },
        { id: 3, name: 'Cherry', price: 2, inStock: true }]

    const [state, setState] = useState(data);
    const toggleButton = (productId) => {
        setState(prev =>
            prev.map(product =>
                product.id === productId
                    ? { ...product, inStock: !product.inStock }
                    : product
            )
        );
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'TOGGLE_STOCK':
                return state.map(product =>
                    product.id === action.productId
                        ? { ...product, inStock: !product.inStock }
                        : product
                );
            default:
                return state;
        }
    }

    
    const [state1, dispatch] = useReducer(reducer, data);
    const toggleButton2 = (productId) => {
        dispatch({type: "TOGGLE_STOCK", productId})
    }
    return(
        <div>
            <h2>useState Version</h2>
            {state.map(product => (
                <Product key={product.id} {...product} buttonToggle={toggleButton} />
            ))}

            <h2>useReducer Version</h2>
            {state1.map(product => (
                <Product key={product.id} {...product} buttonToggle={toggleButton2} />
            ))}
        </div>
    );
}


