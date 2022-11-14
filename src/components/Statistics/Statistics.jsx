import PropTypes from 'prop-types';
import React from 'react';
import css from './Statistics.module.css';


const Statistic = ({ good, neutral, bad, total, positive}) => (
  <div className={css.statisticBox}>
        <h2 className={css.title}>Statistics</h2>
        <p className={css.statistic}> Good: {good}</p>
        <p className={css.statistic}>Neutral: {neutral}</p>
        <p className={css.statistic}>Bad: {bad}</p>
        <p className={css.statistic}>Total: {total}</p>
        <p className={css.statistic}>Positive feedback: {positive}</p>
        </div>);



Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.string,
}

export default Statistic;
