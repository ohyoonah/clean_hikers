import styled from "styled-components";
import "antd/dist/antd.css";

const RecruitBlueBtnAlign = styled.div`
  padding: 20px;
  display: flex;
  justify-content: end;
`;

const CommunityPagenationStyled = styled.div`
  padding: 50px 20px;

  .ant-pagination-item-active a {
    color: #89a550;
    border: none;
  }
  .ant-pagination-item-active {
    border: none;
    text-decoration: underline 2px;
  }
`;

const CommunityListAlign = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const CommunityItemStyled = styled.div`
  color: black;
  .writer-user-name {
    display: flex;
    justify-content: end;
  }
`;

export {
  RecruitBlueBtnAlign,
  CommunityPagenationStyled,
  CommunityListAlign,
  CommunityItemStyled,
};
