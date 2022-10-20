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

function NonIconGreenBtn({ text, htmlType, onClick }) {
  return (
    <NonIconGreenBtnStyled
      type="primary"
      htmlType={htmlType}
      onClick={onClick}
      size="large"
    >
      {text}
    </NonIconGreenBtnStyled>
  );
}

export { NonIconBlueBtn, NonIconGreenBtn };
