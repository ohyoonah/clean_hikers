import React, { useEffect } from "react";
import { ShareButton } from "./ShareButtonStyled";

function KakaoShare() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.integrity =
      "sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function createKakaoButton() {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Share.sendCustom({
        templateId: 84274,
      });
    }
  }

  return (
    <ShareButton
      src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
      onClick={createKakaoButton}
    />
  );
}

export default KakaoShare;
