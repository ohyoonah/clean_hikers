import { NonIconBlueBtnStyled, NonIconGreenBtnStyled } from "./NonIconBtnStyled";

function NonIconBlueBtn({ text, htmlType, onClick }) {
  return (
    <NonIconBlueBtnStyled
      type="primary"
      htmlType={htmlType}
      onClick={onClick}
      size="large"
    >
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
