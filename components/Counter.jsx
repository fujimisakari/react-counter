import React, { PropTypes } from 'react';

const Counter = ({ value, actions }) => (
  <div>
    <h2>count={value}</h2>
    <button onClick={actions.increment}>増加</button>
    <button onClick={actions.decrement}>減少</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default Counter;
