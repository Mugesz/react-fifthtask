import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import UserContext from "./Context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, handleChange, handleRemoveitem, total } =
    useContext(UserContext);
  return (
    <div>
      <Navbar />
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: 15 }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <div className="col-lg-8">
                      <div className="p-5">
                        <div className="mb-5">
                          <h1 className="fw-bold mb-0 text-black">
                            {" "}
                            Cart Items
                          </h1>
                          <hr />
                        </div>

                        {cart.length > 0 ? (
                          <div className="modal-body">
                            <ol className="list-group list-group-numbered">
                              {cart.map((item, index) => (
                                <div key={index}>
                                  <div className="row mb-4 d-flex justify-content-between align-items-center">
                                    <div className="col-md-2 col-lg-2 col-xl-2">
                                      <img
                                        src={item.image}
                                        className="img-fluid rounded-3"
                                        alt="Cotton T-shirt"
                                      />
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-3">
                                      <h6 className="text-black mb-0">
                                        {item.title}
                                      </h6>
                                    </div>
                                    <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                      <button
                                        className={`btn btn-danger px-2 ${
                                          item.quantity === 1 ? "disabled" : ""
                                        }`}
                                        onClick={() => handleChange(item, -1)}
                                      >
                                        -
                                      </button>
                                      <span>
                                        &nbsp;&nbsp;{item.quantity}
                                        &nbsp;&nbsp;
                                      </span>
                                      <button
                                        className="btn btn-success px-2"
                                        onClick={() => handleChange(item, +1)}
                                      >
                                        +
                                      </button>
                                    </div>
                                    <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                      <h6 className="mb-0">
                                        &#36;{" "}
                                        {Math.round(item.price * item.quantity)}
                                      </h6>
                                    </div>
                                    <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                      <button
                                        className="btn btn-danger"
                                        onClick={() => handleRemoveitem(item)}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </ol>
                          </div>
                        ) : (
                          <h3 className="text-center">No items in cart</h3>
                        )}
                        <hr className="my-4" />
                        <div className="pt-5">
                          <h6 className="mb-0">
                            <Link to={"/product"} className="text-body">
                              <i className="fas fa-long-arrow-alt-left me-2" />
                              Back to shop
                            </Link>
                          </h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 bg-grey">
                      <div className="p-5">
                        <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-4">
                          <h5 className="text">ITEMS {cart.length} Nos</h5>
                          <h5>&#36;{Math.round(total)}</h5>
                        </div>
                        <hr className="my-4" />
                        <div className="d-flex justify-content-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>&#36;{Math.round(total)}</h5>
                        </div>
                        {total === 0 ? (
                          <button
                            type="button"
                            className="btn btn-success btn-block btn-lg"
                            data-mdb-ripple-color="dark"
                          >
                            Proceed to buy
                          </button>
                        ) : (
                          <Link className="btn" to="/confirmed">
                            <button
                              type="button"
                              className="btn btn-success btn-block btn-lg"
                              data-mdb-ripple-color="dark"
                            >
                              Proceed to buy
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
