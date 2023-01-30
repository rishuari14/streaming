import React, { useContext } from "react";
import { Context } from "../../../utils/context";
import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import "./CartItem.scss";
const CartItem = () => {
    const navigate = useNavigate();
    const { cartItems, handleRemoveFromCart, handleCartProductQuantity } =
        useContext(Context);

    return (
        <div className="cart-products">
            {cartItems?.map((item) => (
                <div
                    className="search-result-item"
                    key={item.id}
                    onClick={() => {}}
                >
                    <div className="image-container" >
                        <img onClick={() => navigate("/product/" + item.id)}
                            src={item.image.medium
                              
                            }
                        />
                    </div>
                    <div className="prod-details">
                        <span className="name"onClick={() => navigate("/product/" +item.id)} >{item.name}</span>
                        <MdClose
                            className="close-btn"
                            onClick={() => handleRemoveFromCart(item)}
                        />
                        
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartItem;
