import React, { Component } from 'react';
import Header  from './header';

class landing extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="landing-container">
                    <div className="description">
                        <span className="heading">College Portal</span>
                        <div className="button">
                            <a href='/teacher/login' type='button' className="btn btn-danger btn-lg">Teacher</a>
                            <a type='button' className="btn btn-primary m-2 btn-lg">Student</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default landing; 