import { Component } from "react";
import {Link} from "react-router-dom";
import './Navbar.css';

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
                           <Link to = "/about"> About </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;