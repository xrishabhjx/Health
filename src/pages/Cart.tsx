
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Trash2, ShoppingCart, ArrowRight, CreditCard } from "lucide-react";
import { useCart } from "@/components/CartProvider";

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  
  // Calculate tax and total
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <ShoppingCart className="h-8 w-8" />
            Your Cart
          </h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any courses to your cart yet.
              </p>
              <Link to="/courses">
                <Button size="lg">Browse Courses</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted px-6 py-4">
                    <h2 className="font-medium">Course Items ({cartItems.length})</h2>
                  </div>
                  
                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-6 flex gap-4">
                        <div className="h-20 w-20 rounded overflow-hidden flex-shrink-0">
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full bg-muted flex items-center justify-center">
                              <ShoppingCart className="h-8 w-8 text-muted-foreground/50" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-primary font-semibold mt-1">${item.price.toFixed(2)}</p>
                          
                          <div className="flex items-center gap-6 mt-4">
                            <div className="flex items-center">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-r-none"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <Input 
                                type="number" 
                                value={item.quantity} 
                                className="h-8 w-12 rounded-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                onChange={(e) => {
                                  const value = parseInt(e.target.value);
                                  if (!isNaN(value)) {
                                    updateQuantity(item.id, value);
                                  }
                                }}
                              />
                              <Button 
                                variant="outline" 
                                size="icon" 
                                className="h-8 w-8 rounded-l-none"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                            </div>
                            
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-muted-foreground hover:text-destructive gap-1"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 size={14} />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border rounded-lg overflow-hidden sticky top-20">
                  <div className="bg-muted px-6 py-4">
                    <h2 className="font-medium">Order Summary</h2>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax (8%)</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="border-t pt-2 mt-2 flex justify-between font-medium">
                        <span>Total</span>
                        <span className="text-lg">${total.toFixed(2)}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full gap-2 mt-4" size="lg">
                      <CreditCard size={16} />
                      Checkout
                    </Button>
                    
                    <div className="mt-6 text-center">
                      <Link to="/courses" className="text-sm text-primary hover:underline flex items-center justify-center gap-1">
                        Continue Shopping
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="bg-muted/50 p-4 text-center text-xs text-muted-foreground">
                    Secure checkout powered by Stripe
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
