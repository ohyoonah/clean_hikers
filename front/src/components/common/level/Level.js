import { LowLevelStyled, MiddelLevelStyled, HighLevelStyled } from "./LevelStyled";

function LowLevel() {
  return <LowLevelStyled>하</LowLevelStyled>;
}

function MiddelLevel() {
  return <MiddelLevelStyled>중</MiddelLevelStyled>;
}

function HighLevel() {
  return <HighLevelStyled>상</HighLevelStyled>;
}

export { LowLevel, MiddelLevel, HighLevel };
