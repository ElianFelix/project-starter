import React from 'react';
import './Footer.css';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <p>Created by PDF Media</p>
        );
    }
}



export default Footer;