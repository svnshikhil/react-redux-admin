import React from 'react';
import { Router, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Simple from './layouts/Simple';
import Full from './layouts/Full';

import { history } from './redux/_helpers';
import { AuthRoute } from './components/AuthRoute';
import { Login } from './views/Login';
import Dashboard from './views/Dashboard';
import Page500 from './views/Errors/Page500';
import Profile from './views/Profile';

class Main extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          {/* <AuthRoute path="/login" component={Login} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/page500" component={Page500} />
          <Full>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Redirect from="*" to="/" />
            </Switch>
          </Full>
        </Switch>
      </Router>
    );
  }
}

function mapState(state) {
  return {};
}

const actionCreators = {
};

const connectedMain = connect(mapState, actionCreators)(Main);
export { connectedMain as Main };