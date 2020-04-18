import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function GitHubLogin() {
  const auth = useSelector((state) => state.auth);
  const err = useSelector((state) => state.err);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const clearErr = () => {
    dispatch({
      type: "CLEAR_ERROR",
    });
  };
  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      setLoaded(true);

      const requestData = {
        client_id: auth.client_id,
        redirect_uri: auth.redirect_uri,
        client_secret: auth.client_secret,
        code: newUrl[1],
      };

      const proxy_url =
        "https://olabiranj.herokuapp.com/api/github/authenticate";
      // Use code parameter and other parameters to make POST request to proxy_server
      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: "LOGIN",
            payload: { user: data, isLoggedIn: true },
          });
        })
        .catch((error) => {
          setLoaded(false);
          dispatch({
            type: "SET_ERROR",
            payload: "Error, Authorization failed",
          });
        });
    }
  }, [dispatch, auth]);
  if (auth.isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container pt-4">
      <div className="col-lg-5 mx-auto mt-4">
        <div className=" text-center my-4">
          <br />
          <br />
          <h1>
            <span className="fa fa-github"></span>
          </h1>
          <h2>Sign in To GitHub</h2>
        </div>
        <div className="container-fluid bg-light py-4 border rounded">
          <h5>Login to continue...</h5>
          <hr />
          {loaded ? (
            <button className="btn btn-success btn-block text-light" disabled>
              just a moment...
            </button>
          ) : (
            <a
              type="button"
              className="btn btn-success btn-block text-light"
              href={`https://github.com/login/oauth/authorize?scope=user&client_id=${auth.client_id}&redirect_uri=${auth.redirect_uri}`}
            >
              Sign In
            </a>
          )}
        </div>
        {err.err ? (
          <div className="alert alert-danger mt-4" role="alert">
            {err.errMsg}
            <button type="button" class="close" onClick={clearErr}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export default GitHubLogin;
