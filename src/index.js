import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Pages/home/Home';
import Error404 from './Pages/error404/Error404';
import Portafolio from './Pages/portafolio/Portafolio';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/home">
            <Home />
        </Route>

      
        <Route path="/portafolio">
          <Portafolio />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>

        <Route path="*">
            <Error404 />
        </Route>

      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


