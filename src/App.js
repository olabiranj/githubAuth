import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Index from "./pages/index";
import Dashboard from "./pages/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    </Provider>
  );
};

export default App;
