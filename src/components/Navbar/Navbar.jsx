import React from 'react'
import "./Navbar.css"
import logo from "../../assets/p.jpg"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div id="Nav">
        <div className="nav1">
            <div className="logo">
                <img src={logo} alt="" width="50px"/>
                <h1>Private Property Rental</h1>

            </div>
            <div className="search">
                <input type="text" placeholder='Search Destination'/>
                <button>Search <CiSearch /></button>
            </div>
            <div className='ham'>
                <button id="btn1">List Your Home</button>
                <button id="btn2">
                    <GiHamburgerMenu id="svg1"/>
                    <CgProfile id="svg2"/>
                    
                    </button>
            </div>
        </div>
        <div className="nav2"></div>
    </div>
  )
}

export default Navbar