import styled from "styled-components";
import "antd/dist/antd.css";
import { theme, Pagination } from "antd";

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

export { RecruitBlueBtnAlign, CommunityPagenationStyled, CommunityListAlign };
