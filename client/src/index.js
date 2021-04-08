import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Nav from './components/NavBar';  //changed to test Nav
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));  //Changed to test Nav

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
