import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct, getProducts } from "../redux/actions/ProductAction";
import Loading from "../Utils/Loading";
import Error from "../Utils/Error";
import { Link } from "react-router-dom";
import "./Details.css";
import "../Home/Home.css";

const ProductDetails = (props) => {
  const [qty, setQty] = useState();
  const id = props.match.params.id;
  // console.log(id);
  const singleProduct = useSelector((state) => state.productDetails);
  const { product, error, loading } = singleProduct;
  // console.log(product)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]); //all defined variable/names under the useEffect will put in dependency array

  //all products to similar products showing

  const allproducts = useSelector((state) => state.products);
  const { products } = allproducts;
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const similarBrand = products.filter(
    (item) => item.brand === (product !== undefined && product.brand)
  );
  // console.log(similarBrand);
  const similarProducts = similarBrand.filter((item) => item._id !== id);
  // console.log(similarProducts);


const buyHandler=()=>{
  props.history.push(`/cart/${id}?qty=${qty}`);
}


  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <div className="detail">
          <h4>Product Details</h4>
          <div className="detailsProducts">
            <div
              style={{
                backgroundColor: "crimson",
                color: "white",
                borderRadius: "3px",
                padding: "5px",
              }}
            >
              {product.countInStock > 0 ? (
                <span className="success">In Stock</span>
              ) : (
                <span className="danger">Unavailable</span>
              )}
            </div>
            <img src={product.image} alt={product.name} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "300px",
              }}
            >
              <div>
                <p className="proname">Name: {product.name}</p>
                <p className="price">Price: ${product.price}</p>
              </div>
              <div className="row">
                <div>Qty</div>
                <div style={{position:'relative',left:'-30px'}}>
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(15).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="skumod">
              <p className="sku">SKU: {product.sku}</p>
              <p className="model">MODEL: {product.model}</p>
            </div>
            <p className="des">Description: {product.description}</p>
            <div className="buycart">
              <Link to="/shipping">
                <button className="buynow">Buy Now</button>
              </Link>
                <button className="addtocart" onClick={buyHandler}>Add to cart</button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h3>Similar Products</h3>
            <small>
              {similarProducts.length}{" "}
              {similarProducts.length > 1 ? "items" : "item"} found
            </small>
          </div>
          <div className="cameras">
            {similarProducts.map((item) => {
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
        </div>
      )}
    </>
  );
};

export default ProductDetails;
