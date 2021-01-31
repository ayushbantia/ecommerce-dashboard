import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { auth, db } from "../firebase";
import "./register.css";
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

function Register({ err = "" }) {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(err);

  const handleSignIn = (e) => {
    // Register Account
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // alert("User created.");
        history.push("/");
        db.collection("users")
          .doc("UID")
          .collection(auth.user.uid)
          .doc("user details")
          .set(
            {
              uid: auth.user.uid,
              email: auth.user.email,
              user_category: category.toUpperCase(),
            },
            { merge: true }
          );
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="register">
      {/* Register title goes here */}
      <div className="register__title">
        <h2>Register</h2>
      </div>
      {/* Register form goes here */}
      <div className="register__form">
        <form onSubmit={handleSignIn} className={classes.root}>
          {error === "" ? null : (
            <div className="register__errorMessage">
              <p>{error}</p>
            </div>
          )}

          <div className="register__formField">
            <TextField
              onChange={(e) => setCategory(e.target.value)}
              required
              id="outlined-required2"
              label="Account Category"
              defaultValue={category}
              variant="outlined"
              type="text"
            />
            <div className="register__formField">
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                required
                id="outlined-required1"
                label="Email"
                defaultValue={email}
                variant="outlined"
              />
            </div>
            <div className="register__formField">
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
          </div>
          <button
            type="submit"
            className="register__button"
            onClick={handleSignIn}
          >
            Register
          </button>

          <div className="register__registerToLogin">
            Already have an account?
            <Link to="/" className={classes.link}>
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
