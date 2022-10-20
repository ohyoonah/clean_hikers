import { useState, useEffect } from "react";
import { Map, MapMarker, CustomOverlayMap, useMap } from "react-kakao-maps-sdk";
import * as api from "../../api/api";
import styled from "styled-components";

const Div = styled.div`
  z-index: 0;
`;
const MapWrapper = styled(Map)`
  border-radius: 10px;
`;

const MountainNameMarker = styled.div`
  border: 3px solid #0091ea;
  border-radius: 5px;
  padding: 0px 5px;

  background-color: white;

  font-weight: 600;
  font-size: 16px;
`;

function MountainMap({ setIsModal, setDetail }) {
  const [data, setData] = useState([]);
  const [isMouseOver, setIsMouseOver] = useState(null);

  useEffect(() => {
    async function getAllData() {
      try {
        await api.get("main/data").then((res) => setData(res.data));
      } catch (e) {
        console.log(e);
      }
    }
    getAllData();
  }, []);

  const EventMarkerContainer = ({ value, index }) => {
    const map = useMap();

    return (
      <div>
        <MapMarker
          position={{ lat: value.latitude, lng: value.longitude }}
          onClick={(marker) => (
            map.panTo(marker.getPosition()), setIsModal(true), setDetail(value)
          )}
          onMouseOver={() => setIsMouseOver(index)}
          onMouseOut={() => {
            if (isMouseOver == index) setIsMouseOver(null);
          }}
        />
        {isMouseOver == index && (
          <CustomOverlayMap
            position={{
              lat: value.latitude,
              lng: value.longitude,
            }}
            yAnchor={2.3}
          >
            <MountainNameMarker>{value.name}</MountainNameMarker>
          </CustomOverlayMap>
        )}
      </div>
    );
  };

  return (
    <Div>
      <MapWrapper
        center={{ lat: 35.87, lng: 127.7107656 }}
        style={{ width: "400px", height: "600px", margin: "0px auto" }}
        level={13}
      >
        {data.map((value, index) => {
          return (
            <div key={index}>
              <EventMarkerContainer value={value} index={index} />
            </div>
          );
        })}
      </MapWrapper>
    </Div>
  );
}
export default MountainMap;
