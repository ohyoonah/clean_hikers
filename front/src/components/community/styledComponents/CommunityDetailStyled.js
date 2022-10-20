import styled from "styled-components";
import "antd/dist/antd.css";
import { Card, Col, Comment, Layout, Row } from "antd";
import CommentList from "../component/CommentList";

const CommunityDetailAlign = styled.div`
  width: 1130px;
  max-width: 80%;
  .community-detail-main h1,
  b,
  p {
    margin: 5px 2px;
  }
  .community-detail-discription {
    margin: 2rem 0;
  }
`;
const CommunityCommentList = styled(Comment)`
  width: 100%;
`;
const DetailCol = styled(Col)`
  padding: 5rem 8% 5% 8%;
  width: 80%;
  max-width: 1130px;
`;
const CreateRow = styled(Row)``;
const ButtonRow = styled(Row)`
  padding: 10px;
`;
export {
  CommunityDetailAlign,
  CommunityCommentList,
  DetailCol,
  ButtonRow,
  CreateRow,
};
