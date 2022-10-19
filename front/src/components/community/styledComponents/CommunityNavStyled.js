import styled from "styled-components";
import "antd/dist/antd.css";
import { theme } from "../../common/styles/palette";
import { Card, Col } from "antd";

const CommunityNavStyled = styled(Card)`
  justify-content: space-between;
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #89a550;
    text-shadow: 0 0 0.25px currentcolor;
  }
  .ant-tabs-ink-bar .ant-tabs-ink-bar-animated {
    color: #89a550;
    bottom: 0;
  }
  .ant-tabs-tab {
    color: gray;
  }
  .ant-tabs-tab-btn {
    font-size: 1rem;
    font-weight: 600;
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${theme.black};
  }
  .ant-tabs-tab:hover,
  .ant-tabs-tab-btn:hover {
    color: ${theme.primary};
  }
  .ant-tabs-ink-bar {
    background: ${theme.primary};
  }
`;

const CommunityNavCol = styled(Col)`
  width: 1130px;
  max-width: 80%;
`;

export { CommunityNavCol, CommunityNavStyled };
