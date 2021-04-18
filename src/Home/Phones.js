import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/ProductAction";
import { Link } from "react-router-dom";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";
import "./Home.css";

const Phones = () => {
  const dispatch = useDispatch();
  const allproducts = useSelector((state) => state.products);
  const { products, loading, error } = allproducts;
  // console.log(allproducts)
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  // console.log(products);
  const phones = products.filter(
    (prod) => prod.category === "phones"
  );
  // console.log(phones);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <h2>Phones</h2>
          <small>
            {phones.length} {phones.length > 1 ? "items" : "item"} found in
            Phones
          </small>
          <div className="cameras">
            {phones.map((item) => {
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

export default Phones;
