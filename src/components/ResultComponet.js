import React from 'react'
import './ResultComponent.css';
import PropTypes from 'prop-types';
function ResultComponet({  children ,style}) {
  return (
    <div className="card1" style={style}>
    {children}
  </div>
  )
}
ResultComponet.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

ResultComponet.defaultProps = {
  style: {},
};
export default ResultComponet;