import React, {useContext, useEffect} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {Transaction} from "./Transaction";
//import { useAuth0 } from "../auth0";

export const HistoryList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);
    const scrollContainerStyle = { maxWidth: "650px",maxHeight: "160px" };
    //const { user} = useAuth0();

    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    /*
    let filteredHistory = transactions.filter((transaction) => {
        return transaction.id.indexOf(user.email) !== -1;
    });
    */
    return (
        <div>
            <div className="history-container">
                <h3 className="h32">History</h3>
            </div>
            <div className="history-container-list  scrollbar scrollbar-primary " style={scrollContainerStyle}>
            <ul className="list">
            {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction}/>))}
            </ul>
            </div>
        </div>
    )
}
