import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { useNavigate } from "react-router-dom";

import "./Cart.scss";

const Cart = () => {
    let navigate = useNavigate()
    const { cartItems, setShowCart, cartSubTotal } = useContext(Context);

 

    

    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Watch later</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>

                {!cartItems.length && (
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No shows in the bookmarks</span>
                        <button className="return-cta" onClick={() => setShowCart(false)}>
                            RETURN TO website
                        </button>
                    </div>
                )}

                {!!cartItems.length && (
                    <>
                        <CartItem />
                      
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
