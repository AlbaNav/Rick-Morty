import React from "react";
import {Link} from "react-router-dom"
import Profile from "../Profile/Profile";
import "./Header.scss";


export default function Header(){
    return <header>
        <nav className="Header">
            <Link to="/"><img src="https://res.cloudinary.com/dua6dm8ik/image/upload/v1644147269/rickandmorty_ezp5td.png" alt="Rick y Morty logo"/></Link>
            <Link to="/characters"><button className="btn1">characters</button></Link>
            <Link to="/Locations"><button className="btn2">Locations</button></Link>
            <div className="profile"> <Profile/>  </div>
                  </nav>
    </header>
}