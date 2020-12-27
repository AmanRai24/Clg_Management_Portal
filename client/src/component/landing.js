import React, { Component } from 'react';
// import { Link,Redirect } from 'react-router-dom';

class landing extends Component {
    render() {
        return (
            <div className="landing-container">
                <div className="description">
                    <span className="heading">College Portal</span>
                    <div className="button">
                        <button type='button' className="btn btn-danger btn-lg">Teacher</button>
                        <button  type='button' className="btn btn-primary m-2 btn-lg">Student</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default landing; 