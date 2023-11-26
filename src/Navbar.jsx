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

   // <div className="container">
    //   <Link className="btn" to="/product">
    //     <div className="row gx-4 gx-lg-4 row-cols-1 row-cols-md-3 row-cols-xl-4 col-sm-12 justify-content-center">
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqkXGOroZN0T4058EIvWAjDMx74qUaGsY9w&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMV7PMxxiz7reRFR_UmK1WjZOeXy7EUHecg&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>{" "}
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdGYNjXOOR-eD_aGBIcu5cyUVC7BHnFLh_A&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>{" "}
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrmrWtra32GkjAiPrBaeYF9aqcGxV8naRGQ&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRS6ikNS3_ACAz4ReA0ApBI3k1SI9vD4U-BA&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>{" "}
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuUzIBv2bgr6wEHBYZ551ae82VTxpTUejWw&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>{" "}
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGLV49y0064eJXkX41SJTPMHzj188CNLOKg&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>
    //       <div className="col mb-5">
    //         <img
    //           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqkXGOroZN0T4058EIvWAjDMx74qUaGsY9w&usqp=CAU"
    //           alt=""
    //           style={{ height: "200px", width: "200px" }}
    //         />
    //       </div>{" "}
    //     </div>
    //     <h1 className="text-body">Go to All products</h1>
    //   </Link>
    // </div>
