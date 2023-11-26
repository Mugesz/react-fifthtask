import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Confirmed = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="confirmed">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvFJTnUgpV2i_1ZlE99SIuoMqyszJC2NP_nQ&usqp=CAU"
          alt=""
        />
        <h1> !!! Your Order is confirmed Successfully !!!</h1>
      </div>
      <br />
      <br />
      <br />

      <Link className="btn" to="/product">
        <h3>Back to All Products</h3>
      </Link>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Confirmed;
