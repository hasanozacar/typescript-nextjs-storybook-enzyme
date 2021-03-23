import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  style: object;
  title: string;
};
const BackBuffer = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}{...otherProps}>
      <path
        d="m36.941 86.497c-3.7652-1.6125-7.7313-2.4968-11.798-2.4968h-15.864c-3.2632 0-5.9742 2.8609-6.1248 6.5021-0.70284 16.958-1.1547 34.643-1.1547 53.005v0.41614c0 18.518 0.40162 36.36 1.1547 53.422 0.15061 3.6412 2.8616 6.5021 6.1248 6.5021h15.864c4.0664 0 8.0325-0.83228 11.798-2.4968v-114.85z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B01301"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        <title>Arka Tampon: Orijinal</title>
      </path>
    </Tooltip>
  );
};
BackBuffer.propTypes = {
  /**
   * Style of BackBuffer
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,

};
export default BackBuffer;
