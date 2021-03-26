import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@material-ui/core/Tooltip";
import TitleOfParts from "../../TitleOfParts";

export type Props = {
  //Properties
  style?: object,
  title: string,
  //Events
  onClick?: (event: MouseEvent, part: string) => void,
};
const RightBackDoor = (props: Props) => {
  const { title, onClick, style, ...otherProps } = props;
  const handleClick = (event: any) => {
    if (onClick) {
      props.onClick(event, TitleOfParts.rightBackDoor);
    }
  };
  return (
    <Tooltip onClick={handleClick} title={title} {...otherProps}>
      <path
        d="m114.9 247.46l0.047425 0.098276c2.2764 3.9311 5.1693 7.4199 8.5838 10.319 1.7547 1.4741 3.2723 3.1448 4.5053 4.9138 1.233 1.7198 1.897 3.1448 2.6084 4.619 0.61652 1.2285 1.233 2.5552 2.229 4.1767 0.99592 1.5724 2.0867 3.0957 3.2723 4.5207 1.5176 1.8181 3.462 2.8992 5.3115 2.9483 2.4661 0.049138 5.8806 0.049138 10.196 0.049138 5.5961 0 11.287-0.049138 13.706-0.049138v-25.847c0-7.3707-0.66394-14.741-1.9918-21.965l-3.13-17.248h-13.469c-10.813 0-21.578 2.7517-31.158 7.9113l-4.6476 2.506c-2.2764 1.2285-3.9362 3.2431-4.7899 5.7492-0.33197 0.98276-0.1897 2.0638 0.33197 2.9974l8.3941 14.299zm-3.9837-16.904c0.94849-1.9164 2.4187-3.4888 4.2208-4.5699l3.13-1.8673c8.2044-4.9138 17.452-7.5673 26.937-7.7638l10.149-0.19655c1.5176-0.049138 2.8455 1.1302 3.0352 2.6535l2.4187 16.412c0.14227 0.83535-0.47425 1.5724-1.3279 1.5724h-40.548c-2.7032 0-5.2641-0.98276-7.3508-2.7517-0.94849-0.83535-1.233-2.3095-0.66394-3.4888z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0401"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        {" "}
      </path>
    </Tooltip>
  );
};
RightBackDoor.propTypes = {
  /**
   * Style of Right Front Door
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
export default RightBackDoor;
