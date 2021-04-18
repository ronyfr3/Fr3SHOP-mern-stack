import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/ProductAction";
import { Link } from "react-router-dom";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";
import "./Home.css";

const Cameras = () => {
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);
  const { products, loading, error } = allproducts;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // console.log(products);
  const cameras = products.filter((prod) => prod.category === "cameras");
  // console.log(Accessories);
  // console.log(error)
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <h2>Cameras</h2>
          <small>
            {cameras.length} {cameras.length > 1 ? "items" : "item"} found in
            Cameras
          </small>
          <div className="cameras">
            {cameras.map((item) => {
              const { image, name, discount, price, _id } = item;
              return (
                <div key={_id} className="camera">
                  {discount !== 0 ? (
                    <p className="discount"> discount $ {discount}</p>
                  ) : null}
                  <img src={image} alt={image} />

                  <p>{name}</p>
                  <div className="disPrice">
                    <p>$ {price}</p>
                    <Link to={`details/${_id}`}>
                      <button className="viewdetails">View Details</button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Cameras;
