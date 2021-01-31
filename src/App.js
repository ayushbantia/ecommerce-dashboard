import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth, db } from "./firebase";
import { useStateValue } from "./stateProvider";
import TestGraph from "./TestGraph";

const App = () => {
  // const history = useHistory();

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // db
    // .collection('users')
    // .doc(user.uid)
    // .get()
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
          user_category: null,
        });
      } else {
        dispatch({
          type: "SIGNOUT_USER",
          user: null,
        });
      }
    });
    // console.log(user);
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard">
            <Header />
            <Dashboard />
          </Route>
          <Route path="/testgraph">
            <TestGraph />
          </Route>
          <Route exact path="/">
            <Header />
            <Login />
          </Route>
          <Route exact path="/register">
            <Header />
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
