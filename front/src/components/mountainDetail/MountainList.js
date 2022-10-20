/* 국립공원 리스트 */
import styled from "styled-components";
import MountainDetail from "./MountainDetail.js";
import { Level } from "../common/level/Level";
import { Pagination } from "antd";
import { theme } from "../common/styles/palette";
import MountainSearch from "./MountainSearch.js";

const H2 = styled.h2`
  /* Display & Box Model */
  margin-bottom: 10px;
  /* Text */
  font-weight: 700;
  text-align: center;
`;

const Lists = styled.div`
  /* height: 500px; */
  /* width: 1130px;
  max-width: 80%; */
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 15px;
`;

const Desc = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  height: 50px;
  margin: 0 auto;
  border-radius: 10px 10px 0px 0px;

  /* Color */
  background-color: ${theme.naturalGreen};
  color: white;

  /* Text */
  line-height: 50px;
  text-align: center;
  font-size: 18px;
`;

const List = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  height: 80px;
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
    background-color: ${theme.lightGrey};
    /* box-shadow: 1px 1px 2px 0px rgba(150, 150, 150, 0.8); */
  }
`;

const PaginationWrapper = styled(Pagination)`
  /* Display & Box Model */
  display: block;
  height: fit-content;
  text-align: center;
  /* line-height: 30px; */

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
  mountainList,
  maxPage,
  setPageNum,
  location,
  setLocation,
  difficulty,
  setDifficulty,
  search,
  setSearch,
  setMountainList,
  pageNum,
}) {
  return (
    <div>
      <H2>궁금하신 산을 검색해보세요</H2>
      <MountainSearch
        location={location}
        setLocation={setLocation}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        search={search}
        setSearch={setSearch}
        setMountainList={setMountainList}
        pageNum={pageNum}
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
