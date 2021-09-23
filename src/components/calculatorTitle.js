import React from 'react';

//used functional component
const CalculatorTitle = (props) => {
    return (
        <div className="calculator-title">
            {props.value}
        </div>
    ) 
}

export default CalculatorTitle;