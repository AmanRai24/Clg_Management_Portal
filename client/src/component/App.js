import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './landing';
import { Login ,Signup,home } from './teacher';
import {userLogin,userSignup } from './student';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

class App extends Component {
  render() {
    const { auth } = this.props;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/teacher/login' component={Login} />
            <Route exact path='/teacher/signup' component={Signup} />
            <Route exact path='/teacher/home' component={home} />

            {/* <Route exact path='/student'/> */}
            <Route exact path='/student/login' component={userLogin} />
            <Route exact path='/student/signup' component={userSignup} />
          </Switch>

        </div>
      </Router>

    );
  }
}

function mapStoreToProps(state) {
  return {
    auth: state.auth,
  };
}
export default connect(mapStoreToProps)(App);