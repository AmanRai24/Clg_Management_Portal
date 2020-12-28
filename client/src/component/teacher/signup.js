import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from './index';
import { startAdminSignup, adminSignup,adminSignupFailed } from '../../Action/auth';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            email: '',
            name: '',
            subject:'',
            password: '',
            confirmPassword: '',
        }
    }
    handleInputChange = (field, value) => {
        this.setState({
          [field]: value,
        });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        const { email,name, subject, password, confirmPassword, } = this.state;

        if(confirmPassword !== password){
            this.props.dispatch(adminSignupFailed('Password and confirm-password not match!'));
        }else if (email&& name && subject && password && confirmPassword ) {
            this.props.dispatch(startAdminSignup());
            this.props.dispatch(adminSignup(email,name,subject, password, confirmPassword, ));
        }else{
            this.props.dispatch(adminSignupFailed('Enter valid field!'));
        }
    };
    render() {
        const { inProgress, error, isLoggedin } = this.props.auth;
        if (isLoggedin) {
            return <Redirect to='/teacher/home' />;
        }
        return (
            <div>
                <Header />
                <form className="login-form">
                    <span className="login-signup-header">SignUp</span>
                    {error && <div className="alert error-dailog">{error}</div>}
                    <div className="field">
                        <input
                        type="text"
                        placeholder="Name"
                        required
                        onChange={(e) => this.handleInputChange('name', e.target.value)}
                        value={this.state.name}
                        />
                    </div>
                    <div className="field">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            onChange={(e) => this.handleInputChange('email', e.target.value)}
                            value={this.state.email}
                        />
                    </div>
                    <div className="field">
                        <input
                            type="subject"
                            placeholder="Subject"
                            required
                            onChange={(e) => this.handleInputChange('subject', e.target.value)}
                            value={this.state.subject}
                        />
                    </div>
                    <div className="field">
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        onChange={(e) =>this.handleInputChange('password', e.target.value)}
                        value={this.state.password}
                    />
                    </div>
                    <div className="field">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            onChange={(e) => this.handleInputChange('confirmPassword', e.target.value)}
                            value={this.state.confirmPassword}
                        />
                    </div>
                    <div className="field">
                    <button onClick={this.onFormSubmit} disabled={inProgress}>
                        Signup
                    </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => ({
    auth,
});
export default connect(mapStateToProps)(Signup);