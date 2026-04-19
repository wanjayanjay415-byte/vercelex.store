import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartItem {
  id: string; // product id + plan (e.g. gemini-annual)
  name: string;
  plan: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  getCartTotal: () => number;
  cartCount: number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('vercelex_cart');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { return []; }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('vercelex_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
      }
      return [...prev, item];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const increaseQuantity = (id: string) => {
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
  };

  const decreaseQuantity = (id: string) => {
    setCartItems(prev => prev.map(i => {
      if (i.id === id && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 };
      }
      return i;
    }));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('vercelex_cart');
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal, cartCount, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
