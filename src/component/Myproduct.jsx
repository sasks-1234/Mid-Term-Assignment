import React, { useEffect, useState } from "react";
import ProductStructurs from "./ProductStructurs";
function Myproduct() {
  const [products, updateProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        updateProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <ProductStructurs object={product} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Myproduct;
