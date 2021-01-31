import React from "react";
import { useStateValue } from "../stateProvider";
import DepartmentLinks from "./DepartmentLinks";
import Login from "./Login";
import "./dashboard.css";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import GraphCard from "./GraphCard";
import DashboardNavigation from "./DashboardNavigation";

const Dashboard = () => {
  const [{ user }] = useStateValue();
  const history = useHistory();
  console.log(user);
  const handleSignOut = () => {
    if (user) {
      auth.signOut();
      history.replace("/");
    }
  };

  // if (user) {
  return user ? (
    <div className="dashboard">
      <DashboardNavigation />

      <div className="dashboard__landingPage">
        <div className="dashboard__CXO">
          {/* Basic Information about all the departments for the CXO account */}
          <div className="dashboard__graphCards">
            <GraphCard color="green" />
            <GraphCard color="red" />
            <GraphCard color="orange" />
          </div>
          <div className="dashboard__graphCards">
            <GraphCard color="yellow" />
            <GraphCard color="blue" />
            <GraphCard color="green" />
          </div>
          <div className="dashboard__graphCards">
            <GraphCard color="lightblue" />
            <GraphCard color="pink" />
            <GraphCard color="black" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Login err="Please login with your username and password first" />
  );
};

export default Dashboard;
