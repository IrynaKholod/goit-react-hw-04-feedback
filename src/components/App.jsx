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
      };

      clickOnBtn = feedback => {
        this.setState(prevState => {
          return {
            [feedback]: prevState[feedback] + 1,
          };
        });
      };
  
    // handleGood = () => {
    //   this.setState(prevState => ({
    //     good: prevState.good + 1,
    //     totalFidback: prevState.totalFidback + 1
    //   }));
    // };
    // handleNeutral = () => {
    //   this.setState(prevState => ({
    //     neutral: prevState.neutral + 1,
    //     totalFidback: prevState.totalFidback + 1
    //   }));
    // };
    // handleBad = () => {
    //   this.setState(prevState => ({
    //     bad: prevState.bad + 1,
    //     totalFidback: prevState.totalFidback + 1
    //   }));
    // };
  
    countTotalFeedback = () => {
      const { good, neutral, bad } = this.state;
  
      return this.total = good + neutral + bad;
    }

    countPositiveFeedback = () => {
        return `${
        Math.round((this.state.good / this.total) * 100) || 0
      }%`;
    };
  
    render() {
      const total= this.countTotalFeedback();
      return (
      <div className={css.container}> 
       <div className={css.statisticBox}>   
   
      <h2>Please leave your feedback</h2>
           <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.clickOnBtn}
          />
      </div >
           {total !== 0 ? 
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