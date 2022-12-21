import React, { useState } from 'react';

import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification ';
import Statistic from './Statistics/Statistics';
import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickOnBtn = type => {
    switch (type) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        throw new Error('Something wrong');
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedback = () => {
    return `${Math.round((good / countTotalFeedback()) * 100) || 0}%`;
  };

  const options = Object.keys({ good, neutral, bad });

  return (
    <div className={css.container}>
      <div className={css.statisticBox}>
        <FeedbackOptions options={options} onLeaveFeedback={clickOnBtn} />
      </div>
      {countTotalFeedback() !== 0 ? (
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={countPositiveFeedback()}
          positive={countPositiveFeedback()}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}

export default App;
