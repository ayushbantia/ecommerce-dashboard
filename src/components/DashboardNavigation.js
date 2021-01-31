import React from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { useStateValue } from "../stateProvider";
import DepartmentLinks from "./DepartmentLinks";
import "./dashboardNavigation.css";

function DashboardNavigation() {
  const [{ user }] = useStateValue();
  const history = useHistory();
  console.log(user);
  const handleSignOut = () => {
    if (user) {
      auth.signOut();
      history.replace("/");
    }
  };
  return (
    <div className="dashboard__navigation">
      {/* Left navigation section  */}
      <span className="dashboard__signIn">
        {/* Profile Information */}

        <div className="dashboard__signInIntro">
          <img
            src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button-by-vexels.png"
            alt="profile_photo"
          />
          <p>{user ? "Hello, " + user.email : "Hello, Guest"}</p>
        </div>

        {/* Signout button */}
        {user ? <button onClick={handleSignOut}>Sign Out</button> : ""}
      </span>

      {/* Department heading */}
      <div className="dashboard__navigationHeading">
        <p>Departments</p>
      </div>
      <div className="dashboard__navigationDepartmentLinks">
        {/* All the department links will go here. */}
        <DepartmentLinks
          departmentName="Sales & Management"
          subDepartments={[]}
        />
        <DepartmentLinks departmentName="Human Resources" subDepartments={[]} />
        <DepartmentLinks departmentName="Logistics" subDepartments={[]} />
        <DepartmentLinks departmentName="Procurement" subDepartments={[]} />
        <DepartmentLinks departmentName="Manufacturing" subDepartments={[]} />
        <DepartmentLinks departmentName="IT" subDepartments={[]} />
      </div>
    </div>
  );
}

export default DashboardNavigation;
