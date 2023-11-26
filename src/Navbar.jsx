import React, { useContext } from "react";
import "bootstrap";
import { Link } from "react-router-dom";
import UserContext from "./Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { cart } = useContext(UserContext);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {/* <li className="nav-item"><Link className="nav-link active" aria-current="page" to={"/"}>Home</Link></li> */}

            <li className="nav-item">
              <Link className="nav-link" to={"/product"}>
                All products
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link className="btn btn-outline-dark" to={"/cart"}>
            <FontAwesomeIcon icon={faCartPlus} style={{color: "#25282d",}} />              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cart.length}
              </span>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
