import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const GithubNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);

  const toggler = () => {
    setShow(!show);
  };
  const navStyle = {
    display: show ? "block" : "none",
  };
  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <a className="navbar-brand" href="/dashboard">
          <span className="fa fa-github"></span>
        </a>
        <button className="navbar-toggler" type="button" onClick={toggler}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse"
          style={navStyle}
          id="navbarTogglerDemo01"
        >
          <form class="form-inline">
            <input
              class="form-control mr-sm-2  border-0"
              style={{ backgroundColor: "#4d4d4d", color: "white" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default GithubNav;
