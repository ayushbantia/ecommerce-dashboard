import { Link, makeStyles } from "@material-ui/core";
import React from "react";
import "./departmentLinks.css";
const DepartmentLinks = ({ departmentName, subDepartments }) => {
  const subdepartmentLink_style = {
    color: "lightgray",
    padding: "8px 10px",
    fontSize: "9pt",
    fontWeight: "600",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "2px",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <div className="departmentLinks">
      <div className="departmentLinks__heading">
        <Link
          to="/dashboard"
          className="departmentLinks__link"
          // className={classes.root}
          // hover
          // classes={{ hover: classes.hover }}
        >
          {departmentName}
        </Link>
      </div>
      <div className="departmentLinks__subDepartments">
        {subDepartments.map((sub) => {
          return (
            <Link to="/dashboard" style={subdepartmentLink_style}>
              {sub}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default DepartmentLinks;
