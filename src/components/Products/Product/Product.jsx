import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../utils/context";
import "./Product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";


const Product = ({ title,image, id,quickaccess }) => {
    const { handleAddToCart } = useContext(Context);
      const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const [easyaccess,seteasyaccess] = useState(false)
    const [easyaccessid,seteasyaccessid]=useState(0)
    return (
        <div
            className="product-card"
         
            onMouseEnter={() => {
                seteasyaccess(true)
                seteasyaccessid(id)
                console.log(id)
              }}
              onMouseLeave={() => {
                seteasyaccess(false)
                seteasyaccessid(0)
              }}
        >
            <div className="thumbnail">
                <img onClick={() => navigate("/product/" + id)}
                    src={
                        image.medium
                    }
                />
                   {easyaccess &&
                <div className="easyaccess">
                    <div  className="easyaccessbutton" onClick={() => {
                                    handleAddToCart(quickaccess, quantity);
                                    setQuantity(1);
                                }}><AiOutlineHeart/></div>
                </div>
}
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
              
            </div>
        </div>
    );
};

export default Product;
