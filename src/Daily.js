import React from 'react';
import { Line } from 'react-chartjs-2';

const Daily = ({ min, max, minwind, maxwind, datemin, datemax, date,hourly }) => {
    const data = { 
        labels: ['1AM','4AM','10AM','1PM','4PM','7PM', '10PM'], 
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
