import React, { createContext, useState, useContext } from 'react';

// Create a Context for the cart
const CartContext = createContext();

// CartProvider component to manage cart state and operations
export const CartProvider = ({ children }) => {
    // Initialize cart as an object to store items and their quantities
    const [cart, setCart] = useState({});

    // Function to add or update the item quantity in the cart
    const addToCart = (item) => {
        setCart((prevCart) => {
            if (!item || !item.id) return prevCart; // Handle invalid item
            const currentQuantity = prevCart[item.id]?.quantity || 0;
            return {
                ...prevCart,
                [item.id]: {
                    ...item,
                    quantity: currentQuantity + 1
                }
            };
        });
    };

    // Function to remove an item or decrement its quantity
    const removeFromCart = (item) => {
        setCart((prevCart) => {
            if (!item || !item.id) return prevCart; // Handle invalid item
            const currentQuantity = prevCart[item.id]?.quantity || 0;
            if (currentQuantity > 1) {
                return {
                    ...prevCart,
                    [item.id]: {
                        ...item,
                        quantity: currentQuantity - 1
                    }
                };
            } else {
                // Remove the item if quantity is 1 or less
                const newCart = { ...prevCart };
                delete newCart[item.id];
                return newCart;
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);
