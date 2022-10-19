import styled from "styled-components";
import { Marker } from "react-simple-maps";
import { theme } from "../common/styles/palette";

export const MapWrapper = styled.div``;

export const StyledMarker = styled(Marker)`
  & circle {
    transition: ease-in 0.2s;
    fill: ${(props) => props.color};
    opacity: 0.6;
    stroke: #f17f0f;
    stroke-width: 0.5;
  }
  & circle:hover {
    transform: scale(1.2);
    // fill: red;
    // stroke: #333;
    opacity: 0.8;
  }

  & text:hover {
    font-weight: bold;
  }
`;

export const ClickedMarker = styled(Marker)`
  & circle {
    transform: scale(1.2);
    fill: #ff9e3f;
    stroke: #f17f0f;
    stroke-width: 0.5;
  }
`;
