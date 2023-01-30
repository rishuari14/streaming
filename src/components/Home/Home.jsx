import React, { useEffect, useContext } from "react";
import "./Home.scss";


import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";
import axios from "axios";

const Home = () => {
    const { products, setProducts, categories, setCategories,user,setUser } =
        useContext(Context);
    useEffect(() => {
        gettest()
    }, []);

  
 
    const gettest = () => {
        fetchDataFromApi("https://api.tvmaze.com/shows").then((res) => {
            console.log(res)
            setProducts(res);
        });
            
    
            
            
    
    };

    return (
        <div>
          
            <div className="main-content">
                <div className="layout">
                    <Products
                        headingText="Drama"
                        products={products}
                    />
                </div>
                
            </div>
            
        </div>
    );
};

export default Home;
