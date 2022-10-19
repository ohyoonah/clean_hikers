import styled from "styled-components";
import "antd/dist/antd.css";
import { Button } from "antd";
import { theme } from "../../common/styles/palette";

const CommunityItemStyled = styled.div`
  color: black;
  .writer-user-name {
    display: flex;
    justify-content: end;
  }
`;

// const StateButton = styled.div`
const StateButton = styled(Button)`
  border: 0.1px ${theme.primary} solid;
  background-color: ${theme.primary};
  color: white;
  font-weight: 700;
  margin-right: 5px;
  &:hover {
    background-color: ${theme.primary};
    color: white;
    font-weight: 700;
  }
`;

export { CommunityItemStyled, StateButton };
