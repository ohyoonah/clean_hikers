import { Button } from "antd";
import styled from "styled-components";

const AllContentAlign = styled.div`
  width: 100%;
  width: 1130px;
  max-width: 80%;
`;
const CommunityCreateBtn = styled(Button)`
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
const AlignBtn = styled.div`
  text-align: end;
`;
const CommunityFormSecond = styled.div``;
export { AllContentAlign, CommunityCreateBtn, AlignBtn, CommunityFormSecond };
