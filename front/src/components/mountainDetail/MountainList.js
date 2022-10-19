/* 국립공원 리스트 */
import styled from "styled-components";
import MountainDetail from "./MountainDetail.js";
import { Level } from "../common/level/Level";
import { Pagination } from "antd";
import { theme } from "../common/styles/palette";

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

const Lists = styled.div`
  z-index: -10;
  height: 460px;
  width: 1130px;
  max-width: 80%;
  /* border: 1px solid ${theme.naturalGreen}; */
  border-radius: 10px;

  margin: 0 auto;
  margin-top: 15px;

  /* background-color: ${theme.naturalGreen}; */
`;

const Desc = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  /* width: 1130px; */
  /* max-width: 80%; */
  height: 50px;
  /* padding: 0px 50px; */
  /* border-bottom: 1px solid rgb(220, 220, 220); */
  margin: 0 auto;
  /* margin-top: 15px; */
  border-radius: 10px 10px 0px 0px;

  /* Color */
  background-color: ${theme.naturalGreen};

  /* Text */
  line-height: 50px;
  text-align: center;
  font-size: 20px;
`;

const List = styled.div`
  /* Display & Box Model */
  display: grid;
  grid-template-columns: 1fr 1.5fr 1.5fr 1fr;
  /* width: 1130px; */
  /* max-width: 80%; */
  height: 80px;
  /* padding: 0px 55px; */
  /* border: 1px solid rgb(220, 220, 220); */
  border-bottom: 1px solid ${theme.naturalGreen};
  /* border-radius: 10px; */
  margin: 0 auto;
  /* margin-bottom: 15px; */

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

function MountainList({
  isModal,
  setIsModal,
  detail,
  setDetail,
  mountainList,
  maxPage,
  setPageNum,
}) {
  return (
    <div>
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
      {isModal ? (
        <MountainDetail isModal={isModal} setIsModal={setIsModal} detail={detail} />
      ) : (
        <></>
      )}
    </div>
  );
}
export default MountainList;
