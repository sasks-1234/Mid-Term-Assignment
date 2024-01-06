import React from "react";
import Data from "../component/Data";
import "../Style/Mainpage.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Mainpage() {
  return (
    <Carousel
      className="mainpage"
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      transitionTime={2900}
      autoPlay={true}
    >
      {Data.map((item, index) => (
        <div key={index}>
          <div className="bannerImg">
            <img src={item.product} alt={item.name} className="image" />
          </div>
          <div className="text">  
            <h3 className="heading ">{item.name}</h3>
            <p className="paragraph">{item.Description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Mainpage;

// import React from 'react'
// import { Card } from "react-bootstrap";

// function Mainpage() {
//   return (
//     <div className="container mt-4">
//     <Card style={{ width: "18rem" }}>
//       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnRB7EIK77SRIsG63gZievPa-TdUTaVolU1w&usqp=CAU" alt="Card image" />
//       <Card.Body>
//         <Card.Title>Your Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   </div>
// );
  
// }

// export default Mainpage
