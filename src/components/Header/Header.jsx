import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import { Context } from "../../utils/context";
import Cart from "../Cart/Cart";
import SideNav from "../SideNav/SideNav";



import { HiOutlineMenuAlt2 } from "react-icons/hi";


const Header = () => {
  
    const [scrolled, setScrolled] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const { cartCount, showCart, setShowCart,setShowSidenav ,showSidenav,user,SetUser } = useContext(Context);
    console.log(user)
    return (
        <>
            <header
                className={`main-header ${scrolled ? "sticky-header" : ""}`}
            >
                <div className="header-content">
                    <ul className="left">
                        <li onClick={() => navigate("/")}>Home</li>
                      
                    </ul>
                    <div className="hamburger">
                    <HiOutlineMenuAlt2  onClick={() => setShowSidenav(true)}/>
                    </div>
                    <div className="center" onClick={() => navigate("/")}>
                        Atlantic City Network
                    </div>
                    <div className="right">
                        <TbSearch onClick={() => setSearchModal(true)} />
                        <AiOutlineUser onClick={() => navigate("/login")}/>
                         {user && user.email}
                        <span
                            className="cart-icon"
                            onClick={() => setShowCart(true)}
                        >
                            <AiOutlineHeart />
                            {!!cartCount && <span>{cartCount}</span>}
                        </span>
                    </div>
                </div>
            </header>
            {searchModal && <Search setSearchModal={setSearchModal} />}
            {showCart && <Cart />}
            {showSidenav && <SideNav />}
        </>
    );
};

export default Header;
