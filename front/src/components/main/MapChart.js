import React, { useMemo, useState } from "react";
import { StyledMarker, ClickedMarker } from "./MapStyled";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { scaleLinear } from "d3-scale";
import ReactTooltip from "react-tooltip";

function MapChart({ data, current, setCurrent }) {
  const [tooltipContent, setTooltipContent] = useState("");

  const popScale = useMemo(() => scaleLinear().domain([0, 89]).range([0, 45]));

  function getColor(trashVolume) {
    if (trashVolume >= 60) return "#fc7800";
    else if (trashVolume >= 40) return "#ffb851";
    else if (trashVolume >= 20) return "#ffcda4";
    else return "#ffe7de";
  }

  function setPosition(REGION_NAME) {
    let y = "2";

    switch (REGION_NAME) {
      case "경기도":
        y = "30";
        break;
      case "인천":
        y = "-8";
        break;
      case "충청북도":
        y = "-10";
        break;
    }
    return y;
  }

  return (
    <div style={{ width: "100%" }}>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{ scale: 6500, rotate: [-128, -36, -8] }}
        width={500}
        height={600}
        style={{ width: "100%" }}
      >
        <Geographies geography={"/korea-geojson.json"}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: "#E1E4E7",
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.3,
                    },
                    hover: {
                      fill: "#E1E4E7",
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.3,
                    },
                    pressed: {
                      fill: "#E1E4E7",
                      outline: "none",
                      stroke: "#FFFFFF",
                      strokeWidth: 0.3,
                    },
                  }}
                />
              ))}
              {geographies.map((geo) => {
                let REGION_NAME = geo.properties.CTP_KOR_NM;
                if (REGION_NAME.includes("시")) {
                  REGION_NAME = REGION_NAME.substr(0, 2);
                }
                const centroid = geoCentroid(geo);
                return (
                  <g key={geo.rsmKey + "-name"}>
                    <Marker coordinates={centroid}>
                      <text
                        y={setPosition(REGION_NAME)}
                        style={{ fontSize: "8px", fill: "gray" }}
                        textAnchor="middle"
                      >
                        {REGION_NAME}
                      </text>
                    </Marker>
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
        {data.map((elem) => {
          return (
            <StyledMarker
              key={elem.id}
              coordinates={[elem.longitude, elem.latitude]}
              onMouseEnter={() => {
                setTooltipContent(`${elem.name}, ${elem.trash}톤`);
              }}
              onMouseLeave={() => {
                setTooltipContent("");
              }}
              onClick={() => {
                setCurrent(elem.id);
                console.log(current);
              }}
              color={getColor(elem.trash)}
            >
              <circle r={popScale(elem.trash)} />
            </StyledMarker>
          );
        })}
        {/* <ClickedMarker
          key="unique"
          coordinates={[data[current].langitude, data[current].latitude]}
          onMouseLeave={() => {
            setTooltipContent("");
          }}
        >
          <circle r={popScale(data[current].trash)} />
        </ClickedMarker> */}
      </ComposableMap>
      <ReactTooltip>{tooltipContent}</ReactTooltip>
    </div>
  );
}

export default MapChart;
