import React from "react";
import Firebase from "./../util/Firebase";

export default function Login() {
  const startAuth = () => {
    Firebase.kickOffAuthentication();
  };

  return <div onClick={startAuth}>Login here</div>;
}
