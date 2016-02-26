import './flexbox.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';


const Application = () => {
    return (
        <div className="column application">
            <Header />
            <div className="flex">
                <div className="row">
                    <Sidebar />
                    <div className="flex">
                        <div className="row">
                            <Results />
                            <div className="flex">
                                <div className="column">
                                    <ContentTitle />
                                    <Content />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    return <div className="fixed header">Header</div>
};

const Sidebar = () => {
    return <div className="fixed sidebar">Sidebar</div>
};

const Results = () => {
    return (
        <div className="fixed results">
            <div className="result">one</div>
            <div className="result">two</div>
            <div className="result">three</div>
        </div>
    )
};

const ContentTitle = () => {
    return <div className="fixed content-title">Content Title - Everyone knows and loves the z-index for determining depth ordering of elements on a page. Not all z-indexes are created equal, however: an element’s z-index only determines its ordering relative to other elements in the same stacking context.</div>
};

const Content = () => {
    return <div className="flex scrollable content">Content</div>
};

ReactDOM.render(<Application />, document.getElementById('app'));
