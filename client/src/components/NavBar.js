import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';

//import './App.css';


class Nav extends React.Component {
    render() {
        return(
            <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
                <Link className="navbar-brand" to="/">Micro Blog</Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">
                        Create a Micro Post
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">
                        About Us
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </Router>
        )
    }
}

export default Nav;