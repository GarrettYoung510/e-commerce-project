import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import Search from "./Search";

const Home = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  // eslint-disable-next-line
  const [error, setError] = useState(false);

  // Sorting products by most sold first
  const loadProductsBySell = () => {
    getProducts("sold").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  // Sorting products by newest entry first
  const loadProductsByArrival = () => {
    getProducts("createdAt").then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="True Hermit Essentials"
      description="Your one stop shop for most homely needs"
      className="container-fluid"
    >
      <Search />
      <h2 className="mb-4">New Arrivals</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          // using key in div instead of card to take effect on the div
          <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>

      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <div key={i} className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <Card product={product} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;