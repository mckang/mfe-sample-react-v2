import React from "react";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  return (
    <div className="header flex space-between items-center">
      <h1 className="project-title">Micro Frontend v2 - React TodoApp</h1>
      <button onClick={() => navigate("/add")} className="primary-button">
          Login
      </button>      
    </div>
  );
};
