/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import LeftBackFender from './index';
describe('CarTramer', () => {
  const wrapper = mount(<LeftBackFender style={{
    "stopColor": "#ffdb4d",
    "stopOpacity": "1",
  }} />);

  it('should render without throwing an error', () => {
    expect(wrapper.find(LeftBackFender).length).toEqual(1);
  });
});
