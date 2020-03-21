import React from "react";

import logo from "../assets/logo.svg";

const Description = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">Expense Tracker</h1>

    <p className="lead">
    Creating a simple interface you can use to add your expenses.
    Generating monthly reports based on your inputs.
    </p>
  </div>
);

export default Description;
