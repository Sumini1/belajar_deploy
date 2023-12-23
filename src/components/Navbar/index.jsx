import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="navbar1">
      <div className="navbar">
        <div className="img" id={openLinks ? "open" : "close"}>
          <img src="./img/icon_react.jpeg" alt="" />
        </div>
        <div className="nav-list">
          <Link to={"/"}>Home</Link>
          <Link to={"/collection"}>Collection</Link>
          <Link to={"/listdetailuser"}>ListDetailUser</Link>
        </div>
        <div>
          <button className="btn-3" onClick={handleClick}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
