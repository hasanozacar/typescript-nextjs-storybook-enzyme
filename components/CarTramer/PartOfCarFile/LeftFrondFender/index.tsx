import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  style: object;
  title: string;
};
const LeftFrondFender = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}>
      <path
        transform="translate(267.88 27.237) scale(-1) rotate(180) translate(-267.88 -27.237)"
        d="m234.26 49.983l53.188-9.0296s15.014-4.4657 16.577-8.6861c1.563-4.2204 2.3681-7.0176 1.563-10.109-0.80516-3.0917-2.8418-10.502-2.8418-10.502s3.3154-6.1833-0.61572-6.1833c-3.9311 0-15.958-0.98148-15.958-0.98148s2.3211 32.474-25.531 32.907c-25.568 0.39668-24.904-28.637-24.904-28.637h-5.8815s5.7309 23.212 0 41.222h4.4042z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B01101"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        {" "}
      </path>
    </Tooltip>
  );
};
LeftFrondFender.propTypes = {
  /**
   * Style of Left Frond Fender
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,

};
export default LeftFrondFender;
