import React from 'react';
import PropTypes from "prop-types";
import { Tooltip } from '@material-ui/core';
import TitleOfParts from "../../TitleOfParts";


export type Props = {
  //Properties
  style?: object;
  title: string;
  //Events
  onClick?: (event: MouseEvent, part: string) => void;
};
const LeftBackDoor = (props: Props) => {
  const { title, onClick, style, ...otherProps } = props;
  const handleClick = (event: any) => {
    debugger
    if (onClick) {
      onClick(event, TitleOfParts.leftBackDoor);
    }
  };
  return (
    <Tooltip {...otherProps} onClick={handleClick} title={title}>
      <path
        d="m106.51 55.944c-0.52167 0.93363-0.66394 2.0147-0.33197 2.9974 0.85364 2.506 2.5609 4.5207 4.7899 5.7492l4.6476 2.506c9.5798 5.2087 20.345 7.9113 31.158 7.9113h13.421l3.13-17.248c1.3279-7.2233 1.9918-14.643 1.9918-21.965v-25.847c-2.4187 0-8.0622-0.049138-13.706-0.049138-4.3156 0-7.7776 0-10.196 0.049138-1.8496 0-3.794 1.081-5.3115 2.9483-1.1856 1.425-2.2764 2.9483-3.2723 4.5207-1.0433 1.6707-1.6599 2.9483-2.229 4.1767-0.71137 1.4741-1.3753 2.8992-2.6084 4.619-1.2805 1.769-2.798 3.4397-4.5053 4.9138-3.4146 2.9483-6.3075 6.388-8.5838 10.319l-0.047424 0.049138v0.049138l-8.3467 14.299zm5.027-0.88449c2.0393-1.769 4.6476-2.7517 7.3508-2.7517h40.548c0.80622 0 1.4227 0.73707 1.3279 1.5724l-2.4187 16.412c-0.23712 1.5724-1.5176 2.7026-3.0352 2.6535l-10.149-0.19655c-9.4849-0.19655-18.733-2.85-26.937-7.7638l-3.13-1.8673c-1.8021-1.081-3.2723-2.6535-4.2208-4.5699-0.61652-1.1793-0.33197-2.6535 0.66394-3.4888z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0701"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        {" "}
      </path>
    </Tooltip>

  );
};
LeftBackDoor.propTypes = {
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
export default LeftBackDoor;
