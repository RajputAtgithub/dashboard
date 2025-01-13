import React from 'react';
import PropTypes from 'prop-types';
import './CardComponent.css';

function CardComponent({ children, style }) {
  return (
    <div className="card" style={style}>
      {children}
    </div>
  );
}

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

CardComponent.defaultProps = {
  style: {},
};

export default CardComponent;
