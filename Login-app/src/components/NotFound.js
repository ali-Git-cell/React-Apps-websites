import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1 className="display-1">404 Page Not Found :(</h1>
      <Link to="/">Go To Home</Link>
    </div>
  );
};

export default NotFound;
