import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import  FrontBuffer from "./PartOfCarFile/FrontBuffer";
export type CarTramerProps = {
  text: string;
};
type CardProps = {
  tramer: string,
}
const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    minWidth: "80%",
    paddingTop: theme.spacing(2),
  },
  costTable: {
    minWidth: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  tramerTable: {
    minWidth: "100%",
    display: "flex",
    justifyContent: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
const CarTramer = ({ tramer }: CardProps) => {
  const classes = useToolbarStyles();

  return (
    <Paper className={classes.root}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FrontBuffer/>
      </div>
    </Paper>
  );
};

CarTramer.propTypes = {
  /**
   * Tramer.first props
   */
  tramer: PropTypes.string,
};

export default CarTramer
