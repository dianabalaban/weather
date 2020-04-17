import React from 'react';
import { Line } from 'react-chartjs-2';

const Daily = ({ min, max, minwind, maxwind, datemin, datemax, date,hourly }) => {
    const data = { 
        labels: ['2AM','5AM','11AM','2PM','5PM','8PM', '11PM'], 
        datasets: [
            { label: 'Temperature', data: [],backgroundColor: 'rgba(0, 0, 0, 0)', borderColor:'rgba(66, 135, 245)'}
        ],}
    data.datasets[0].data = [...hourly];

    return (
        <div className="card">
            <h3 className="cardElem">{date}</h3>
       
            <Line 
                data={data}
                options={{
                    legend: {
                        display: false
                     },
                     pointRadius:0,
                    title:{
                        display:true,
                        text:"Temperature"
                    },
                    maintainAspectRatio: true, 
                    scales: {
                        xAxes: [{
                            stacked: false,
                            ticks: {
                                beginAtZero: true,
                                //display: false
                            },
                        }],
                        yAxes: [{
                            stacked: false,
                            ticks: {
                                beginAtZero: true,
                                stepSize: 2
                                //display: false 
                            }
                        }]
                    },
                }}
            />
          
           
         Wind speed between {minwind} and {maxwind}
        </div>

    )

}

export default Daily
