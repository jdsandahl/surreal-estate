import React from 'react';
import '../styles/Alert.css';

const Alert = ({message , success}) => (
     <div className={`Alert alert-${success ? "success" : "error"}`}>
         {message}
     </div>
);

export default Alert;