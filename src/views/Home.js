import React, { Fragment } from "react";

import Hero from "../components/Description";
import ExpenseTracker from "../components/ExpenseTracker";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {HistoryList} from "../components/HistoryList"
import {NewTransaction} from "../components/NewTransaction"

const Home = () => (
  <Fragment>
    <Hero />
    <hr />
    <div className="ContainerTracker">
    <ExpenseTracker />
    <Balance/>
    <IncomeExpenses/>
    <HistoryList/>
    <NewTransaction/>
    </div>
  </Fragment>
);

export default Home;
