import React, { Component } from 'react';
import Nav from '../components/NavBar';
import Footer from '../components/Footer';
import { Redirect } from 'react-router-dom';

class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Footer />
            </div>
            
        );
    }

}

export default ProfilePage;