import React from 'react';
import './results.scss';

export default ({result, selectResult}) => {
    return (
        <div className="result" onClick={(e) => selectResult(result)}>{result.name}</div>
    )
};