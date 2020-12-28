import React, { Component } from 'react';
import { connect } from 'react-redux';
import Landing from './landing';
import { Login ,Signup,home } from './teacher';
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