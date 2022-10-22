import { ShareButton } from "./ShareButtonStyled";

function FacebookShare() {
  function handleClick() {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
    );
  }

  return (
    <ShareButton
      src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png"
      onClick={handleClick}
      alert="facebook share"
    />
  );
}

export default FacebookShare;
