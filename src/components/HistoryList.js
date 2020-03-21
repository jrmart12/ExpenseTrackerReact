import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const HistoryList = () => {
    const {transactions} = useContext(GlobalContext);
    return (
        <div>
            <div className="history-container">
                <h3 className="h32">History</h3>
            </div>
            <div className="history-container-list">
            <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}

            </ul>
            </div>
        </div>
    )
}
