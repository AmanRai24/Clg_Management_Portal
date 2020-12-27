import React, { Component } from 'react';

class header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand nav-heading ml-4" href="/">
                    <i className="fas fa-graduation-cap"></i> COLLEGE PORTAL
                </a>
            </nav>
        );
    }
}

export default header; 