import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";

import { FcExpand, FcRight } from "react-icons/fc";

import { makePaymentRequest } from "../../utils/api";
import { useNavigate } from "react-router-dom";

import "./SideNav.scss";

const SideNav = () => {
    let navigate = useNavigate()
    const { setShowSidenav } = useContext(Context);
    const [posterExpand,setPosterExpand] = React.useState(false)




    return (
        <div className="sidenav-panel">
            <div
                className="opac-layer"
                onClick={() => setShowSidenav(false)}
            ></div>
            <div className="cart-content">
                <ul id="MobileNav" className="mobile-nav siteNavigation">
                    <li className="lvl1"><a href="/streaming">Home</a></li>
                
                                                         <li className="lvl1"><a href="/streaming/#/login">Login</a></li>
                                                       
                  </ul>
           




            </div>
        </div>
    );
};

export default SideNav;
