import { Component } from "react";
// import './App.css';

class Navbar extends Component {
    render(){
        return(
            <header>
                <h1>YouTube</h1>
                <nav>
                    <ul>
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Navbar;