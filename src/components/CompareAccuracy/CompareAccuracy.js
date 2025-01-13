import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { LuGitCompareArrows } from 'react-icons/lu';

function CompareAccuracy() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [
                {
                    label: '10 min 20 min 30 min 45 min',
                    data: [0.25, 0.30, 0.70, 0.30, 0.60, 0.80, 0.50], // Decimal values representing percentages
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)',
                        'rgb(255, 206, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(153, 102, 255)',
                    ],
                    borderWidth: 1,
                },
            ],
        };

        const options = {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Slots',
                    },
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Accuracy (%)',
                    },
                    ticks: {
                        callback: function(value) {
                            return (value * 100).toFixed(0) + '%'; // Convert decimal to percentage
                        },
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', width: '15vw' }}>
                <LuGitCompareArrows style={{ fontSize: '24px', marginRight: '12px' }} />
                <b>Compare Accuracy</b>
            </div>
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    );
}

export default CompareAccuracy;
