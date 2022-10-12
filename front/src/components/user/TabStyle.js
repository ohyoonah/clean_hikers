import styled from "styled-components";
import { theme } from "../common/styles/palette";
import { Tabs } from "antd";

export const TabBlock = styled(Tabs)`
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
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
