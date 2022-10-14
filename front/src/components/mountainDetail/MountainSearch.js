/*검색창*/
import { useState } from "react";
import styled from "styled-components";
import { Select, Input } from "antd";
import { NonIconBlueBtn } from "../common/button/NonIconBtn";

const { Option } = Select;

const Main = styled.form`
  /* Display & Box Model */
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 3fr 1fr;
  grid-column-gap: 15px;
  width: 80%;
  padding: 15px;
  border-radius: 20px;
  margin: 0 auto;
  margin-bottom: 30px;

  /* Color */
  background-color: rgb(230, 230, 230);

  /* Text */
  align-items: center;
`;

const InputWrapper = styled(Input)`
  /* Display & Box Model */
  height: 40px;
  padding: 0px 20px;
  border: 0px;
  border-radius: 10px;

  /* Color */
  background-color: white;

  /* Text */
  font-size: 16px;

  /* Other */
  outline: none;
`;

const SelectWrapper = styled(Select)`
  /* Display & Box Model */
  height: 40px;
  padding: 4px 0px;
  border-radius: 10px;

  /* Color */
  background-color: white;
`;

function MountainSearch() {
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState("");
  const [search, setSearch] = useState("");

  const onSubmit = (e) => {
    e.preventDefault(); // 엔터 press 시 자동 submit 막는 기능
    setLocation(""); // submit 시 위치 드롭다운 초기화
    setLevel(""); // submit 시 난이도 드롭다운 초기화
    setSearch(""); // submit 시 검색 창 글자 초기화
    console.log(location, level);
    // 추후 백엔드로 post하는 코드 삽입구역
  };

  const onChange = (e) => {
    // 검색 창에 입력된 글자를 받아오는 함수
    setSearch(e.target.value);
  };

  return (
    <Main onSubmit={onSubmit}>
      {/* 위치선택 셀렉트 */}
      <SelectWrapper
        bordered={false}
        defaultValue="지역"
        onChange={(e) => setLocation(e)}
      >
        <Option value="0"> 서울</Option>
        <Option value="1"> 경기</Option>
        <Option value="2"> 인천</Option>
        <Option value="3"> 강원</Option>
        <Option value="4"> 충북</Option>
        <Option value="5"> 충남</Option>
        <Option value="6"> 경북</Option>
        <Option value="7"> 경남</Option>
        <Option value="8"> 전북</Option>
        <Option value="9"> 전남</Option>
        <Option value="10"> 부산</Option>
        <Option value="11"> 제주</Option>
      </SelectWrapper>

      {/* 난이도선택 셀렉트 */}
      <SelectWrapper bordered={false} defaultValue="난이도" onChange={(e) => setLevel(e)}>
        <Option value="high">상</Option>
        <Option value="middle">중</Option>
        <Option value="low">하</Option>
      </SelectWrapper>

      <InputWrapper
        type="text"
        onChange={onChange}
        placeholder="산 이름을 입력해주세요..."
        value={search}
        autoFocus={true}
      />
      <NonIconBlueBtn text={"검색"} />
    </Main>
  );
}
export default MountainSearch;
