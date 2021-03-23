import React from 'react';
import PropTypes from "prop-types";
import Tooltip from '@material-ui/core/Tooltip';

export type Props = {
  style: object;
  title: string;
};
const LeftFrontDoor = (props: Props) => {
  const { title, style, ...otherProps } = props;
  return (
    <Tooltip title={title}>
      <path
        d="m166.04 58.376l-3.0398 16.732 2.9448-0.14764c18.476-0.98425 36.62-6.7421 52.483-16.634 3.4197-2.1653 5.9845-5.561 7.0769-9.5472 3.2297-11.467 3.9897-23.72 2.1848-35.531l-0.28498-1.7224c-0.14249-0.88582-0.85493-1.5256-1.7574-1.5256h-57.613v25.886c0 7.5295-0.66495 15.108-1.9948 22.49zm-0.28498 12.352l3.8472-15.994c0.42747-1.7224 1.8524-2.9527 3.5622-3.0512l34.055-1.9193v-0.049212c0-2.559 1.9948-4.6752 4.5121-4.6752h7.3144c0.61745 0 1.1874 0.14764 1.7574 0.34449 0.23748 0.098425 0.33247 0.3937 0.23748 0.63976-0.094992 0.24606-0.37997 0.34449-0.61745 0.24606-0.42747-0.19685-0.90243-0.29527-1.3774-0.29527h-7.3144c-1.9948 0-3.6097 1.6732-3.6097 3.7401v0.049212c0 2.313 1.8049 4.1831 4.0372 4.1831h7.3144 0.23748l-0.37997 0.24606c-13.489 9.3012-28.783 15.305-44.836 17.52l-7.0769 0.98425c-0.99742 0.19685-1.8998-0.83661-1.6624-1.9685z"
        fill="#E9E9E9"
        fill-rule="nonzero"
        id="B0801"
        uib-tooltip="Orijinal"
        tooltip-append-to-body="true"
        style={style}
      >
        {" "}
      </path>
    </Tooltip>
  );
};
LeftFrontDoor.propTypes = {
  /**
   * Style of Left Front Door
   */
  style: PropTypes.object,
  /**
  * Title of Tooltip
  */
  title: PropTypes.string,

};
export default LeftFrontDoor;
