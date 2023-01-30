import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

import useFetch from "../../hooks/useFetch";


import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
    const [quantity, setQuantity] = useState(1);
    const { id } = useParams();
    const { handleAddToCart } = useContext(Context);
    const { data } = useFetch(`https://api.tvmaze.com/shows/${id}?embed=cast`);

    const decrement = () => {
        setQuantity((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };
    const increment = () => {
        setQuantity((prevState) => prevState + 1);
    };

    if (!data) return;
    const product = data;
    let cast = data._embedded.cast.map(a => a.person.name).slice(0,3);


    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img
                            src={
                               product.image.original
                            }
                        />
                    </div>
                    <div className="right">
                        <span className="name">{product.name}</span>
                        <span  className="name"> <span className="name">{product.premiered
.slice(0,4)}</span> | <span className="name">{product.runtime} mins</span></span>
                        <span className="name">cast : {cast.map(items =><span className="name">{items} | </span>)}</span>
                        <span className="price">{product.summary.replace(/(<([^>]+)>)/gi, "")}</span>

                        <div className="cart-buttons">
                            <button
                                className="add-to-fav-button"
                                onClick={() => {
                                    handleAddToCart(data, quantity);
                                    setQuantity(1);
                                }}
                            >
                                <AiOutlineHeart/>
                                ADD TO FAVORITES
                            </button>
                        </div>

                        <span className="divider" />
                        <div className="info-item">
                            <span className="text-bold">
                                Genre:{" "}
                                <span>
                                    {
                                        product.genres[0]
                                    }  
                                    {
                                        ","
                                    }
                                    {
                                        product.genres[1]
                                    }
                                </span>
                            </span>
                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16} />
                                    <FaTwitter size={16} />
                                    <FaInstagram size={16} />
                                    <FaLinkedinIn size={16} />
                                    <FaPinterest size={16} />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                {/* <RelatedProducts
                    productId={id}
                    categoryId={product.categories.data[0].id}
                /> */}
            </div>
        </div>
    );
};

export default SingleProduct;
