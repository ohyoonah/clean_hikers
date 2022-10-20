import { useState, useEffect } from "react";
import { Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import * as api from "../../api/api";
import styled from "styled-components";

const Div = styled.div`
  z-index: 0;
`;
const MountainNameMap = styled.div`
  text-align: center;
`;

function MountainMap({ isModal, setIsModal, detail, setDetail }) {
  const [data, setData] = useState([]);

  const EventMarkerContainer = ({ position, content, detail }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
    return (
      <MapMarker
        position={position} // 마커를 표시할 위치
        // @ts-ignore
        onClick={(marker) => (
          map.panTo(marker.getPosition()),
          setIsModal(true),
          setDetail(detail),
          console.log(detail)
        )}
        onMouseOver={() => setIsVisible(true)}
        onMouseOut={() => setIsVisible(false)}
      >
        {isVisible && content}
      </MapMarker>
    );
  };

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

  return (
    <Div>
      <Map
        center={{ lat: 35.87, lng: 127.7107656 }}
        style={{ width: "400px", height: "600px", margin: "0px auto" }}
        level={13}
      >
        {data.map((value, index) => {
          return (
            <div key={index}>
              <MapMarker position={{ lat: value.latitude, lng: value.longitude }} />
              <EventMarkerContainer
                key={`EventMarkerContainer-${value.latitude}-${value.longitude}`}
                position={{ lat: value.latitude, lng: value.longitude }}
                content={<MountainNameMap>{value.name}</MountainNameMap>}
                detail={value}
              />
            </div>
          );
        })}
      </Map>
    </Div>
  );
}
export default MountainMap;
