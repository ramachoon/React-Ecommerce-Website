import { useState } from "react";
import AppContext from "./AppContext";
import toast from "react-hot-toast";
export default function AppState({ children }) {
  let appName = "E-Shopify";
  let currentYear = 2023;
  let [cartItems, setCartItems] = useState([]);
  let [wishlistItems, setWishlistItems] = useState([]);

  let addProductToCart = (product) => {
    // console.log(product)
    // setCartItems([...cartItems,product])
    // toast.success("Product Added Successfully")
    const exisitingProduct = cartItems.find((p) => p.id === product.id);
    if (exisitingProduct) {
      const updatedCart = cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success("Product Added in Cart Successfully")
  };

  let handleQuantityChange = (productId,newQuantity)=>{
    if (newQuantity >= 1 && newQuantity <= 10) {
    const updatedCart = cartItems.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCartItems(updatedCart);
    toast.success("Cart Product Quantity Changed");
  } else {
    toast.error("Quantity must be between 1 and 10");
  }
};
  //total price
  const calculateTotalCartPrice = () => {
    return cartItems.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  let removeProductFromCart = (product) => {
    let updatedCartItems = cartItems.filter((item) => {
      return item.id !== product.id;
    });
    setCartItems(updatedCartItems);
    toast.success("Product Removed From Cart Successfully");
  };
  const clearCart = () => {
    // Clear all items from the cart
    setCartItems([]);
  };


  //Wishlist
  let addProductToWishlist = (product) => {
    // console.log(product)
    // setCartItems([...cartItems,product])
    // toast.success("Product Added Successfully")
    const exisitingWishlistProduct = wishlistItems.find((p) => p.id === product.id);
    if (exisitingWishlistProduct) {
      const updatedWishlist = wishlistItems.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
      );

      setWishlistItems(updatedWishlist);
    } else {
      setWishlistItems([...wishlistItems, { ...product, quantity: 1 }]);
    }
    toast.success("Product added to Wishlist Successfully")
  };

  let handleWishlistQuantityChange = (productId,newQuantity)=>{
    const updatedWishlist = wishlistItems.map(product=>
    product.id === productId? {...product,quantity:newQuantity}:product
        )
    setWishlistItems(updatedWishlist)
    toast.success("Wishlist Product Quantity Changed")
  }

  let removeProductFromWishlist = (product) => {
    let updatedWishlistItems = wishlistItems.filter((item) => {
      return item.id !== product.id;
    });
    setWishlistItems(updatedWishlistItems);
    toast.success("Product Removed From Wishlist");
  };
  const clearWishlist = () => {
    // Clear all items from the cart
    setWishlistItems([]);
  };




  function greetUser() {
    console.log("Hey!! How are you??");
  }
  return (
    <AppContext.Provider
      value={{
        appName,
        cartItems,
        currentYear,
        wishlistItems,
        greetUser,
        addProductToCart,
        removeProductFromCart,
        handleQuantityChange,
        addProductToWishlist,
        removeProductFromWishlist,
        handleWishlistQuantityChange,
        calculateTotalCartPrice,
        clearCart,
        clearWishlist
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
