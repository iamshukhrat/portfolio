import React, { Component, Suspense } from "react";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  withRouter,
} from "react-router-dom";

// Import Css
import "./assets/css/materialdesignicons.min.css";
import "./Apps.scss";

import "./assets/css/colors/default.css";

const Personal = React.lazy(() => import("./pages"));
const PageError = React.lazy(() => import("./pages/PageError"));

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Personal: Personal,
      PageError: PageError
    };
  }
  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Router>
          <Suspense fallback={this.Loader()}>
            <Switch>
              <Route
                  path="/"
                  exact='false'
                  component={this.state.Personal}
                  key='1'
              />
              <Route
                  path="/"
                  exact='false'
                  component={this.state.PageError}
                  key='2'
              />
            </Switch>
          </Suspense>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
