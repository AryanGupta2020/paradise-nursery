import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 299, image: "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=700&q=80" },
      { id: 2, name: "Peace Lily", price: 349, image: "https://images.unsplash.com/photo-1597055181300-a8b4be4b1b7b?auto=format&fit=crop&w=700&q=80" },
      { id: 3, name: "Spider Plant", price: 249, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
      { id: 4, name: "Areca Palm", price: 499, image: "https://images.unsplash.com/photo-1531816055379-8b1e2b9f6f3d?auto=format&fit=crop&w=700&q=80" },
      { id: 5, name: "Rubber Plant", price: 399, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80" },
      { id: 6, name: "Boston Fern", price: 299, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    name: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 199, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80" },
      { id: 8, name: "Jade Plant", price: 249, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=700&q=80" },
      { id: 9, name: "Echeveria", price: 179, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
      { id: 10, name: "Haworthia", price: 229, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80" },
      { id: 11, name: "Zebra Cactus", price: 199, image: "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=700&q=80" },
      { id: 12, name: "String of Pearls", price: 299, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    name: "Tropical Plants",
    plants: [
      { id: 13, name: "Monstera Deliciosa", price: 599, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=700&q=80" },
      { id: 14, name: "Bird of Paradise", price: 799, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=700&q=80" },
      { id: 15, name: "Calathea", price: 449, image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80" },
      { id: 16, name: "Philodendron", price: 399, image: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=700&q=80" },
      { id: 17, name: "Anthurium", price: 549, image: "https://images.unsplash.com/photo-1597055181300-a8b4be4b1b7b?auto=format&fit=crop&w=700&q=80" },
      { id: 18, name: "Fiddle Leaf Fig", price: 699, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=700&q=80" }
    ]
  }
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="logo">🌿 Paradise Nursery</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/about">About Us</Link>
          <Link to="/cart" className="cart-link">🛒 Cart ({cartCount})</Link>
        </div>
      </nav>

      <main>
        <h1 className="page-title">Our Beautiful Houseplants</h1>
        <p className="page-intro">Find the perfect green companion for your space.</p>

        {categories.map((category) => (
          <section key={category.name}>
            <h2 className="category-title">{category.name}</h2>
            <div className="product-grid">
              {category.plants.map((plant) => {
                const isAdded = cartItems.some((item) => item.id === plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img src={plant.image} alt={plant.name} loading="lazy" />
                    <div className="product-info">
                      <h3>{plant.name}</h3>
                      <p className="price">₹{plant.price}</p>
                      <button
                        className="add-btn"
                        onClick={() => dispatch(addItem(plant))}
                        disabled={isAdded}
                      >
                        {isAdded ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
