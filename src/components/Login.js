import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = (e) => {
    // Sign In stuff...
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://i.pinimg.com/originals/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.png"
          alt=""
          className="img"
        />
        <img
          src="https://www.g4f-records.com/wp-content/uploads/2016/09/logo-facebook.png"
          alt=""
          className="img1"
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
