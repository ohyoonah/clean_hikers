/* 국립공원 리스트 */
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Level } from "../common/level/Level";
import { Pagination } from "antd";
import { theme } from "../common/styles/palette";
import MountainSearch from "./MountainSearch.js";
import * as api from "../../api/api";

const Lists = styled.div`
  height: 460px;
  /* width: 1130px;
  max-width: 80%; */
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Desc = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px 10px 0px 0px;

  /* Color */
  background-color: ${theme.naturalGreen};
  color: white;

  /* Text */
  line-height: 40px;
  text-align: center;
  font-size: 18px;
`;

const List = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  height: 85px;
  border-bottom: 1px solid ${theme.naturalGreen};
  margin: 0 auto;
  background-color: white;

  /* Text */
  line-height: 80px;
  text-align: center;

  /* Other */
  cursor: pointer;
  transition-property: border, box-shadow; // 호버 시 테두리색 변경을 위한 코드
  transition: 0.3s; // 호버 시 테두리색 변경을 위한 코드

  :hover {
    transition-property: background-color; // 호버 시 테두리색 변경을 위한 코드
    transition: 0.3s; // 호버 시 테두리색 변경을 위한 코드
    background-color: rgba(137, 165, 80, 0.4);
    /* box-shadow: 1px 1px 2px 0px rgba(150, 150, 150, 0.8); */
  }
`;

const PaginationWrapper = styled(Pagination)`
  /* Display & Box Model */
  display: block;
  height: 65px;
  text-align: center;
  line-height: 95px;

  .ant-pagination-item-active a {
    color: #89a550;
    border: none;
  }
  .ant-pagination-item-active {
    border: none;
    text-decoration: underline 2px;
  }
`;

function MountainList({
  setIsModal,
  setDetail,
  pageNum,
  setPageNum,
  location,
  setLocation,
  difficulty,
  setDifficulty,
  search,
  setSearch,
}) {
  const [mountainList, setMountainList] = useState([]);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    async function getMountainData() {
      try {
        await api
          .get(
            `mountain/detail`,
            `?location=${location}&level=${difficulty}&currentPage=${pageNum}&mountain=${search}`
          )
          .then((res) =>
            res.data.maxPage === 0
              ? setMountainList([])
              : (setMountainList(res.data.mountain), setMaxPage(res.data.maxPage))
          );
      } catch (e) {
        console.log(e);
      }
    }
    getMountainData();
  }, [pageNum, location, difficulty, search]);

  return (
    <div>
      <MountainSearch
        setLocation={setLocation}
        setDifficulty={setDifficulty}
        search={search}
        setSearch={setSearch}
      />
      <Lists>
        <Desc>
          <b>산이름</b>
          <b>위치</b>
          <b>연간 쓰레기 처리량(톤)</b>
          <b>등산 난이도</b>
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
                <b>{detail.name}</b>
                <div>{detail.address}</div>
                <div>{Number(detail.trash).toFixed(1)}</div>
                <div>
                  <Level difficulty={detail.difficulty} />
                </div>
              </List>
            </div>
          );
        })}
      </Lists>
      <PaginationWrapper
        defaultCurrent={1}
        total={maxPage * 5}
        defaultPageSize={5}
        size="small"
        onChange={(e) => setPageNum(e)}
      />
    </div>
  );
}
export default MountainList;
