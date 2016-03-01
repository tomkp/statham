import './style.scss';

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Header from './sections/header/Header';
import Footer from './sections/footer/Footer';
import Results from './sections/results/Results';
import Sidebar from './sections/sidebar/Sidebar';
import Content from './sections/content/Content';


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
            <Footer />
        </div>
    );
};



render((
    <Router history={hashHistory}>
        <Route path="/" component={Application} >
            <IndexRoute component={Content}/>
        </Route>
    </Router>
), document.getElementById('app'));
