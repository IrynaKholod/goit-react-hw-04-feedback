import React from 'react';
// import css from './Notification.module.css';
import PropTypes from 'prop-types';


function Notification({ message }) {
  return <h2  
  style={{
   
    marginLeft: 40,
    paddingBottom: 20,
    textAlign: 'left',
    color: '#798998',
    fontSize: 16,
}}>{message}</h2>;
}

export default Notification;

Notification.prototype = {
  text: PropTypes.string,
};