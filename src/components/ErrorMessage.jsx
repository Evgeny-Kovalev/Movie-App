import React from 'react'

const ErrorMessage = ({text}) => {
    return (
        <div className="bar error">
            <i className="ico">&#9888;</i>
            {text}
        </div>
    )
}

export default ErrorMessage
