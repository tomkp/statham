import 'jsdom-global/register';
import chai from 'chai';
import React from 'react';
import {shallow, mount} from 'enzyme';
import Header from '../../../../../src/application/sections/header/Header';
const expect = chai.expect;


describe('Header component', () => {
    it('shallow renders header', () => {
        const wrapper = shallow(
            <Header />
        );

        expect(wrapper.text()).to.equal('<Link /><SearchBar />');
    });

    it('mount renders header', () => {
        const wrapper = mount(
            <Header />
        );

        expect(wrapper.text()).to.equal('⍟');
    });
});

