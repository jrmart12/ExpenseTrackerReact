import React from 'react'

export const IncomeExpenses = () => {
    return (
        <div class="inc-exp-container">
            <div>
                <h4 className ="h42">Income</h4>
                <p id="money-plus" className="money plus">+$0.00</p>
            </div>
            <div>
                <h4 className ="h42">Expense</h4>
                <p id="money-minus" className="money minus">-$0.00</p>
            </div>
        </div>
    )
}
