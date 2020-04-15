import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import GithubNav from "../components/Navbar/GithubNav";
import GithubDashboard from "../components/Dashboard/GithubDashboard";

const Dashboard = () => {
  const auth = useSelector((state) => state.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const redir = () => {
    history.push("/");
    dispatch({
      type: "SET_ERROR",
      payload: "Error, Authorization failed",
    });
  };
  return (
    <Fragment>
      {!auth.isLoggedIn ? (
        redir()
      ) : (
        <>
          <GithubNav />
          <GithubDashboard />
        </>
      )}
    </Fragment>
  );
};

export default Dashboard;
