
import { useDispatch } from "react-redux";
import { useState } from "react";
import { favoriteItem, addtoCart } from "../Reduer/CreateSlice"; 

function ProductStructurs(props) {
  const dispatch = useDispatch();
  const [isWishlisted, setIsWishlisted] = useState(false);

  const { id, price, image, description, title } = props.object;

  const addItem = () => {
    dispatch(addtoCart({ id, price, image, description, title }));
  };

  const wishlist = () => {
    if (!isWishlisted) {
      setIsWishlisted(true);
      dispatch(favoriteItem({ image, title })); 
    }
  };

  return (
    // <div className="col-md-3 mb-4 mt-4">
    // <div className="col-md-3 mb-md-4 mt-md-4 ">
      
    //   <button onClick={wishlist} className="wishlist-btn">
    //     {isWishlisted ? "❤️" : "🖤"}
    //   </button>
      
    //   <div className="card h-100 text-center p-4 m-3" key={id}>
         
    //     <img src={image} class="card-img-top" alt={title} height="100px" width="250px"/>

    //     <div className="card-body   ">
    //       <h5 className="card-title mb-0">{title.substring(0, 12)}</h5>
    //       <p className="card-text lead fw-bold">${price} </p>
    //       <button className="btn btn-primary" type="submit" onClick={addItem}>
    //         Add to Cart
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div className="col-md-3 mb-4 mt-4 d-flex flex-column align-items-center p-20">
  <button onClick={wishlist} className="wishlist-btn mb-3">
    {isWishlisted ? "❤️" : "🖤"}
  </button>

  <div className="card h-100 text-center p-4 " key={id}>
    <img src={image} className="card-img-top" alt={title} height="100px" width="250px" />

    <div className="card-body">
      <h5 className="card-title mb-2">{title.substring(0, 12)}</h5>
      <p className="card-text lead fw-bold">${price} </p>
      <button className="btn btn-primary" type="submit" onClick={addItem}>
        Add to Cart
      </button>
    </div>
  </div>
</div>

    


    
  );
}

export default ProductStructurs;
