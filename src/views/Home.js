import React, { Fragment } from "react";

import Hero from "../components/Description";
import ExpenseTracker from "../components/ExpenseTracker";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {HistoryList} from "../components/HistoryList";
import {NewTransaction} from "../components/NewTransaction";
import {GlobalProvider} from "../context/GlobalState";
function Home() {
  return (
    <Fragment>
      <GlobalProvider>
        <Hero />
        <hr />
        <ExpenseTracker />
        <Balance/>
        <IncomeExpenses/>
        <HistoryList/>
        <NewTransaction/>
      </GlobalProvider>
  </Fragment>
);
  }

export default Home;
