import React, { Fragment } from "react";

import Description from "../components/Description";
import {Balance} from "../components/Balance";
import {IncomeExpenses} from "../components/IncomeExpenses";
import {HistoryList} from "../components/HistoryList";
import {NewTransaction} from "../components/NewTransaction";
import {GlobalProvider} from "../context/GlobalState";
function Home() {
  return (
    <Fragment>
      <GlobalProvider>
        <Description />
        <div className="ContainerTracker">
        <hr />
        <Balance/>
        <IncomeExpenses/>
        <HistoryList/>
        <NewTransaction/>
        </div>
      </GlobalProvider>
  </Fragment>
);
  }

export default Home;
