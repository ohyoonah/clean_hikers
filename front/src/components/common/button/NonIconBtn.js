import {
  NonIconBlueBtnStyled,
  NonIconGreenBtnStyled,
} from "./NonIconBtnStyled";

function NonIconBlueBtn({ text }) {
  return (
    <NonIconBlueBtnStyled type="primary" size="large">
      {text}
    </NonIconBlueBtnStyled>
  );
}

function NonIconGreenBtn({ text }) {
  return (
    <NonIconGreenBtnStyled type="primary" size="large">
      {text}
    </NonIconGreenBtnStyled>
  );
}

export { NonIconBlueBtn, NonIconGreenBtn };
