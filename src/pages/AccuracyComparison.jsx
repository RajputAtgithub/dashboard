import React, { useState } from 'react';
import './AccuracyComparison.css';
import { LuGitCompareArrows } from 'react-icons/lu';

function AccuracyComparison() {
  const [selectedTime, setSelectedTime] = useState('15');
  
  const timeIntervals = [
    { value: '10', label: '10MIN' },
    { value: '15', label: '15MIN' },
    { value: '30', label: '30MIN' },
    { value: '45', label: '45MIN' }
  ];

  const accuracyData = [
    { time: '10', accuracy: 85 },
    { time: '15', accuracy: 42 },
    { time: '20', accuracy: 32 },
    { time: '25', accuracy: 58 },
    { time: '30', accuracy: 52 },
    { time: '35', accuracy: 42 },
    { time: '45', accuracy: 60 }
  ];

  return (
    <div className="accuracy-container">
      <div className="header-acc">
<LuGitCompareArrows style={{fontSize:'16px',color:'gray'}}/>
        <h2>Compare Accuracy</h2>
      </div>

      <div className="timeline-container">
        <div className="timeline-chart">
          <div className="timeline-line"></div>
          {timeIntervals.map((interval) => (
            <button
              key={interval.value}
              onClick={() => setSelectedTime(interval.value)}
              className={`time-button ${selectedTime === interval.value ? 'active' : ''}`}
            >
              {interval.label}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-container">
        <div className="y-axis-label">Accuracy</div>
        <div className="chart-acc">
          <div className="y-axis">
            {[100, 75, 50, 25, 0].map((value) => (
              <div key={value} className="y-label">
                <span>{value}%</span>
                <div className="grid-line"></div>
              </div>
            ))}
          </div>

          <div className="bars">
            {accuracyData.map((data, index) => (
              <div
                key={index}
                className="bar"
                style={{ height: `${data.accuracy}%`,width:'20px' }}
              />
            ))}
          </div>
          <div className="x-axis">
    {accuracyData.map((_, index) => (
      <div key={index} className="x-label">
        <span>{index + 1}</span>
      </div>
    ))}
  </div>
        </div>
        <div className="x-axis-label">Slots</div>
      </div>
    </div>
  );
}

export default AccuracyComparison;

