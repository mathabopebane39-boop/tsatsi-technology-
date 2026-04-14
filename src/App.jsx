import React, { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    { name: "Phone Accessories", price: "R150", image: "https://via.placeholder.com/200" },
    { name: "Beauty Products", price: "R200", image: "https://via.placeholder.com/200" },
    { name: "Digital Course", price: "R300", image: "https://via.placeholder.com/200" },
    { name: "Health Products", price: "R250", image: "https://via.placeholder.com/200" },
    { name: "Clothing", price: "R400", image: "https://via.placeholder.com/200" },
    { name: "Shoes", price: "R500", image: "https://via.placeholder.com/200" },
    { name: "Catholic Church Accessories", price: "R350", image: "https://via.placeholder.com/200" }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ fontFamily: "Arial", background: "#f5f5f5", padding: "20px" }}>
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "40px" }}>Tsatsi Technology 🚀</h1>
        <p style={{ color: "gray" }}>Buy, Sell & Grow Your Business Online</p>
        <h3>Cart: {cart.length}</h3>
      </div>

      {/* Products Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "20px" 
      }}>
        {products.map((p, i) => (
          <div key={i} style={{ 
            background: "white", 
            borderRadius: "10px", 
            padding: "15px", 
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)" 
          }}>
            <img 
              src={p.image} 
              alt={p.name} 
              style={{ width: "100%", borderRadius: "10px" }} 
            />
            <h3 style={{ marginTop: "10px" }}>{p.name}</h3>
            <p style={{ fontWeight: "bold" }}>{p.price}</p>
            <button
              onClick={() => addToCart(p)}
              style={{
                background: "black",
                color: "white",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%"
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* WhatsApp */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2>Order via WhatsApp</h2>
        <a href="https://wa.me/27831234567?text=Hi%20I%20want%20to%20order%20a%20product" target="_blank">
          <button style={{ 
            background: "green", 
            color: "white", 
            padding: "12px 20px", 
            border: "none", 
            borderRadius: "5px" 
          }}>
            Chat on WhatsApp
          </button>
        </a>
      </div>

      {/* Email */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <a href="mailto:mathabo.pebane39@gmail.com?subject=Business Inquiry&body=Hi, I would like to know more about your products.">
          Contact via Email
        </a>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: "40px", color: "gray" }}>
        © {new Date().getFullYear()} Tsatsi Technology
      </div>

    </div>
  );
}
