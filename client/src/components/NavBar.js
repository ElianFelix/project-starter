import React from 'react';
import logo from './tl-logo.png';
import './NavBar.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';




class Nav extends React.Component {
    render() {
        return(
            <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3 fixed-top">
                <img src={logo} className="resize navbar-brand" />

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <a class="nav-link">Sign Up</a>
                    </li>

                    <li class="nav-item dropdown">

                        <a class="nav-link dropdown-toggle navbar-toggler-icon" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    
                </ul>

            </nav>
            </Router>
        )
    }
}

export default Nav;