
import React from "react";

const TrackerHeader = () => {

    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Expense Tracker</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Expense</a>
              <a class="nav-link" href="#">Income</a>
              <a class="nav-link" href="#">Report</a>
            </div>
          </div>
        </div>
      </nav>
    )

}

export default TrackerHeader