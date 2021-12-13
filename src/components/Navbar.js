import { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    render(){
        return(
            <header>
                <img id="logo" src="https://download.logo.wine/logo/YouTube/YouTube-Logo.wine.png" alt= "YouTube Logo"/>
                <nav>
                    <ul>
                        <li>
                           <Link to = "/" > Home </Link>
                        </li>
                        <li>
                           <Link to = "/about" > About </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;