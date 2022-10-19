import styled from "styled-components";
import { Geography, Marker } from "react-simple-maps";
import { theme } from "../common/styles/palette";
import { Slider } from "antd";

export const SliderStyled = styled(Slider)`
  // position: absolute;
  // width: 600px;
  // height: 20px;
  // z-index: 12;
  // bottom: 100px;

  & > .ant-slider-rail {
    background: linear-gradient(
      to right,
      #e6f4cf 0%,
      #e6f4cf 25%,
      #a6dd81 25%,
      #a6dd81 50%,
      #67bd4a 50%,
      #67bd4a 75%,
      #3b7b2d 75%,
      #3b7b2d 100%
    );
  }
  & > .ant-slider-track {
    display: none;
  }
  & > .ant-slider-handle {
  }
`;

export const GeographyStyled = styled(Geography)`
  fill: #e2e4e7;

  outline: none;
  stroke: #fff;
  strokewidth: 0.3;
  //   },
  //   hover: {
  //     fill: "#e2e4e7",
  //     outline: "none",
  //     stroke: "#FFFFFF",
  //     strokeWidth: 0.3,
  //   },
  //   pressed: {
  //     fill: "#e2e4e7",
  //     outline: "none",
  //     stroke: "#FFFFFF",
  //     strokeWidth: 0.3,
  //   },
  // }}
`;

export const StyledMarker = styled(Marker)`
  & circle {
    transition: ease-in 0.2s;
    fill: ${(props) => props.color};
    opacity: 0.6;
  }

  & circle:hover {
    transform: scale(1.1);
  }

  & text:hover {
    font-weight: bold;
  }
`;
