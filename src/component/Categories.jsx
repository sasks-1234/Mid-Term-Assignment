import React, { useEffect, useState } from "react";
import '../Style/categories.css'

import { Link, useParams } from "react-router-dom";

function Categories() {
  const [data, updateData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        updateData(data);
        // console.log(data);
      });
  }, []);
  console.log(data);

  return (
    <div className="categoryname">
      <h2 className="fontHeading"></h2>
      <div className="middleheading"
       
      ><div className="categories-container">
        {data.map((element, index) => (
          <div key={element.id} className="category-item"> 
            <Link to={`/myproduct/${element.toLowerCase()}`}>
              <h2 className="category-heading">{element.toUpperCase() }</h2>
            </Link>
            
          </div>
        ))}
        
</div>
      </div>
    </div>
  );
}


    // const containerStyle = {
    //     display: 'flex',
    //     flexDirection: 'row', 
    //     flexWrap: 'wrap', 
    //   };

    //   const categoryStyle = {
    //     margin: '10px',
    //     padding: '10px',
    //     border: '1px solid #ddd',
    //   };

    //   const headingStyle = {
    //     color: 'blue',
    //     fontSize: '24px',
    //    e
    //   };




export default Categories;