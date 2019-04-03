import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Redirect, Switch } from 'react-router-dom';

import DemoGroupingSelector from '../select/DemoGroupingSelector';
import DemoSimpleConstraintGroupingSelector from '../select/DemoSimpleConstraintGroupingSelector';
import DemoSimple from '../select/DemoSimple';
import DemoMev from '../select/CE-usage/DemoMEV';
import DemoP2A from '../select/P2A-usage/DemoP2A';

const navSpec = [
  { label: 'GS', path: '/GS', component: DemoGroupingSelector },
  { label: 'SCGS', path: '/SCGS', component: DemoSimpleConstraintGroupingSelector },
  { label: 'Simple', path: '/Simple', component: DemoSimple },
  { label: 'MEV', path: '/MEV', component: DemoMev },
  { label: 'P2A', path: '/P2A', component: DemoP2A },
];


export default class App extends React.Component {
  render() {
    return (
      <Router basename={'/#'}>
        <div>
          <h1>pcic-react-components</h1>
          <Nav variant={'tabs'}>
            {
              navSpec.map(({label, path}) => (
                // Cannot seem to get react-router-bootstrap to work with
                // React Bootstrap 1.0. Hence this somewhat laborious way
                // of managing which nav item is active.
                <Route path={path}>
                  {
                    ({ match }) => (
                      <Nav.Item eventKey={path}>
                        <Nav.Link href={path} active={match}>{label}</Nav.Link>
                      </Nav.Item>
                    )
                  }
                </Route>
              ))
            }
          </Nav>

          <Switch>
            {
              navSpec.map(({path, component}) => (
                <Route path={path} component={component}/>
              ))
            }
            <Redirect to={'/Simple'}/>
          </Switch>
        </div>
      </Router>
    );
  }
}
