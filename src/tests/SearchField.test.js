import React from 'react';
import {shallow} from 'enzyme';
import SearchField from './../components/searchField';
import { Footer } from './../components/footer';

test('should render SearchField correctly', () => {
    const onInputChange = null;
    const onSubmit = null;
    const loading= false;
    const wrapper = shallow(<SearchField onInputChange={onInputChange} onSubmit={onSubmit} loading={loading} />);
    expect(wrapper.find('h1').length).toBe(0);
});

test('should check if test environment is working', () => {
    expect(true).toBe(true);
})
