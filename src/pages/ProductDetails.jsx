import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import "../Style/productDetails.css";
function ProductDetails() {
  const [product, setProduct] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: " currentColor",
        height: "50em",
      }}
    >
      <Navbar />
      <h2 className="productheading">Product Details</h2>
      <div className="container  productDetails">
        <div className="product">
          <img className="img" src={product.image} />
          <div className="fordisplay">
            <p>{product.title}</p>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
