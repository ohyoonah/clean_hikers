/*검색창*/
import { useState } from "react";
import styled from "styled-components";
import { Select, Input, Form } from "antd";
import { NonIconBlueBtn } from "../common/button/NonIconBtn";
import * as api from "../../api/api";

const { Option } = Select;

const Main = styled(Form)`
  /* Display & Box Model */
  display: grid;
  justify-content: center;
  grid-template-columns: 150px 150px 3fr 120px;
  grid-column-gap: 15px;
  width: 1130px;
  max-width: 80%;
  padding: 15px;
  border-radius: 20px;
  margin: 0 auto;

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

const regions = [
  "서울특별시",
  "강원도",
  "광주광역시",
  "충청북도",
  "충청남도",
  "경상북도",
  "경상남도",
  "전라북도",
  "전라남도",
  "제주시",
];

function MountainSearch({
  location,
  setLocation,
  difficulty,
  setDifficulty,
  search,
  setSearch,
  setMountainList,
  pageNum,
  setPageNum,
}) {
  const [form] = Form.useForm();

  const onSubmit = (e) => {
    e.preventDefault(); // 엔터 press 시 자동 submit 막는 기능
    setLocation(""); // submit 시 위치 드롭다운 초기화
    setDifficulty(""); // submit 시 난이도 드롭다운 초기화
    setSearch(""); // submit 시 검색 창 글자 초기화
    setPageNum(1);
    // 추후 백엔드로 post하는 코드 삽입구역
    getMountainData();
  };

  const onChange = (e) => {
    // 검색 창에 입력된 글자를 받아오는 함수
    setSearch(e.target.value);
  };

  async function getMountainData() {
    try {
      await api
        .get(
          `mountain/detail`,
          `?location=${location}&level=${difficulty}&currentPage=${pageNum}&mountain=${search}`
        )
        .then((res) => setMountainList(res.data.mountain));
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Main onFinish={onSubmit} form={form}>
      {/* 위치선택 셀렉트 */}
      <SelectWrapper bordered={false} placeholder="지역" onChange={(e) => setLocation(e)}>
        {regions.map((area, idx) => (
          <Option value={area} key={idx}>
            {area}
          </Option>
        ))}
      </SelectWrapper>

      {/* 난이도선택 셀렉트 */}
      <SelectWrapper
        bordered={false}
        placeholder="난이도"
        onChange={(e) => setDifficulty(e)}
      >
        <Option value="상">상</Option>
        <Option value="중">중</Option>
        <Option value="하">하</Option>
        <Option value="미분류">미분류</Option>
      </SelectWrapper>

      <InputWrapper
        type="text"
        onChange={onChange}
        placeholder="산 이름을 입력해주세요..."
        value={search}
      />
      <NonIconBlueBtn
        htmlType="submit"
        text={"검색"}
        onClick={(e) => {
          e.preventDefault();
          setLocation(""); // submit 시 위치 드롭다운 초기화
          setDifficulty(""); // submit 시 난이도 드롭다운 초기화
          setSearch(""); // submit 시 검색 창 글자 초기화
          setPageNum(1);
          getMountainData();
        }}
      />
    </Main>
  );
}
export default MountainSearch;
