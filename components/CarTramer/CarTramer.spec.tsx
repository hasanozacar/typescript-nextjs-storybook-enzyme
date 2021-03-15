/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import CarTramer from './CarTramer';
describe('CarTramer', () => {
  const wrap = mount(<CarTramer text="CarTramer" />);

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.find(CarTramer).text()).toBe('CarTramer');
  });
});
