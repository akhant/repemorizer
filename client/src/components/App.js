import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";
import configureStore from "../store";
import Main from "./Main";
import Header from "./Header";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Dictionary from "./Dictionary";
import RepeatPage from "./RepeatPage";
import HomePage from "./HomePage";
import setAuthHeader from "../utils/setAuthHeader";
import { fetchCurrentUser, logout } from "../actions";
import NotFoundPage from "./NotFoundPage";

import "../assets/js";
//import "../assets/styles/bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import "../assets/styles/styles.sass";

const history = createBrowserHistory();

const store = configureStore();

if (localStorage.JWT) {
  setAuthHeader(localStorage.JWT);
  store.dispatch(fetchCurrentUser());
} else {
  store.dispatch(logout());
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/dashboard" exact component={Main} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/dictionary" exact component={Dictionary} />
          <Route path="/repeat" exact component={RepeatPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
