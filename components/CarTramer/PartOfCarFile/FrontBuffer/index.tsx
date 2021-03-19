import React from 'react';
import { SvgIcon } from '@material-ui/core';
import PropTypes from "prop-types";
export type Props = {
  style?: object;
};
const FrontBuffer = (props: Props) => {
  const { style, ...otherProps } = props;
  return (
    <SvgIcon {...otherProps}>
      <path
        d="m340 201.35c3.7652 1.6125 7.7313 2.4968 11.798 2.4968h15.864c3.2632 0 5.9742-2.8609 6.1248-6.5021 0.70284-16.958 1.1547-34.643 1.1547-53.005v-0.41614c0-18.518-0.40162-36.36-1.1547-53.422-0.15061-3.6412-2.8616-6.5021-6.1248-6.5021h-15.864c-4.0664 0-8.0325 0.83227-11.798 2.4968v114.85z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B01201"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        <title>Ön Tampon: Orijinal</title>
      </path>
     </SvgIcon>
  );
};
FrontBuffer.propTypes = {
  /**
   * Style of Left Front Door
   */
  style: PropTypes.string,
  
};
export default FrontBuffer;
