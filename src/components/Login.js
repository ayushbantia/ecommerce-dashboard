import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { auth, db } from "../firebase";
import TextField from "@material-ui/core/TextField";
import "./login.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0),
      width: "40ch",
      height: "6ch",
    },
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
    marginLeft: 2,
  },
}));

function Login({ err = "" }) {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(err);
  // Authentication with firebase on form submit
  const handleSignIn = (e) => {
    e.preventDefault();

    // Login Authentication
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/dashboard");
          // alert("User signed in.");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="login">
      {/* Login title goes here */}
      <div className="login__title">
        <h2>Login</h2>
      </div>
      {/* Login form goes here */}
      <div className="login__form">
        <form method="post" className={classes.root}>
          {error === "" ? null : (
            <div className="login__errorMessage">
              <p>{error}</p>
            </div>
          )}

          <div className="login__formField">
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              required
              id="outlined-required1"
              label="Email"
              defaultValue={email}
              variant="outlined"
            />
          </div>
          <div className="login__formField">
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              required
              id="outlined-required2"
              label="Password"
              defaultValue={password}
              variant="outlined"
              type="password"
            />
          </div>
          <button
            type="submit"
            className="login__button"
            onClick={handleSignIn}
          >
            Login
          </button>

          <div className="login__forgotPassword">
            <a href="/" src="">
              Forgot password?
            </a>
          </div>
          <div className="login__loginToRegister">
            Don't have an account?
            <Link to="/register" className={classes.link}>
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
