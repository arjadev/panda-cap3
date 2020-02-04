import React from 'react'
import './index.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Index from './screens';
import Notfound from './screens/notfound';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    )
  }
}