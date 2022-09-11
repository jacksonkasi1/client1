import React from "react";
import Data from "./Data";
import { BrowserRouter as Link} from 'react-router-dom';

function Header() {
    return (
        <div className="header-main">
            <span className="text-white">
                <Data />
            </span>
            <span className="hamburger">
                <a href="/contacts">
                    <button className="hamburger-btn">
                    </button> 
                </a>
            </span>
        </div>
    );
}

export default Header;
