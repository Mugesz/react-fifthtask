import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="top">

    
    <div className="container">
      <Link className="btn" to="/product">
        <div className="row gx-4 gx-lg-4 row-cols-1 row-cols-md-3 row-cols-xl-4 col-sm-12 justify-content-center">
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqkXGOroZN0T4058EIvWAjDMx74qUaGsY9w&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMV7PMxxiz7reRFR_UmK1WjZOeXy7EUHecg&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>{" "}
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUdGYNjXOOR-eD_aGBIcu5cyUVC7BHnFLh_A&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>{" "}
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrmrWtra32GkjAiPrBaeYF9aqcGxV8naRGQ&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRS6ikNS3_ACAz4ReA0ApBI3k1SI9vD4U-BA&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>{" "}
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQuUzIBv2bgr6wEHBYZ551ae82VTxpTUejWw&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>{" "}
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGLV49y0064eJXkX41SJTPMHzj188CNLOKg&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>
          <div className="col mb-5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqkXGOroZN0T4058EIvWAjDMx74qUaGsY9w&usqp=CAU"
              alt=""
              style={{ height: "200px", width: "200px" }}
            />
          </div>{" "}
        </div>
        <h1 className="text-body">Go to All products</h1>
      </Link>
    </div>
    </div>
  );
};

export default Hero;
