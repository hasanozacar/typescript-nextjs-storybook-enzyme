import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from "prop-types";
export type Props = {
  style?: object;
  title: string;
};
const leftBackFender = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}>
      <path
        d="m59.277 54.594s6.1176 1.9503 15.529 0.97517l5.3646 0.29255s9.2234 7.5088 12.047 7.2163c2.8235-0.34131 7.7175-8.4352 7.7175-8.4352l10.635-19.503c-0.14118 0.24379-15.2 3.4131-22.164-1.414-6.0234-4.1932-10.682-10.824-11.482-17.846l-0.79999-4.8759s-9.3175-0.39007-12.329 6.5824c-3.0117 6.9725-6.5411 9.4592-6.5411 9.4592s-0.94116 10.629 0.79999 13.262c1.6941 2.5842 1.2235 14.286 1.2235 14.286z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0301"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        {" "}
      </path>
    </Tooltip>
  );
};
leftBackFender.propTypes = {
  /**
   * Style of left Back Fender
   */
  style: PropTypes.object,
  /**
 * Title of Tooltip
 */
  title: PropTypes.string,

};
export default leftBackFender;
