/* eslint-disable no-undef */
import { getStyleObjectFromString } from './index';
describe('CarTramer', () => {

  it('should be object getStyleObjectFromString', () => {
    const message = getStyleObjectFromString('fakeGroupName');
    expect(message).toEqual({});
  });

  it('should be object getStyleObjectFromString', () => {
    const message = getStyleObjectFromString('stop-color: #ffdb4d; stop-opacity: 1');
    expect(message).toEqual(
      {
        "stopColor": "#ffdb4d",
        "stopOpacity": "1",
      }
    );
  });
});
