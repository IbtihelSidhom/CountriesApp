import React from "react";
import { logo } from "../../assets/icons/index";
import "./Header.css";


function Header(props) {

    return (
        <header>
            <img src={logo} alt="logo" className="logo" />

        </header>
    );


};

export default Header;