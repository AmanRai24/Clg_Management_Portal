import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { isToken } from '../../helpers/utils';
import { Header,AddAssignment,Allassignment } from './index';

class home extends Component {
    constructor(props){
        super(props)
    }
    componentDidUpdate(){
    }
    render() {
        let { isLoggedin} = this.props.auth;
        isLoggedin = (isLoggedin || isToken());
        if(!isLoggedin){
            return <Redirect to='/teacher/login' />;
        }
        return (
            <div>
                <Header />
                <AddAssignment />
                <div className="display-properties">
                    <Allassignment />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      auth: state.auth,
    };
}
export default connect(mapStateToProps)(home); 