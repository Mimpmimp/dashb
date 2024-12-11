import React from "react";
import './SB.css';
import { MdDashboardCustomize } from "react-icons/md";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { IoNavigate } from "react-icons/io5";
import { PiStorefrontBold } from "react-icons/pi";
import { FaChartPie } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";

const SB = () => {
    return(
        <div className='sideBar'>
        <div className="logoDiv">
        <LiaMoneyBillWaveAltSolid className="cash"/>
            <h2>Multiply.</h2>
        </div>
        <div className="menuDiv">
            <h3 className="divTitle">QUICK MENU</h3>
                <a href="#" className="menuLink">
                <MdDashboardCustomize className="icon"/> 
                Dash Board</a>
                <a href="#" className="menuLink">
                <BiSolidPurchaseTagAlt className="icon"/> 
                My Orders</a>              
                <a href="#" className="menuLink"> 
                <IoNavigate className="icon"/>
                Explore</a>               
                <a href="#" className="menuLink"> 
                <PiStorefrontBold className="icon"/>
                Products</a> 
        </div>
        <div className="menuDiv">
            <h3 className="divTitle">SETTINGS</h3>
                <a href="#" className="menuLink">
                <FaChartPie className="icon"/> 
                Charts</a>
                <a href="#" className="menuLink">
                <FaArrowTrendUp className="icon"/> 
                Trends</a>              
                <a href="#" className="menuLink"> 
                <IoMdContact className="icon"/>
                Contact</a>               
                <a href="#" className="menuLink"> 
                <FaRegCreditCard className="icon"/>
                Billing</a> 
        </div>
        </div>
    )
}

export default SB