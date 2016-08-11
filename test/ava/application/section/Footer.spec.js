import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../../../../src/application/sections/footer/Footer';

test(t => {
    const wrapper = shallow(
        <Footer />
    );

    t.equal(wrapper.text(), '');
});

