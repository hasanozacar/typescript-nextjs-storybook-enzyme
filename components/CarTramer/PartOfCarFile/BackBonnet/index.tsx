import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  style: object;
  title: string;
};
const BackBonnet = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}{...otherProps}>
      <path
        d="m95.64 100.03h-23.897s-10.743-1.3004-10.743 13.004v65.594s1.7069 8.7909 8.4843 8.7909h26.156s-8.5345-37.712 0-87.389z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0201"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        <title>Arka Kaput: Orijinal</title>
      </path>
    </Tooltip>
  );
};
BackBonnet.propTypes = {
  /**
   * Style of Back Bonnet
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,

};
export default BackBonnet;
