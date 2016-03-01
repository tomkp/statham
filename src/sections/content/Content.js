import React from 'react';
import './content.scss';

const ContentTitle = ({title}) => {
    return <div className="fixed content-title">{title}</div>
};

export default ({title, content}) => {
    return (
        <div className="column">
            <ContentTitle title={title} />
            <div className="flex content">{content}</div>
        </div>
    )
};