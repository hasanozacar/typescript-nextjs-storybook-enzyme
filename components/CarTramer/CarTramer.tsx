import * as React from 'react';
import PropTypes from 'prop-types';
export type CarTramerProps = {
  text: string;
};

const CarTramer: React.FC<CarTramerProps> = ({ text }) => <div id="carTramer" >{text}</div>;

CarTramer.propTypes = {
  /**
   * Test.first props
   */
  text: PropTypes.string,
};

export default CarTramer
