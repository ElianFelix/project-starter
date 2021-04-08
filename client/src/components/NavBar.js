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
      return <h1>Hello, {this.props.name}</h1>;
    }
  }