import React from 'react';
import './application.scss';

import Header from './header/Header';
import Footer from './footer/Footer';
import Results from './results/Results';
import Sidebar from './sidebar/Sidebar';


export default ({children}) => {
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
