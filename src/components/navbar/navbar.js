import React from "react";
import "./navbar.css"

const Navbar = () =>{

    return(
       <div className="Navbar" >
            <div className="section">
                <label>This is Interior</label>
            </div>
            <nav>
                <ul>
                    <li><a href="/home"> Home </a></li>
                    <li><a href="/Collection"> Collection </a></li>
                    <li><a href="/About"> About </a></li>
                    <li><a href="/Contact"> Contact </a></li>
                </ul>
            </nav>

        </div>
    );
}
export default Navbar