import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';
import TitleOfParts from "../../TitleOfParts";

export type Props = {
  //Properties
  style?: object;
  title: string;
  //Events
  onClick?: (event: MouseEvent, part: string) => void;
};
const RightBackFender = (props: Props) => {
  const { title, onClick, style, ...otherProps } = props;
  const handleClick = (event: any) => {
    if (onClick) {
      props.onClick(event, TitleOfParts.rightBackFender);
    }
  };  return (
    <Tooltip onClick={handleClick} title={title}{...otherProps}>
      <path
        d="m58.43 234.06s6.5264-2.0807 16.567-1.0403l5.7232-0.3121s9.8398-8.0106 12.852-7.6985c3.0122 0.36412 8.2333 8.999 8.2333 8.999l11.346 20.807c-0.15061-0.26008-16.216-3.6412-23.646 1.5085-6.426 4.4735-11.396 11.548-12.25 19.038l-0.85345 5.2017s-9.9402 0.41614-13.153-7.0223c-3.213-7.4385-6.9782-10.091-6.9782-10.091s-1.0041-11.34 0.85345-14.149c1.8073-2.7569 1.3053-15.241 1.3053-15.241z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0101"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        <title>Sağ Arka Çamurluk: Orijinal</title>
      </path>
    </Tooltip>
  );
};
RightBackFender.propTypes = {
  /**
   * Style of Right Back Fender
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
export default RightBackFender;
