import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./utils/context";
import Login from "./components/Login/Login";



function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                {/* <Newsletter /> */}
                {/* <Footer /> */}
            </AppContext>
        </BrowserRouter>
    );
}

export default App;
