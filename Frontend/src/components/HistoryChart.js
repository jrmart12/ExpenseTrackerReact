import React, {useContext, useState,useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
import {GlobalContext} from "../context/GlobalState";



const HistoryChart = () => {
    const [chartData,setChartData] = useState({})
    /*
    const {transactions} = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    */
    const chart = () =>{
        setChartData({
            labels: ['March','April','May','June','July', 'August', 'September','October','November','December','January', 'February',],
            datasets:[
                {
                    label: 'Balance History',
                    data: /*amounts*/[3234],
                    backgroundColor:[
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth:4
                }
            ]
        })

    }
    useEffect(() => {
        chart()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
        return(
            <section id="chart">
            <div>
               <h1 className="mb-4 chartTitle">Report Graph</h1>
               <div className="chart">
                   <Bar
                       data={chartData}
                       options={{responsive: true}}
                   />
               </div>
            </div>
            </section>
        )
    
}

export default HistoryChart;