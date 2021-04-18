import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeCartItem } from "../redux/actions/ProductAction";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const id = props.match.params.id;
  //???????????????
  const qty = props.location.search !== undefined
    ? Number(props.location.search.split("=")[1])
    : 1;
  // console.log(id);
  const cartProducts = useSelector((state) => state.cart);
  // console.log(cartProducts)
  const { cartItems } = cartProducts;
  // console.log(cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCart(id, qty));
  }, [dispatch, id, qty]);
  const deleteHandler = (id) => {
    //delete action
    dispatch(removeCartItem(id));
  };
const checkoutHandler=()=>{
  window.alert('Support My Work!')
}
  return (
    <div className="askhcae">
      <div className="cartshop">
        <p className="mycart">
          My Cart{" "}
          <span className="totalproincart">
            {cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
        </p>
        <Link to="/">
          <button className="ContinueShopping">Continue Shopping</button>
        </Link>
      </div>
      {cartItems.length === 0 ? (
        <p className="emptycart">Cart Is Empty</p>
      ) : (
        <div className="askhcae">
          {cartItems.map((x) => {
            const { name, image, id, price, qty } = x;
            return (
              <div key={id} className="cartItems">
                <div className="cartkjxs">
                  <img src={image} alt={name} />
                  <div className="ksnksa">
                    <p className="iuhd">{name}</p>
                    <button
                      className="qoiehd"
                      onClick={() => deleteHandler(id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: "15px",
                  }}
                >
                  <p>Quantity</p>
                  <select
                    value={qty}
                    onChange={(e) =>
                      dispatch(addToCart(id, Number(e.target.value)))
                    }
                  >
                    {/* put countInStock in at 30 */}
                    {[...Array(30).keys()].map((x) => {
                      return (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="akjc">
                  <p className="oiwd">Unit Price</p>
                  <p className="elwkd"> $ {price}</p>
                </div>
                <div className="akjc">
                  <p className="oiwd">Total Price</p>
                  <p className="elwkd">$ {price * qty}</p>
                </div>
              </div>
            );
          })}
          <div className="col-1">
            <div className="card card-body">
              <ul>
                <li>
                  <h2 className='subtotal'>
                    <span className='subb'>Subtotal</span> ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
                    : $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                  </h2>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={checkoutHandler}
                    className="checkout"
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Checkout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
