import './flexbox.css';
import './style.css';

import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


const Application = ({children}) => {
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
                                {children &&
                                React.cloneElement(children, {
                                    title: "Home Title",
                                    content: "Some content"
                                })
                                }
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

const ContentTitle = ({title}) => {
    return <div className="fixed content-title">{title}</div>
};

const Content = ({title, content}) => {
    return (
        <div className="column">
            <ContentTitle title={title} />
            <div className="flex scrollable content">{content}</div>
        </div>
    )
};

render((
    <Router history={hashHistory}>
        <Route path="/" component={Application} >
            <IndexRoute component={Content}/>
        </Route>
    </Router>
), document.getElementById('app'));
