import { createContext, useState } from "react";



export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
//funciones
//estados  (ambas pasadas por value)

    const agregarAlCarrito = (product, count) => {

    if (isInCart(product.id)){
        setCart(
            cart.map((item) =>{
            return item.id === product.id ? { ...item, count: item.count + count}
            : item;
        })
        );
    }else {
        setCart([...cart, { ...product, count}]);
    }
    };


    const isInCart = (id) => cart.find((product) => product.id === id) ? true : false;
    
    const totalPrice = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.price * prod.count;
        })
        return acumulador;
    }

    const totalProductsCart = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.count;
        })
        return acumulador
    }

    const removeProduct = (id) => {
        setCart(cart.filter((product) => product.id !==id));
    }

    const clearCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, totalPrice, totalProductsCart, clearCart, isInCart, removeProduct }}>
            {children}
        </CartContext.Provider>
    )
   
    
    
};

export default CartProvider;