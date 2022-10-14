import styled from "styled-components";
import "antd/dist/antd.css";
import { Card } from "antd";

const CommunityNavStyled = styled(Card)`
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #89a550;
    text-shadow: 0 0 0.25px currentcolor;
  }
  ant-tabs-ink-bar ant-tabs-ink-bar-animated {
    color: #89a550;
    bottom: 0;
  }
`;

export default CommunityNavStyled;
