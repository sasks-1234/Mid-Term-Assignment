import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";

function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [category]);
  console.log(products);

  return (
    <div>
      <Categories />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center p-4">
                <img
                  src={product.image}
                  class="card-img-top"

                  alt={product.title}
                  height="250px"
                  // style={{ width: "250px", height: "250px" }}
                />
                <h3> {product.title.slice(0, 20)} </h3>
                <p>
                  {" "}
                  <span> &#8377;</span> {product.price}{" "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryProducts;
