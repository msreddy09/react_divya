
import React from "react";
import { Link, Outlet } from "react-router-dom";

const TrackerHeader = () => {

  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Expense Tracker</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to="/" className="nav-link active">Report</Link>
              <Link to="/income" className="nav-link">Income</Link>
              <Link to="/expense" className="nav-link">Expense</Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )

}

export default TrackerHeader