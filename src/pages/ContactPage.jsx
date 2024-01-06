import React from "react";
import Navbar from "../component/Navbar";

function ContactPage() {
  return (
    <div>
     
      <div
        className="container "
        style={{ width: "100%", backgroundColor: "floralwhite" }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "36px",
              fontFamily: " fangsong",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              fontSize: "22px",
              fontFamily: " inherit",
              fontWeight: "500",
            }}
          >
            Swing by for a cup of coffee, or leave us a message:
          </p>
          <p
            style={{
              fontSize: "22px",
              fontFamily: " inherit",
              fontWeight: "500",
            }}
          >
            “Unlocking the Power of AI for Small Business Marketing: Enhancing
            Customer Experience and Driving Results”
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
