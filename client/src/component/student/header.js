import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isUserToken } from '../../helpers/utils';
import { userlogout } from '../../Action/student';

class header extends Component {
    constructor(props){
        super(props)
    }
    handleUserLogout = () =>{
        this.props.dispatch(userlogout());
    }
    
    render() {
        const {isLoggedin,error,inProgress} = this.props.user;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand nav-heading ml-5" href="#">
                    <i className="fas fa-home icon pr-2"></i> COLLEGE PORTAL
                </a>
                {isUserToken()  && ( 
                        <div className="ml-auto mr-0">
                            <button type="button" className="btn btn-info mr-5">Profile</button>
                            <button type="button" className="btn btn-outline-info" onClick={this.handleUserLogout}>Logout</button>
                        </div>
                    )
                }   
                {!isUserToken() && (
                    <div className="ml-auto mr-0">
                        <a href='/student/login' type="button" className="btn btn-outline-info mr-5">Login</a>
                        <a href='/student/signup' type="button" className="btn btn-outline-info">Signup</a>
                    </div>
                )}
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
    //   auth: state.auth,
      user: state.user,
    };
}
export default connect(mapStateToProps)(header); 