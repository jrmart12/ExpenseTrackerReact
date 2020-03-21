import React, { Fragment } from "react";

import Hero from "../components/Description";
import ExpenseTracker from "../components/ExpenseTracker";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <ExpenseTracker />
    <Balance/>
    <IncomeExpenses/>
  </Fragment>
);

export default Home;
