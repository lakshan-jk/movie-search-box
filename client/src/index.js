import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Route, Router, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
import MovieDetails from "./movieDetails";

const history = createBrowserHistory();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route path="/movie-details/:id" component={MovieDetails} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  rootElement
);
