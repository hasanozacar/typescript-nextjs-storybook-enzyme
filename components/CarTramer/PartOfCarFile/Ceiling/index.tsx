import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  style: object;
  title: string;
};
const Ceiling = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}{...otherProps}>
      <path
        d="m126.16 111s-10.794 28.349-1.1547 64.501h63.658s8.7855-32.771 0-64.501h-62.503z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0601"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        <title>Tavan: Orijinal</title>
      </path>
    </Tooltip>
  );
};
Ceiling.propTypes = {
  /**
   * Style of Ceiling
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,

};
export default Ceiling;
