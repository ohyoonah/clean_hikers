import { NonIconBlueBtnStyled, NonIconGreenBtnStyled } from "./NonIconBtnStyled";

function NonIconBlueBtn({ text, htmlType, onClick, disabled }) {
  return (
    <NonIconBlueBtnStyled
      type="primary"
      htmlType={htmlType}
      onClick={onClick}
      size="large"
      disabled={disabled}
    >
      {text}
    </NonIconBlueBtnStyled>
  );
}

function NonIconGreenBtn({ text, htmlType, onClick, disabled }) {
  return (
    <NonIconGreenBtnStyled
      type="primary"
      htmlType={htmlType}
      onClick={onClick}
      size="large"
      disabled={disabled}
    >
      {text}
    </NonIconGreenBtnStyled>
  );
}

export { NonIconBlueBtn, NonIconGreenBtn };
