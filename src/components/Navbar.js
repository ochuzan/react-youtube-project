import { Component } from "react";
import './Navbar.css';
import {Link} from "react-router-dom";

class Navbar extends Component {
    render(){
        return(
            <header>
                <h1>YouTube</h1>
                <nav>
                    <ul>
                        <li>
                           <Link to = "/"> Home </Link>
                        </li>
                        <li>
                           <Link to = "/About"> About </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;