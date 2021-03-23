import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  style: object;
  title: string;
};
const EngineBonnet = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}{...otherProps}>
      <path
        d="m230 100s14.961 40.833 0 87.129h53.968s20.633-8.1667 18.876-43.07c-1.7571-34.904-18.876-44.059-18.876-44.059h-53.968z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B01001"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        <title>Motor Kaputu: Orijinal</title>
      </path>
    </Tooltip>
  );
};
EngineBonnet.propTypes = {
  /**
   * Style of Engine Bonnet
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,

};
export default EngineBonnet;
