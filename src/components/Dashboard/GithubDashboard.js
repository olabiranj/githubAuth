import React from "react";
import { useSelector } from "react-redux";

const GithubDashboard = () => {
  const auth = useSelector((state) => state.auth);

  const {
    avatar_url,
    name,
    public_repos,
    total_private_repos,
    followers,
    following,
    company,
    location,
  } = auth.user;

  return (
    <div className="container p t-4">
      <h3>{name}</h3>
      <h5>
        {company}, {location}
      </h5>
      <hr />
      <div className="row  mt-4 pt-4">
        <div className="col-sm-8">
          <div className="row">
            <div className="col-sm-4 mb-4">
              <img
                className="rounded-circle"
                style={{ width: "100%" }}
                src={avatar_url}
                alt={name}
              />
            </div>
            <div className="col-sm-8">
              <p className="text-secondary  mb-4 pb-4">
                You can create and register an OAuth App under your personal
                account or under any organization you have administrative access
                to. While creating your OAuth app, remember to protect your
                privacy by only using information you consider public.
              </p>
            </div>
          </div>
          <div class="alert alert-primary" role="alert">
            <span className="font-weight-bold"> Note:</span> A user or
            organization can own up to 100 OAuth apps.
          </div>
        </div>
        <div className="col-sm-4">
          <ul className="list-group rounded">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Repositries
              <span className="badge badge-primary badge-pill">
                {public_repos + total_private_repos}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Followers
              <span className="badge badge-primary badge-pill">
                {followers}
              </span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Following
              <span className="badge badge-primary badge-pill">
                {following}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GithubDashboard;
