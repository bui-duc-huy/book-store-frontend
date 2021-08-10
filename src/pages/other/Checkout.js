import PropTypes from "prop-types";
import React, { Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "../../contexts";
import { db } from "../../firebase";
import { deleteAllFromCart } from "../../redux/actions/cartActions";

const Checkout = ({ location, cartItems, currency }) => {
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const noteRef = useRef();
  const { addToast } = useToasts();
  const { pathname } = location;
  let cartTotalPrice = 0;

  const history = useHistory();

  const { isAuth, currentUser } = useAuth();

  const handleCheckout = async () => {
    if (!isAuth) {
      history.push("/login-register");
    } else {
      const orders = db.collection("orders_table");
      orders.add({
        emailBuyer: currentUser.email,
        products: cartItems,
        nameBuyer: nameRef.current.value,
        addressBuyer: addressRef.current.value,
        phoneBuyer: phoneRef.current.value,
        noteBill: noteRef.current.value,
        totalPrice: cartTotalPrice,
        executed: false,
      });
      deleteAllFromCart(addToast);
      history.push("/checkout-done");
    }
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Bookier | Checkout</title>
        <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Checkout
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Your Name</label>
                          <input type="text" ref={nameRef} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Street Address</label>
                          <input
                            className="billing-address"
                            placeholder="House number and street name"
                            type="text"
                            ref={addressRef}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Phone</label>
                          <input type="text" ref={phoneRef} />
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4>Additional information</h4>
                      <div className="additional-info">
                        <label>Order notes</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
                          name="message"
                          defaultValue={""}
                          ref={noteRef}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                    finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                    finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? (
                                          finalDiscountedPrice *
                                          cartItem.quantity
                                        ).toFixed(2) + ' VND'
                                      : (
                                          finalProductPrice * cartItem.quantity
                                        ).toFixed(2) + ' VND'}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            <li>Free shipping</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {cartTotalPrice.toFixed(2) + ' VND'}
                            </li>
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Payment Method</li>
                            <li>
                            <button
                          onClick={e => {
                          }}
                        >
                        </button><Link
                                to={
                                    process.env.PUBLIC_URL +
                                    "/"
                                }
                              >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/get-cash.png" 
                                    }
                                    alt=""
                                    width="50" height="50"
                                />
                              </Link></li>
                            <li> 
                              <Link
                                to={
                                    process.env.PUBLIC_URL +
                                    "/"
                                }
                              >
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/logo_momo.png" 
                                    }
                                    alt=""
                                    width="50" height="50"
                                />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover" onClick={handleCheckout}>
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/collection"}>
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllFromCart: (addToast) => {
      dispatch(deleteAllFromCart(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
