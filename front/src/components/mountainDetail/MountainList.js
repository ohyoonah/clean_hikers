/* 국립공원 리스트 */
import { useState, useEffect } from "react";
import styled from "styled-components";
import MountainDetail from "./MountainDetail.js";
import { Level } from "../common/level/Level";
import { Pagination } from "antd";
import * as api from "../../api/api";

const PaginationWrapper = styled(Pagination)`
  /* Display & Box Model */
  display: block;
  text-align: center;
`;
const List = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 40% 40% 20%;
  width: 80%;
  height: 50px;
  padding: 0px 30px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 15px;

  /* Text */
  line-height: 50px;
  text-align: start;

  /* Other */
  cursor: pointer;
  transition-property: border, box-shadow; // 호버 시 테두리색 변경을 위한 코드
  transition: 0.3s; // 호버 시 테두리색 변경을 위한 코드

  :hover {
    transition-property: border; // 호버 시 테두리색 변경을 위한 코드
    transition: 0.3s; // 호버 시 테두리색 변경을 위한 코드
    border: 1px solid rgb(0, 130, 30);
    box-shadow: 1px 1px 2px 0px rgba(150, 150, 150, 0.8);
  }
`;

function MountainList({ MOUNTAIN, isModal, setIsModal, detail, setDetail }) {
  const [mountainList, setMountainList] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    async function getMountainData() {
      try {
        await api
          .get(`mountain/detail`, `?currentPage=${pageNum}`)
          .then(
            (res) => (
              setMountainList(res.data), console.log(res) /*배포시 로그코드 제거필요*/
            )
          );
      } catch (e) {
        console.log(e);
      }
    }
    getMountainData();
  }, [pageNum]);
  return (
    <div>
      {mountainList.map((v, idx) => {
        return (
          <div key={idx}>
            <List
              onClick={() => {
                setIsModal(true);
                setDetail(v);
              }}
            >
              <div>
                <b>{v.name}</b>
              </div>
              <div style={{ textAlign: "start" }}>{v.address}</div>
              <div style={{ textAlign: "end" }}>
                <b>난이도 </b>
                <Level value={v} />
              </div>
            </List>
          </div>
        );
      })}
      <PaginationWrapper
        defaultCurrent={1}
        total={18}
        defaultPageSize={5}
        showSizeChanger={false}
        onChange={(e) => setPageNum(e)}
      />
      {isModal ? (
        <MountainDetail isModal={isModal} setIsModal={setIsModal} detail={detail} />
      ) : (
        <></>
      )}
    </div>
  );
}
export default MountainList;
