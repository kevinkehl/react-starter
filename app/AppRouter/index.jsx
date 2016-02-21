import App from 'App';
import History from 'history';
import AppIndex from 'AppIndex';
import React from 'react';
import { Route, Router } from 'react-router';

export default class AppRouter extends React.Component {
  render() {
    return (
      <Router history={History}>
        <Route path='' component={App}>
          <Route path='/' component={AppIndex} />
        </Route>
      </Router>
    );
  }
};
