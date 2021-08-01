import React from "react";

function Header(){
    return (
        <nav className="purple lighten-2">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Movies</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

export {Header};