import React from "react";
import "./Pagecontainer.scss";

const Pagecontainer = ({ children }) => {
  return (
    <div className="pagecontainer">
     {children}
    </div>
  );
};

export default Pagecontainer;