import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  style?: object;
  title: string;
};
const RightFrontDoor = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}>
      <path
        d="m169.03 253.22v25.886h57.66c0.85493 0 1.6149-0.63976 1.7574-1.5256l0.28498-1.7224c1.8049-11.811 1.0449-24.065-2.1848-35.531-1.1399-3.9862-3.6572-7.3819-7.0769-9.5472-15.911-9.9409-34.055-15.65-52.531-16.634l-2.9448-0.14764 3.0398 16.732c1.3299 7.3819 1.9948 14.961 1.9948 22.49zm-0.52246-36.86l7.0769 0.98425c16.054 2.2146 31.395 8.2185 44.836 17.52l0.37997 0.24606h-0.23748-7.3144c-2.2323 0-4.0372 1.8701-4.0372 4.1831v0.049213c0 2.0669 1.6149 3.7401 3.6097 3.7401h7.3144c0.47496 0 0.94992-0.098425 1.3774-0.29528 0.23748-0.098425 0.52246 0 0.61745 0.24606 0.094992 0.24606 0 0.54134-0.23748 0.63976-0.56996 0.24606-1.1399 0.34449-1.7574 0.34449h-7.3144c-2.4698 0-4.5121-2.0669-4.5121-4.6752v-0.049213l-34.055-1.9193c-1.7099-0.098425-3.1348-1.3287-3.5622-3.0512l-3.8472-15.994c-0.33247-1.0827 0.56996-2.1161 1.6624-1.9685z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0501"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        {" "}
      </path>
    </Tooltip>
  );
};
RightFrontDoor.propTypes = {
  /**
   * Style of Right Front Door
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,

};
export default RightFrontDoor;
