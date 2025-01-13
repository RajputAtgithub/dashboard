import React from 'react';
import './TimeTaken.css';

function TimeTaken() {
  return (
    <div className="time-taken-container">
      <div className="header">
        <svg className="time-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2"/>
        </svg>
        <h2>Time Taken</h2>
      </div>

      <div className="timeline-card">
        {/* First Timeline */}
        <div className="timeline-section">
          <div className="timeline">
            <div className="tick-marks">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="tick-group">
                  {[...Array(10)].map((_, j) => (
                    <div key={j} className={`tick ${j === 0 ? 'major' : 'minor'}`} />
                  ))}
                </div>
              ))}
            </div>
            <div className="time-labels">
              {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((value) => (
                <span key={value}>{value}sec</span>
              ))}
            </div>
            <div className="progress-bars">
              <div className="progress-bar green" style={{ width: '25%',height:'12px',marginTop:'22px' }} />
              <div className="progress-bar red" style={{ width: '45%',height:'12px',marginTop:'4px'  }} />
            </div>
            <div className="center-marker" style={{ left: '30%' }} />
          </div>
          <p className="timeline-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
        </div>

        {/* Second Timeline */}
        <div className="timeline-section">
          <div className="timeline">
            <div className="tick-marks">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="tick-group">
                  {[...Array(10)].map((_, j) => (
                    <div key={j} className={`tick ${j === 0 ? 'major' : 'minor'}`} />
                  ))}
                </div>
              ))}
            </div>
            <div className="time-labels">
              {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            <div className="progress-bars">
              <div className="progress-bar green" style={{ width: '20%', right: '51%',height:'12px',marginTop:'9px' }} />
              <div className="progress-bar red" style={{ width: '20%', left: '52%',height:'12px',marginTop:'9px'  }} />
            </div>
            <div className="center-marker" style={{ left: '50%' }} />
          </div>
          <p className="timeline-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimeTaken;

