/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import mdx from './src/**/*.mdx';

const root = document.getElementById('root');

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {Object.keys(mdx).map(path => <li key={path}><Link to={`/${path}`}>{path}</Link></li>)}
          </ul>
        </nav>
        <Switch>
          {Object.entries(mdx).map(([path, module]) => {
            const RouteComponent = module[path].default;
            return (
              <Route path={`/${path}`} key={path}>
            <RouteComponent />
          </Route>
            )
          })}
          <Route path="/">
            <div>froo</div>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

render(<App />, root);