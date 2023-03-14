// The naming of file should start with Uppercase
//Function name should be same as file name
// Link tags have to be instead of a tag as a href doesn't work
import React from "react"
import { Link } from "react-router-dom"
function Navbar(){
    return(
        <div className="navbar">
            
            <Link to = "/"><i className="fa-brands fa-github fa=2x"></i>GitHub Search Engine</Link>
            <div>
                <Link to="/contact">Contact us</Link>
                <Link to="/about">About us</Link>
            </div>
        </div>
    )
}

export default Navbar