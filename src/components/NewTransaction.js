import React, {useState} from 'react'

export const NewTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    return (
        <div>
        <div className="transaction-header-container">
            <h3 className="h32">Add new transaction</h3>
        </div>
            <div className="transaction-container">
            <form>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e)=> setText(e.target.value)} placeholder="Enter text .."></input>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount <br/>(negative-expense, positive-income)</label>
                    <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} placeholder="Enter amount .."></input>
                </div>
                <button className="btn1">Add transaction</button>
            </form>
            </div>
        </div>
    )
}
