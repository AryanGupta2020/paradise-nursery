import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/CartSlice";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";

function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <p className="eyebrow">GROW A LITTLE HAPPINESS</p>
        <h1>Paradise Nursery <span aria-hidden="true">🌿</span></h1>
        <p>
          Bring nature home. Explore our collection of beautiful indoor plants
          and create a calmer, greener space.
        </p>
        <a href="/plants" className="primary-btn">Get Started</a>
        <a href="/about" className="home-about-link">Learn more about us</a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
