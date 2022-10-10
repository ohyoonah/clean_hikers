// 버튼 styled-component 적용 파일
import styled from "styled-components";
const RegisterBtnStyled = styled.div`
  .community-title-button {
    background-color: #9ac355;
    border: #9ac355 solid;
    border-radius: 8px;
  }
  .community-title-button:hover {
    background-color: #a3cb5d;
    border: #a3cb5d solid;
    border-radius: 8px;
  }
`;

const RecruitBtnStyled = styled.div`
  .communityList-title-button {
    border-radius: 8px;
  }
`;

export { RegisterBtnStyled, RecruitBtnStyled };
