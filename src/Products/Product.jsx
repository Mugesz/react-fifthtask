import React, { useContext } from "react";
import "./Product.css";

import Navbar from "../Navbar";
import Header from "../Header";
import Footer from "../Footer";

import UserContext from "../Context";
import Spinner from "../Spinner";

const Product = () => {
  const { product, handleAdditem, handleRemoveitem, cart, loading } =
    useContext(UserContext);

  return (
    <div className="top">
      <Navbar />
      <div>
        <Header />
        {loading ? (
          <Spinner />
        ) : (
          <div className="container px-4 px-lg-5 mt-5 card-color">
            <section className="py-5">
              <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-4 col-sm-12 justify-content-center">
                {product.map((item) => (
                  <div key={item.id} className="col mb-5 cart-key">
                    <div className="card h-100">
                      <img
                        className="card-img-top p-3"
                        src={item.image}
                        alt="..."
                        style={{ height: "200px", width: "200px" }}
                      />
                      <div className="card-body ">
                        <div className="text-center">
                          <h5 className="fw-bolder">{item.title}</h5>
                        </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="d-flex justify-content-center small text-warning mb-2">
                          <h5 className="card-price"> &#36; {Math.round(item.price)}</h5>
                        </div>
                        <div className="text-center">
                          {cart.some((s) => item.id === s.id) ? (
                            <button
                              onClick={() => handleRemoveitem(item)}
                              className="btn btn-danger mt-auto"
                            >
                              Remove from cart
                            </button>
                          ) : (
                            <button
                              onClick={() => handleAdditem(item)}
                              className="btn btn-success mt-auto"
                            >
                              Add to cart
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
