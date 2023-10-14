import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext/AppContext";

export default function ProductPage() {
  let { id } = useParams();
  const url = "https://fakestoreapi.com/products/";
  let [product, setProduct] = useState({});
  let [loading, setLoading] = useState(true);
  let {addProductToCart} = useContext(AppContext);

  async function getProductData() {
    let response = await fetch(url + id);
    let data = await response.json();
    setProduct(data);
    setLoading(false);
  }
  useEffect(() => {
    getProductData();
  }, []);

  if(loading){
    return "Fetching Data..."
  }

  return (
    <div className="flex max-w-7xl mx-auto mt-12">
        <div className="w-1/2">
          <img alt={product.title} src={product.image} className="h-96"/>
        </div>

        <div className="w-1/2">
          <h1 className="text-3xl">{product.title}</h1>
          <p className="my-12">{product.description}</p>
         <div className="flex justify-between items-center">
         <p className="">$ {product.price}</p>
          <span className="capitalize bg-blue-400">{product.category}</span>
         </div>
        
         <div className="flex justify-between items-center mt-6">
          <h3 className="text-lg mt-4">Rating: {product?.rating?.rate}</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-sm" onClick={()=>{
            addProductToCart(product)
          }}>Add To Cart</button>
        </div>

        </div>
    </div>
  );
}
