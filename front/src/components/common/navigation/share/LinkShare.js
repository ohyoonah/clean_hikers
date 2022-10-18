import { ShareButton } from "./ShareButtonStyled";

function LinkShare() {
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("링크가 복사되었습니다.");
  }

  return (
    <ShareButton
      src="https://cdn-icons-png.flaticon.com/512/6994/6994770.png"
      onClick={copy}
    />
  );
}

export default LinkShare;
