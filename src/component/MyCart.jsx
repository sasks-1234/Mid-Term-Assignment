// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteToCart } from "../Reduer/CreateSlice";

// function MyCart() {
//   const dispatch = useDispatch();
//   const wholeObject = useSelector((state) => {
//     return state.cart.additem;
//   });
//   const deleteItem = (itemId) => {
//     dispatch(deleteToCart(itemId));
//   };

//   console.log(wholeObject);
//   return (
//     <div
//       className="col-sm-3"
//       style={{ marginLeft: "20px", marginTop: "20px", marginRight:"100px" }}
//     >
//       {wholeObject.map((item, index) => (
//         <div key={index} className="card mb-3" style={{ maxWidth: "500px" }}>
//           <div className="row g-0">
//             <div className="col-md-4">
//               <img
//                 src={item.image}
//                 alt={`Product ${index}`}
//                 className="img-fluid rounded-start"
//                 height="400px" width="400px"
//               />
//             </div>
//             <div className="col-md-8">
//               <div className="card-body">
//                 <h5 className="card-title">{item.title}</h5>
//                 <p className="card-text">
//                   <span>&#8377;</span> {item.price}
//                 </p>
//                 <button
//                   className="btn btn-primary"
//                   // style={{ position: "absolute", top: "64px", left: "248px" }}
//                   onClick={() => deleteItem(item.id)} 
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default MyCart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart } from "../Reduer/CreateSlice";

function MyCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.additem);

  const removeFromCartHandler = (itemId) => {
    dispatch(deleteToCart(itemId));
  };

  return (
    <div className="col-sm-3" style={{ marginLeft: "20px", marginTop: "20px", marginRight: "100px", width: "900px" }}>
      {cartItems.map((item, index) => (
        <div key={index} className="card mb-3" style={{ maxWidth: "500px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.image}
                alt={`Product ${index} thumbnail`}
                className="img-fluid rounded-start"
                height="400px"
                width="400px"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                  <span>&#8377;</span> {item.price}
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => removeFromCartHandler(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
    </div>
  );
}

export default MyCart;
