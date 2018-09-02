import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import home from '@/pages/home'
import HelpCenter from '@/pages/helpcenter';
import Balance from '@/pages/balance';
const record = () => <div>record</div>

export default class RouteConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home}></Route>
          <Route path="/record" component={record}></Route>
          <Route path="/balance" component={Balance}></Route>
          <Route path="/helpcenter" component={HelpCenter}></Route>
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}