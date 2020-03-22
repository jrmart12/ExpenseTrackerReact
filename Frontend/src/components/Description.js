import React from "react";

import logo from "../assets/logo.svg";
import image1 from "../assets/Image1.svg";

const Description = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="logo" width="120" />
    <h1 className="mb-4">Expense Tracker</h1>
    <p className="lead">
    Creating a simple interface you can use to add your expenses.
    Generating monthly reports based on your inputs.
    </p>
    <img className="image" src={image1} alt="image1" width="600" opacity="0.6" />
  </div>
);

export default Description;
