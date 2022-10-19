import React, { useMemo, useState } from "react";
import { StyledMarker, GeographyStyled, SliderStyled } from "./MapStyled";
import { Tooltip } from "antd";
import { ComposableMap, Geographies, Marker } from "react-simple-maps";
import { geoCentroid } from "d3-geo";
import { scaleLinear } from "d3-scale";

function MapChart({ data, setCurrent }) {
  const [filteredData, setFilteredData] = useState(data);

  const popScale = useMemo(() => scaleLinear().domain([15, 89]).range([8, 25]));

  const marks = {
    0: "0",
    80: "80(톤)",
  };

  function getColor(trashVolume) {
    if (trashVolume >= 60) return "#3b7b2d";
    else if (trashVolume >= 40) return "#67bd4a";
    else if (trashVolume >= 20) return "#a6dd81";
    else return "#e6f4cf";
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

  function onSliderChange(value) {
    const newFilteredData = data.filter((elem) => elem.trash * 1 >= value);
    setFilteredData(newFilteredData);
  }

  return (
    <div>
      <ComposableMap
        data-tip=""
        projection="geoAzimuthalEqualArea"
        projectionConfig={{ scale: 6500, rotate: [-127.6, -36, -11] }}
        width={400}
        height={600}
        style={{
          margin: "50px 0",
          height: "820px",
        }}
      >
        <Geographies geography={"/korea-geojson.json"}>
          {({ geographies }) => (
            <>
              {geographies.map((geo) => (
                <GeographyStyled key={geo.rsmKey} geography={geo} />
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
                        style={{ fontSize: "9px", fill: "gray" }}
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
        {filteredData.map((elem) => (
          <StyledMarker
            key={elem.id}
            coordinates={[elem.longitude, elem.latitude]}
            onClick={() => {
              setCurrent(elem.id);
            }}
            color={getColor(elem.trash)}
          >
            <Tooltip
              title={`${elem.name}, 
                ${elem.trash}톤`}
            >
              <circle r={popScale(elem.trash)} />
            </Tooltip>
          </StyledMarker>
        ))}
        {/* <ClickedMarker
          key="unique"
          coordinates={[data[current]["longitude"], data[current]["latitude"]]}
        >
          <circle r={popScale(data[current].trash)} />
        </ClickedMarker> */}
      </ComposableMap>
      <SliderStyled
        // step={20}
        onChange={onSliderChange}
        defaultValue={0}
        min={0}
        max={80}
        marks={marks}
        included={false}
      />
    </div>
  );
}

export default MapChart;
