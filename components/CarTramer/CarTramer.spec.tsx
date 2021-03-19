/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import CarTramer from './CarTramer';
describe('CarTramer', () => {
  const wrapper = mount(<CarTramer tramer="CarTramer" />);

  it('should render without throwing an error', () => {
    expect(wrapper.find(CarTramer).length).toEqual(1);
  });
});
