import {
  LowLevelStyled,
  MiddleLevelStyled,
  HighLevelStyled,
  UnknownLevelStyled,
} from "./LevelStyled";

function Level({ difficulty }) {
  if (difficulty === "하") {
    return <LowLevel />;
  } else if (difficulty === "중") {
    return <MiddleLevel />;
  } else if (difficulty === "상") {
    return <HighLevel />;
  } else if (difficulty === "미분류") {
    return <UnknownLevel />;
  }

  function LowLevel() {
    return <LowLevelStyled>하</LowLevelStyled>;
  }

  function MiddleLevel() {
    return <MiddleLevelStyled>중</MiddleLevelStyled>;
  }

  function HighLevel() {
    return <HighLevelStyled>상</HighLevelStyled>;
  }

  function UnknownLevel() {
    return <UnknownLevelStyled>미</UnknownLevelStyled>;
  }
}

export { Level };
