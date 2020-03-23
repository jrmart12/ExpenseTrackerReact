import React, {useContext, useEffect} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";

export const HistoryList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);
    const scrollContainerStyle = { maxWidth: "650px",maxHeight: "160px" };

    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    return (
        <div>
            <div className="history-container">
                <h3 className="h32">History</h3>
            </div>
            <div className="history-container-list  scrollbar scrollbar-primary " style={scrollContainerStyle}>
            <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
            </div>
        </div>
    )
}
