import React from 'react';
import PropTypes from 'prop-types';
// import css from './Notification.module.css';



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


Notification.propTypes = {
message: PropTypes.string.isRequired}
export default Notification;

