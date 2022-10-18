/* 국립공원 리스트 */
import { useState, useEffect } from "react";
import styled from "styled-components";
import MountainDetail from "./MountainDetail.js";
import { Level } from "../common/level/Level";
import { Pagination } from "antd";
// import BottomNavigation from "../common/navigation/BottomNavigation";
import * as api from "../../api/api";

const PaginationWrapper = styled(Pagination)`
  /* Display & Box Model */
  display: block;
  text-align: center;
  padding-top: 15px;

  .ant-pagination-item-active a {
    color: #89a550;
    border: none;
  }
  .ant-pagination-item-active {
    border: none;
    text-decoration: underline 2px;
  }
`;

const Desc = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 1130px;
  max-width: 80%;
  height: 50px;
  padding: 0px 30px;
  border-bottom: 1px solid rgb(220, 220, 220);
  /* border-radius: 10px; */
  margin: 0 auto;
  margin-bottom: 15px;

  /* Text */
  line-height: 70px;
  text-align: center;
`;

const List = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 1130px;
  max-width: 80%;
  height: 80px;
  padding: 0px 30px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 15px;

  /* Text */
  line-height: 80px;
  text-align: center;

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

function MountainList({
  isModal,
  setIsModal,
  detail,
  setDetail,
  location,
  difficulty,
  search,
  pageNum,
  setPageNum,
  mountainList,
  setMountainList,
}) {
  useEffect(() => {
    async function getMountainData() {
      try {
        await api
          .get(`mountain/detail`, `?currentPage=${pageNum}`)
          .then((res) => setMountainList(res.data.mountain));
      } catch (e) {
        console.log(e);
      }
    }
    getMountainData();
  }, [pageNum]);
  return (
    <div>
      <Desc>
        <b style={{ textAlign: "start" }}>산이름</b>
        <b>위치</b>
        <b>연간 쓰레기 처리량(톤)</b>
        <b style={{ textAlign: "end" }}>등산 난이도</b>
      </Desc>
      {mountainList.map((detail, idx) => {
        return (
          <div key={idx}>
            <List
              onClick={() => {
                setIsModal(true);
                setDetail(detail);
              }}
            >
              <b style={{ textAlign: "start" }}>{detail.name}</b>
              <div>{detail.address}</div>
              <div>{Number(detail.trash).toFixed(1)}</div>
              <div style={{ textAlign: "end", paddingRight: "20px" }}>
                <Level difficulty={detail.difficulty} />
              </div>
            </List>
          </div>
        );
      })}

      <PaginationWrapper
        defaultCurrent={1}
        total={18}
        defaultPageSize={5}
        size="small"
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
