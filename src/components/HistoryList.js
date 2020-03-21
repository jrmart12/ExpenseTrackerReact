import React from 'react'

export const HistoryList = () => {
    return (
        <div>
            <div className="history-container">
                <h3 className="h32">History</h3>
            </div>
            <div className="history-container-list">
            <ul id="list" class="list">
                <li class="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                </li>
            </ul>
            </div>
        </div>
    )
}
