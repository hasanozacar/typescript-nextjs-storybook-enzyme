/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import FrontBuffer from './index';
describe('CarTramer', () => {
  const wrapper = mount(<FrontBuffer style={{
    "stopColor": "#ffdb4d",
    "stopOpacity": "1",
  }} />);

  it('should render without throwing an error', () => {
    expect(wrapper.find(FrontBuffer).length).toEqual(1);
  });
});
