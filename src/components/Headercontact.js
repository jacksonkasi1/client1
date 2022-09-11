import React from "react";
import Data from "./Data";
import { BrowserRouter as Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header-contact">
            <span className="text-black">
                <Data />
            </span>
            <span className="hamburger">
                <a href="/">
                    <button className="hamburger-black-btn">
                    </button> 
                </a>
            </span>
        </div>
    );
}

export default Header;
