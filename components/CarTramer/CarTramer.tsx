import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tooltip from "@material-ui/core/Tooltip";
import PropTypes from "prop-types";
import {
  BackBonnet,
  BackBuffer,
  Ceiling,
  EngineBonnet,
  FrontBuffer,
  LeftBackDoor,
  LeftBackFender,
  LeftFrondFender,
  LeftFrontDoor,
  RightFrondFender,
  RightFrontDoor,
  RightBackDoor
} from "./PartOfCarFile";
import RightBackFender from "./PartOfCarFile/RightBackFender";
import { getStyleObjectFromString } from "../StringUtils";

export type CarTramerProps = {
  text?: string;
  rightBackFender: { color: string, title: string },
  backBonnet: { color: string, title: string },
  leftBackFender: { color: string, title: string },
  rightBackDoor: { color: string, title: string },
  rightFrontDoor: { color: string, title: string },
  ceiling: { color: string, title: string },
  leftBackDoor: { color: string, title: string },
  leftFrontDoor: { color: string, title: string },
  rightFrondFender: { color: string, title: string },
  engineBonnet: { color: string, title: string },
  leftFrondFender: { color: string, title: string },
  frontBuffer: { color: string, title: string },
  backBuffer: { color: string, title: string },

  //events
  rightBackFenderClick: (event: MouseEvent, part: string) => void;
  backBonnetClick: (event: MouseEvent, part: string) => void;
  leftBackFenderClick: (event: MouseEvent, part: string) => void;
  rightBackDoorClick: (event: MouseEvent, part: string) => void;
  rightFrontDoorClick: (event: MouseEvent, part: string) => void;
  ceilingClick: (event: MouseEvent, part: string) => void;
  leftBackDoorClick: (event: MouseEvent, part: string) => void;
  leftFrontDoorClick: (event: MouseEvent, part: string) => void;
  rightFrondFenderClick: (event: MouseEvent, part: string) => void;
  engineBonnetClick: (event: MouseEvent, part: string) => void;
  leftFrondFenderClick: (event: MouseEvent, part: string) => void;
  frontBufferClick: (event: MouseEvent, part: string) => void;
  backBufferClick: (event: MouseEvent, part: string) => void;
};

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
const CarTramer = (props: CarTramerProps) => {
  const {
    rightBackFender,
    backBonnet,
    leftBackFender,
    rightBackDoor,
    rightFrontDoor,
    ceiling,
    leftBackDoor,
    leftFrontDoor,
    rightFrondFender,
    engineBonnet,
    leftFrondFender,
    frontBuffer,
    backBuffer, 
    rightBackFenderClick,
    backBonnetClick,
    leftBackFenderClick,
    rightBackDoorClick,
    rightFrontDoorClick,
    ceilingClick,
    leftBackDoorClick,
    leftFrontDoorClick,
    rightFrondFenderClick,
    engineBonnetClick,
    leftFrondFenderClick,
    frontBufferClick,
    backBufferClick,
    ...otherProps } = props;
  const classes = useToolbarStyles();

  const [tramerColor] = useState({
    rightBackFender,
    backBonnet,
    leftBackFender,
    rightBackDoor,
    rightFrontDoor,
    ceiling,
    leftBackDoor,
    leftFrontDoor,
    rightFrondFender,
    engineBonnet,
    leftFrondFender,
    frontBuffer,
    backBuffer,
  });

  // useEffect(() => {
  //   let data = { ...tramerColor };
  //   Object.keys(dataTramer).forEach(function (key) {
  //     switch (dataTramer[key]) {
  //       case 0:
  //         if (key !== "__v" && key !== "_id") {
  //           data[key].color = color.orginal;
  //           data[key].title = "Orjinal";
  //         }
  //         break;
  //       case 1:
  //         if (key !== "__v" && key !== "_id") {
  //           data[key].color = color.painted;
  //           data[key].title = "Boyalı";
  //         }
  //         break;
  //       case 2:
  //         if (key !== "__v" && key !== "_id") {
  //           data[key].color = color.localPainted;
  //           data[key].title = "Local Boyalı";
  //         }
  //         break;
  //       case 3:
  //         if (key !== "__v" && key !== "_id") {
  //           data[key].color = color.changed;
  //           data[key].title = "Değişen";
  //         }
  //         break;
  //       case 4:
  //         if (key !== "__v" && key !== "_id") {
  //           data[key].color = color.undoAndAttach;
  //           data[key].title = "Sök/Tak";
  //         }
  //         break;
  //       case 5:
  //         if (key !== "__v" && key !== "_id") {
  //           data[key].color = color.meekAndScratch;
  //           data[key].title = "Ezik/Çizik";
  //         }
  //         break;
  //       default:
  //     }
  //   });
  //   debugger
  //   setTramerColor(data);
  // }, [dataTramer]);


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
        <div className={classes.tramerTable}>
          <svg
            className="db ma"
            version="1.1"
            style={{ height: 430 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="Gradient_local"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop
                  offset="0%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff;stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="0%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff;stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="5%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d;stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="10%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="10%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="15%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="15%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="20%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="20%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="25%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="25%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="30%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="30%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="35%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="35%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="40%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="40%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="45%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="45%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="50%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="50%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="55%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="55%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="60%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="60%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="65%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="65%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="70%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="70%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="75%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="75%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="80%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="80%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="85%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="85%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="90%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="90%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="95%"
                  style={getStyleObjectFromString(
                    "stop-color: #fff; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="95%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
                <stop
                  offset="100%"
                  style={getStyleObjectFromString(
                    "stop-color: #ffdb4d; stop-opacity: 1"
                  )}
                ></stop>
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g>
                <g transform="translate(156.5 219.5) rotate(-90) translate(-188.5 -144.5)">
                  <g transform="translate(0)">
                    <path
                      d="m311.85 23.096c0-1.3004-0.20081-2.5488-0.50203-3.8493l-2.8616-11.08 0.40162-2.4448c0.40162-2.2367-1.2049-4.3174-3.4138-4.4215l-19.931-1.1444c-1.4057-0.10403-2.5102 1.1444-2.4097 2.5488 0.20081 2.1847 0.45183 4.4215 0.50203 6.8142 0.40162 13.472-9.8398 24.916-22.842 24.76-12.4-0.10403-22.441-10.559-22.441-23.46 0-2.965 0.050203-5.6179 0.25102-8.3227 0.10041-1.3524-0.95386-2.4968-2.2591-2.4968h-110.6c-1.4057 0-2.46 1.2484-2.2591 2.7049 0.35142 2.3408 0.50203 4.7336 0.50203 7.3344 0.15061 13.004-9.9402 24.188-22.491 24.292-12.601 0.10403-22.842-10.455-22.842-23.46 0-0.67622 0.050203-1.4045 0.10041-2.0807 0.15061-1.5605-1.2551-2.7569-2.711-2.4448l-2.962 0.62421c-1.3053 0.10403-5.3215 0.57219-8.8859 3.9013-1.5563 1.4565-2.5604 3.017-3.2632 4.4215-1.2049 2.4448-2.7612 4.7336-4.6187 6.7622-0.80325 0.88429-1.6567 1.8206-2.46 2.7049-1.8575 3.2251-0.10041 6.7102-0.25102 10.455-0.20081 6.4501 3.8154 12.692 2.2089 19.142-0.25102 0.93631 0.10041 1.9767 0.85345 2.4968 2.6608 1.9246 5.8236 2.913 9.0868 2.913h11.547c0.65264 0 1.2551 0.15605 1.8073 0.46815 2.6106 1.6645 5.1709 3.3811 7.7815 5.0457 9.639 6.2941 20.182 10.924 31.327 13.576 0.60244 0.15605 1.2049 0.26009 1.8073 0.41614 7.5807 1.6645 14.509 2.3408 20.282 2.4968h20.734c20.935 0 41.518-5.6699 59.691-16.437l21.738-12.848 43.928-7.6465c6.8778-1.1964 13.404-4.0573 19.027-8.3748 0.050204-0.052017 6.426-3.4851 6.426-13.368z"
                      stroke="#D3D2D2"
                    ></path>

                    <LeftBackDoor onClick={leftBackDoorClick} title={tramerColor.leftBackDoor.title} style={getStyleObjectFromString(
                      tramerColor.leftBackDoor.color
                    )} />

                    <LeftFrontDoor onClick={leftFrontDoorClick} title={tramerColor.leftFrontDoor.title} style={getStyleObjectFromString(
                      tramerColor.leftFrontDoor.color
                    )} />

                    <path
                      d="m328.49 199.3c-2.1085 1.6125-3.6146 4.1094-3.8656 7.0223l-0.60244 7.0223c-0.30122 3.6412 2.2591 6.8142 5.7734 7.1263s6.5766-2.3408 6.8778-5.982l0.90366-10.611c4.2171 1.7166 8.6851 2.6009 13.254 2.6009h17.822c3.6648 0 6.7272-3.017 6.928-6.8142 0.80325-17.738 1.2551-36.256 1.2551-55.502v-0.41614c0-19.402-0.45183-38.077-1.2551-55.918-0.15061-3.7973-3.213-6.8142-6.928-6.8142h-17.772c-4.5685 0-9.0366 0.88429-13.254 2.6009l-0.90366-10.611c-0.30122-3.6412-3.4138-6.2941-6.8778-5.982-3.5142 0.3121-6.0746 3.5372-5.7734 7.1263l0.60244 7.0223c0.25102 2.913 1.7069 5.4098 3.8656 7.0223v111.11h-0.050203z"
                      stroke="#D3D2D2"
                    ></path>
                    <FrontBuffer onClick={frontBufferClick} title={tramerColor.frontBuffer.title} style={getStyleObjectFromString(
                      tramerColor.frontBuffer.color
                    )} />

                    <path
                      d="m300.87 101.87c-2.3093-4.3174-5.8738-7.6985-10.241-9.6752-2.711-1.2484-5.6729-1.8726-8.6349-1.8726h-54.119c-0.050203-0.26009-0.10041-0.41614-0.15061-0.52017-0.60244-2.0287-2.6608-8.7389-7.7815-11.08-1.8575-0.88429-3.2632-0.72824-3.5644-0.67622-0.20081 0-1.4057 0.15605-2.0081 0.67622-2.1587 1.8206 2.4097 8.3227 4.9199 11.6h-68.879c-2.1587 0-4.3677-0.26009-6.4762-0.83227-2.1085-0.57219-4.3175-0.83227-6.4762-0.83227h-51.559c-2.962 0-5.8738 0.57219-8.6349 1.6645-9.8398 3.9533-19.479 10.143-21.437 20.911-2.0081 10.82-2.3595 22.211-2.3595 32.927 0 8.999 0.25102 18.414 1.5061 27.621h-4.2673c-0.60244 0-1.6567 0-1.7069 3.4851 0 3.4331 1.3053 3.4851 3.3636 3.4851h3.7652c2.6106 9.7792 11.748 15.553 21.085 19.298 2.7612 1.0924 5.6729 1.6645 8.6349 1.6645h51.559c2.2089 0 4.3677-0.26008 6.4762-0.83227 2.1085-0.57219 4.3175-0.83227 6.4762-0.83227h68.879c-2.5102 3.2771-7.0786 9.7792-4.9199 11.6 0.60244 0.52017 1.8073 0.67622 2.0081 0.67622 0.30122 0.052018 1.7069 0.20807 3.5644-0.67622 5.0705-2.3408 7.1288-9.051 7.7815-11.08 0.050204-0.10403 0.10041-0.3121 0.15061-0.52017h54.119c2.962 0 5.924-0.62421 8.6349-1.8726 4.3175-1.9767 7.9321-5.3578 10.241-9.6752 4.4179-8.3748 10.844-23.668 10.844-42.342 0.050203-18.622-6.3758-33.915-10.794-42.29zm-186.3-4.4735h101.66c0.65264 0 0.80325 0.93631 0.15061 1.1444l-26.457 7.9586c-2.2089 0.67622-4.5183 0.98833-6.8276 0.98833h-44.38c-3.5142 0-6.9782-0.78026-10.141-2.2888l-14.258-6.7102c-0.55223-0.26009-0.35142-1.0924 0.25102-1.0924zm-14.91 83.279c-1.8575-11.08-2.9118-23.46-2.9118-36.464s1.0543-25.384 2.9118-36.464c0.30122-1.7686 2.1085-2.7049 3.6648-1.9767l14.057 7.0223c1.0041 0.52017 1.6065 1.6125 1.4559 2.7569-1.1045 8.2707-1.7571 18.102-1.7571 28.609 0 10.507 0.65264 20.339 1.7571 28.609 0.15061 1.1444-0.45183 2.2888-1.4559 2.7569l-14.057 7.0223c-1.5563 0.88429-3.3636-0.10404-3.6648-1.8726zm116.57 10.351h-101.66c-0.60244 0-0.80325-0.83228-0.25102-1.1444l14.258-6.7102c3.1628-1.5085 6.6268-2.2888 10.141-2.2888h44.38c2.3093 0 4.6187 0.36412 6.8276 0.98833l26.457 7.9586c0.60244 0.20807 0.50203 1.1964-0.15061 1.1964zm12.551-7.5425c-0.70284 2.6009-3.3134 4.1094-5.8236 3.3811l-26.708-7.8026c-2.4097-0.72824-3.8656-3.2251-3.3134-5.7739 1.8073-8.5828 2.8114-18.518 2.8114-29.13 0-10.611-1.0041-20.547-2.8114-29.13-0.50203-2.5488 0.90366-5.0457 3.3134-5.7739l26.708-7.8026c2.5102-0.72824 5.1207 0.78026 5.8236 3.3811 3.3636 12.016 5.2211 25.28 5.2211 39.325 0 14.045-1.8575 27.361-5.2211 39.325z"
                      fill="#fff"
                      fill-rule="nonzero"
                      stroke="#D3D2D2"
                    ></path>
                    <LeftBackFender onClick={leftBackFenderClick} title={tramerColor.leftBackFender.title} style={getStyleObjectFromString(
                      tramerColor.leftBackFender.color
                    )} />

                    <LeftFrondFender onClick={leftFrondFenderClick} title={tramerColor.leftFrondFender.title} style={getStyleObjectFromString(
                      tramerColor.leftFrondFender.color
                    )} />


                    <path
                      d="m305.44 252.31c-5.6227-4.3174-12.099-7.1784-19.027-8.3748l-43.928-7.6465-21.738-12.848c-18.174-10.768-38.757-16.437-59.691-16.437h-20.734c-5.8236 0.20807-12.701 0.83227-20.282 2.4968-0.60244 0.15605-1.2049 0.26009-1.8073 0.41614-11.095 2.6009-21.638 7.2824-31.327 13.576-2.6106 1.6645-5.1709 3.3811-7.7815 5.0457-0.55223 0.3121-1.2049 0.46816-1.8073 0.46816h-11.547c-3.2632 0-6.426 1.0403-9.0868 2.913-0.80325 0.57219-1.1045 1.5605-0.85345 2.4968 1.6065 6.4501-2.46 12.692-2.2089 19.142 0.10041 3.7452-1.6065 7.2824 0.25102 10.455 0.80325 0.88429 1.6567 1.8206 2.46 2.7049 1.8575 2.0287 3.4138 4.2654 4.6187 6.7622 0.70284 1.3524 1.7069 2.965 3.2632 4.4215 3.5644 3.3291 7.5807 3.7973 8.8859 3.9013l2.962 0.6242c1.4559 0.3121 2.8114-0.93631 2.711-2.4448-0.050203-0.67622-0.10041-1.3524-0.10041-2.0807 0-13.004 10.241-23.564 22.842-23.46 12.551 0.10403 22.642 11.288 22.491 24.292-0.050203 2.6009-0.15061 4.9936-0.50203 7.3344-0.20081 1.4045 0.85345 2.7049 2.2591 2.7049h110.55c1.3053 0 2.3595-1.1444 2.2591-2.4968-0.20081-2.7049-0.25102-5.3057-0.25102-8.3227 0-12.9 10.041-23.356 22.441-23.46 13.003-0.10403 23.244 11.34 22.842 24.76-0.050203 2.3928-0.30122 4.6295-0.50203 6.8142-0.15061 1.4565 1.0041 2.6529 2.4097 2.5488l19.931-1.1444c2.2089-0.10404 3.7652-2.1847 3.4138-4.4215l-0.40162-2.4448 2.8616-11.08c0.35142-1.3004 0.50203-2.5488 0.50203-3.8493 0-9.9353-6.3758-13.368-6.3758-13.368z"
                      stroke="#D3D2D2"
                    ></path>
                    <RightFrondFender onClick={rightFrondFenderClick} title={tramerColor.rightFrondFender.title} style={getStyleObjectFromString(
                      tramerColor.rightFrondFender.color
                    )} />

                    <RightFrontDoor onClick={rightFrontDoorClick} title={tramerColor.rightFrontDoor.title} style={getStyleObjectFromString(
                      tramerColor.rightFrontDoor.color
                    )} />

                    <RightBackDoor onClick={rightBackDoorClick} title={tramerColor.rightBackDoor.title} style={getStyleObjectFromString(
                      tramerColor.rightBackDoor.color
                    )} />

                    <RightBackFender onClick={rightBackFenderClick} title={tramerColor.rightBackFender.title} style={getStyleObjectFromString(
                      tramerColor.rightBackFender.color
                    )} />
                    <EngineBonnet onClick={engineBonnetClick}  title={tramerColor.engineBonnet.title} style={getStyleObjectFromString(
                      tramerColor.engineBonnet.color
                    )} />
                    <BackBonnet onClick={backBonnetClick} title={tramerColor.backBonnet.title} style={getStyleObjectFromString(
                      tramerColor.backBonnet.color
                    )} />
                    <Ceiling onClick={ceilingClick}  title={tramerColor.ceiling.title} style={getStyleObjectFromString(
                      tramerColor.ceiling.color
                    )} />
                    <path
                      d="m361.78 111.14s0.050203-7.4385-2.6608-11.34c-2.711-3.9013-12.701-7.8026-12.701-7.8026s-2.9118 22.471 6.677 28.505c9.5888 6.034 8.6851-9.3631 8.6851-9.3631z"
                      fill="#fff"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      d="m361.78 179.77s0.050203 7.4385-2.6608 11.34-12.701 7.8026-12.701 7.8026-2.9118-22.471 6.677-28.505c9.5888-6.034 8.6851 9.3631 8.6851 9.3631z"
                      fill="#fff"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      d="m39.259 83.601c-4.2171-1.7166-8.6851-2.6009-13.254-2.6009h-17.822c-3.6648 0-6.7272 3.017-6.928 6.8142-0.80325 17.738-1.2551 36.256-1.2551 55.502v0.41614c0 19.402 0.45183 38.077 1.2551 55.918 0.15061 3.7973 3.213 6.8142 6.928 6.8142h17.822c4.5685 0 9.0366-0.88429 13.254-2.6009v-120.26z"
                      stroke="#D3D2D2"
                    ></path>
                    <BackBuffer onClick={backBufferClick} title={tramerColor.backBuffer.title} style={getStyleObjectFromString(
                      tramerColor.backBuffer.color
                    )} />
                    <path
                      d="m28.681 136.18h-4.1669c-1.9077 0-3.5142-1.6125-3.5142-3.6412v-39.897c0-2.0287 1.6065-3.6412 3.5142-3.6412h4.1669c1.9077 0 3.5142 1.6125 3.5142 3.6412v39.897c0 2.0287-1.6065 3.6412-3.5142 3.6412z"
                      fill="#fff"
                      fill-rule="nonzero"
                    ></path>
                    <path
                      d="m28.681 199.18h-4.1669c-1.9077 0-3.5142-1.6125-3.5142-3.6412v-39.897c0-2.0287 1.6065-3.6412 3.5142-3.6412h4.1669c1.9077 0 3.5142 1.6125 3.5142 3.6412v39.897c0 2.0287-1.6065 3.6412-3.5142 3.6412z"
                      fill="#fff"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

      </div>
    </Paper>
  );
};

CarTramer.propTypes = {
  /**
   * Tramer.first props
   */
  tramer: PropTypes.string,
  /**
 * Right Back Fender details
 */
  rightBackFender: PropTypes.object,
  /**
 * Back Bonnet details
 */
  backBonnet: PropTypes.object,
  /**
  /**
 * Left Back Fender Fender details
 */
  leftBackFender: PropTypes.object,
  /**
 * Right Back Door details
 */
  rightBackDoor: PropTypes.object,
  /**
 * Right Front Door details
 */
  rightFrontDoor: PropTypes.object,
  /**
 * Ceiling details
 */
  ceiling: PropTypes.object,
  /**
 * Left Back Door details
 */
  leftBackDoor: PropTypes.object,
  /**
 * Left Front Door details
 */
  leftFrontDoor: PropTypes.object,
  /**
 * Right Frond Fender details
 */
  rightFrondFender: PropTypes.object,
  /**
 * Engine Bonnet details
 */
  engineBonnet: PropTypes.object,
  /**
 * Left Frond Fender details
 */
  leftFrondFender: PropTypes.object,
  /**
 * Front Buffer details
 */
  frontBuffer: PropTypes.object,
  /**
 * Back Buffer details
 */
  backBuffer: PropTypes.object,


  /**
* Right Back Fender Click details
*/
  rightBackFenderClick: PropTypes.object,
  /**
 * Back Bonnet Click details
 */
  backBonnetClick: PropTypes.object,
  /**
  /**
 * Left Back Fender Fender Click details
 */
  leftBackFenderClick: PropTypes.object,
  /**
 * Right Back Door Click details
 */
  rightBackDoorClick: PropTypes.object,
  /**
 * Right Front Door Click details
 */
  rightFrontDoorClick: PropTypes.object,
  /**
 * Ceiling Click details
 */
  ceilingClick: PropTypes.object,
  /**
 * Left Back Door Click details
 */
  leftBackDoorClick: PropTypes.object,
  /**
 * Left Front Door Click details
 */
  leftFrontDoorClick: PropTypes.object,
  /**
 * Right Frond Fender Click details
 */
  rightFrondFenderClick: PropTypes.object,
  /**
 * Engine Bonnet Click details
 */
  engineBonnetClick: PropTypes.object,
  /**
 * Left Frond Fender Click details
 */
  leftFrondFenderClick: PropTypes.object,
  /**
 * Front Buffer Click details
 */
  frontBufferClick: PropTypes.object,
  /**
 * Back Buffer Click details
 */
  backBufferClick: PropTypes.object,



};

export default CarTramer
