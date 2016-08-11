import chai from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../../../../../src/application/sections/footer/Footer';
const expect = chai.expect;


describe('Footer component', () => {
    it('renders footer', () => {
        const wrapper = shallow(
            <Footer />
        );

        expect(wrapper.text()).to.equal('Footer');
    });
});

