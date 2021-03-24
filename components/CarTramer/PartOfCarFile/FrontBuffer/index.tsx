import React from 'react';
import { Tooltip } from '@material-ui/core';
import PropTypes from "prop-types";
import TitleOfParts from "../../TitleOfParts";

export type Props = {
  //Properties

  style?: object;
  title: string;
  //Events
  onClick?: (event: MouseEvent, part: string) => void;
};
const FrontBuffer = (props: Props) => {
  const { title,onClick, style, ...otherProps } = props;
  const handleClick = (event: any) => {
    if (onClick) {
      props.onClick(event, TitleOfParts.frontBuffer);
    }
  };  return (
    <Tooltip onClick={handleClick}  title={title}>
      <path
        {...otherProps}
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
    </Tooltip>

  );
};
FrontBuffer.propTypes = {
  /**
   * Style of Left Front Door
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,
  /**
* onClik of Tooltip
*/
  onClick: PropTypes.func,

};
export default FrontBuffer;
