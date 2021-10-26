
import React from 'react'
import { FaSistrix } from "react-icons/fa";

const Navbar = () => {

    const setActiveLink = e => {
        // const links = document.getElementsByTagName("a");
        const links = document.getElementsByClassName("active");


        Array.from(links).forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
    };

    return (
        <div className="row status">
            <div className="col  top-change" style={{color:'gray',cursor:'pointer'}}><span className="active" onClick={setActiveLink}>Pending</span></div>
            <div className="col  top-change"style={{color:'gray',cursor:'pointer'}}><span onClick={setActiveLink}>Completed</span></div>
            <div className="col d-none d-sm-block">
                <div className="main">
                    <div className="form-group has-search">
                        <span className=" form-control-feedback"><FaSistrix/></span>
                        <input type="text" className="form-control" placeholder="Search Order"/>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
   
    )
}
export default Navbar;
