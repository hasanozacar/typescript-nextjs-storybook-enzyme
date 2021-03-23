/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'enzyme';
import RightBackFender from './index';
import { Tooltip } from '@material-ui/core';

describe('CarTramer', () => {
  const wrapper = mount(<RightBackFender title="testTooltip" style={{
    "stopColor": "#ffdb4d",
    "stopOpacity": "1",
  }} />);

  it('should render without throwing an error', () => {
    expect(wrapper.find(RightBackFender).length).toEqual(1);
  });
  it('should render with Tooltip', () => {
    expect(wrapper.find(Tooltip).props().title).toEqual("testTooltip");
  });
});