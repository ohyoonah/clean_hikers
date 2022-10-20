import { Button, DatePicker, Input, Row } from "antd";
import styled from "styled-components";
import { theme } from "../../common/styles/palette";

const AllContentAlign = styled.div`
  width: 80%;
  max-width: 1130px;
`;
const RegisterBtnStyled = styled.div`
  margin: 20px 0px;
  float: right;
  justify-content: space-between;
  .community-title-button {
    background-color: ${theme.primary};
    border: #9ac355 solid;
    border-radius: 8px;
  }
  .community-title-button:hover {
    background-color: #a3cb5d;
    border: #a3cb5d solid;
    border-radius: 8px;
  }
`;
const SecondRow = styled(Row)`
  width: 100%;
`;

const CommunityInput = styled(Input)`
  width: 100%;
`;
const FirstRow = styled(Row)`
  margin-top: 2%;
  display: flex;
  justify-content: space-between;
`;
const AlignBtn = styled.div`
  text-align: end;
`;
const CommunityDatePicker = styled(DatePicker)`
  width: 100%;
`;

const CenterRow = styled(Row)`
  margin-bottom: 5%;
`;

export {
  CenterRow,
  FirstRow,
  CommunityInput,
  AllContentAlign,
  SecondRow,
  AlignBtn,
  CommunityDatePicker,
  RegisterBtnStyled,
};
