import PropTypes from 'prop-types';
import React from 'react';
import css from './FeedbackOptions.module.css';
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiAngryFill,
  BsFillEmojiExpressionlessFill,
} from 'react-icons/bs';

const FeedbackOption = ({ onGood, onNeutral, onBad }) => (
  <div className={css.statisticBox}>
    <h2>Please leave your feedback</h2>
    <button type="button" onClick={onGood}>
      <BsFillEmojiHeartEyesFill  className={css.icon }/>
    </button>
    <button type="button" onClick={onNeutral}>
      <BsFillEmojiExpressionlessFill className={css.icon}/>
    </button>
    <button type="button" onClick={onBad}>
      <BsFillEmojiAngryFill className={css.icon} />
    </button>
  </div>
);

FeedbackOption.propTypes = {
  onGood: PropTypes.func.isRequired,
  onNeutral: PropTypes.func.isRequired,
  onBad: PropTypes.func.isRequired,
}
export default FeedbackOption;


