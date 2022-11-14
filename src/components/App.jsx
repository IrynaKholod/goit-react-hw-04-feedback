import React from "react";
import { Component } from 'react';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification ";
import Statistic from './Statistics/Statistics';
import css from './App.module.css';


export class App extends Component{
      state = {
      good: 0,
      neutral: 0,
      bad: 0,
      totalFidback: 0,
      PositivePercentage: 0};
  
    handleGood = () => {
      this.setState(prevState => ({
        good: prevState.good + 1,
        totalFidback: prevState.totalFidback + 1
      }));
    };
    handleNeutral = () => {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
        totalFidback: prevState.totalFidback + 1
      }));
    };
    handleBad = () => {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
        totalFidback: prevState.totalFidback + 1
      }));
    };
  
    countPositiveFeedback = () => {
      return `${
        Math.round((this.state.good / this.state.totalFidback) * 100) || 0
      }%`;
    };
  
    render() {
      return (
      <div className={css.container}> 
          <FeedbackOptions
            onGood={this.handleGood}
            onNeutral={this.handleNeutral}
            onBad={this.handleBad}
          />
          
           {this.state.totalFidback !== 0 ? 
            <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.neutral}
            total={this.state.totalFidback}
            positive={this.countPositiveFeedback()}
          />
           : <Notification message="There is no feedback" />}
       </div>
         );
        }
    }
export default App;