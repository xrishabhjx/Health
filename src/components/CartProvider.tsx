
import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { CourseProps } from "./CourseCard";

interface CartItem {
  id: string;
  title: string;
  price: number;
  image?: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (course: CourseProps) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (course: CourseProps) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === course.id);
      
      if (existingItem) {
        toast.success(`Added another ${course.title} to cart`);
        return prevItems.map(item => 
          item.id === course.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        toast.success(`${course.title} added to cart`);
        return [...prevItems, {
          id: course.id,
          title: course.title,
          price: course.price,
          image: course.image,
          quantity: 1
        }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
    toast.info("Item removed from cart");
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems((prevItems) => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info("Cart cleared");
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      subtotal
    }}>
      {children}
    </CartContext.Provider>
  );
};
