import React from 'react';
import { Link } from 'react-router';
import './header.scss';

export default () => {
    return <div className="fixed header">
        <Link to={`/`}>⍟</Link>
    </div>
};
