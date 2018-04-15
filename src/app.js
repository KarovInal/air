import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/app';
import stadiums from 'Data/stadiums';
import './style.css';
import MapPage from 'Pages/map-page';
import GraphPage from 'Pages/graph-page';
import TeamPage from 'Pages/team-page';
import VouterPage from 'Pages/vouter-page';
import AnekPage from 'Pages/anek-page';
import './style.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

render(
  <Provider store={store}>
    <Router>
      <div>
        <App />
        <Route exact path="/" component={ MapPage } />
        <Route path="/maps" component={ MapPage } />
        <Route path="/graph-page" component={ GraphPage } />
        <Route path="/teams" component={ TeamPage } />
        <Route path="/vouter" component={ VouterPage } />
        <Route path="/anek" component={ AnekPage } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
