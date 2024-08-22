import React from "react";
import { useHistory } from "react-router-dom";

export default ({ isSignedIn, onSignOut }) => {
  const history = useHistory();
  console.log(isSignedIn)
  return (
    <div className="header flex space-between items-center">
      <h1 className="project-title">Micro Frontend v2 - React TodoApp</h1>
      { isSignedIn == false ? 
      <button onClick={() => history.push("/auth/signin")} className="primary-button">
          Login
      </button>      
      : 
      <button onClick={() => {
        onSignOut()
        history.push("/auth/signin")
        }} className="primary-button">
          Logout
      </button>  
      }
    </div>
  );
};
