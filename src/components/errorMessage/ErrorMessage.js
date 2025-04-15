import React from 'react';
import './ErrorMessage.css';
const ErrorMessage = ({massage}) => {
    return (
        <div className='error-message'>
            {massage}
        </div>
    );
}

export default ErrorMessage;
