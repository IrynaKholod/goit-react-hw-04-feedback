import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistic = ({ good, neutral, bad, total, positive }) => (
  <div className={css.statisticBox}>
    <h2 className={css.title}>Statistics</h2>
    <p className={css.statistic}> Good: {good}</p>
    <p className={css.statistic}>Neutral: {neutral}</p>
    <p className={css.statistic}>Bad: {bad}</p>
    <p className={css.statistic}>Total: {total}</p>
    <p className={css.statistic}>Positive feedback: {positive}</p>
  </div>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  positive: PropTypes.string.isRequired,
};
export default Statistic;
