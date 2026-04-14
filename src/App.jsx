import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Phone Accessories", price: "R150" },
    { name: "Beauty Products", price: "R200" },
    { name: "Digital Course", price: "R300" },
    { name: "Health Products", price: "R250" },
    { name: "Clothing", price: "R400" },
    { name: "Shoes", price: "R500" },
    { name: "Catholic Church Accessories", price: "R350" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(product.name + " added to cart");
  };

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Tsatsi Technology 🚀</h1>
      <p>Start your online business. Buy, sell, and earn.</p>

      <h2>Products</h2>
      <p>Cart: {cart.length}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((p, i) => (
          <div key={i} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Order via WhatsApp</h2>
      <a href="https://wa.me/27731903585?text=Hi%20I%20want%20to%20order%20a%20product" target="_blank" target="_blank">
        Chat Now
      </a>

      <h2>Contact</h2>
      <a href="mailto:mathabo.pebane39@gmail.com">Email Me</a>
    </div>
  );
}
