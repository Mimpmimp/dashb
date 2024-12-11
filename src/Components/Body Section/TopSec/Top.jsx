import React from "react";
import './Top.css'
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineMessage } from "react-icons/ai";
import { FaBell } from "react-icons/fa6";

const Top = () => {
    return(
        <div className="topSec">
            <div className="headerSection">
                <div className="title">
                    <h1>Welcome to Multiply.</h1>
                    <p>Platform that make us rich.</p>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Search Dashboard"/>
                    <BiSearchAlt2 className="icon" />
                </div>
                <div className="adminDiv">
                <AiOutlineMessage className="icon"/>
                <FaBell className="icon"/>
                <div className="Image">
                    <img src="#" alt="Image name" />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Top