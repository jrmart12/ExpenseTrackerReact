import React, { Fragment } from "react";

import Hero from "../components/Description";
import ExpenseTracker from "../components/ExpenseTracker";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {HistoryList} from "../components/HistoryList"

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <ExpenseTracker />
    <Balance/>
    <IncomeExpenses/>
    <HistoryList/>
  </Fragment>
);

export default Home;
