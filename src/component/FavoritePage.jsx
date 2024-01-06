// import React from 'react'
// import { useSelector } from 'react-redux'

// function FavoritePage() {
//   const favoriteItems = useSelector((state) => state.cart.favoriteItems); // Correct capitalization 'favoriteItems'

//   console.log(favoriteItems);

//   return (
//     <div>
//       {favoriteItems.map((item, index) => (
//         <div key={index}>
//           <img src={item.image} alt={item.title} />
//           <p>{item.title}</p>
//           {/* Add other elements as needed for favorite items */}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FavoritePage;

import React from 'react';
import { useSelector } from 'react-redux';

function FavoritePage() {
  const favoriteItems = useSelector((state) => state.cart.favoriteItems);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Favorite Items</h2>

      {favoriteItems.map((item, index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: '540px' }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} alt={item.title} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                
                <p className="card-text">{item.description}</p>
                <div className="d-flex justify-content-between align-items-center">
               
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoritePage;