import React, { Fragment } from "react";

import Description from "../components/Description";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {HistoryList} from "../components/HistoryList";
import {NewTransaction} from "../components/NewTransaction";
import {GlobalProvider} from "../context/GlobalState";
import HistoryChart from '../components/HistoryChart';

function Home() {
  return (
    <Fragment>
      <GlobalProvider>
        <Description />
        <div className="ContainerTracker">
        <hr />
        <Balance/>
        <IncomeExpenses/>
        <section id="expenseTracker">
        <HistoryList/>
        <NewTransaction/>
        </section>
        <HistoryChart/>
        </div>
      </GlobalProvider>
  </Fragment>
);
  }

export default Home;
