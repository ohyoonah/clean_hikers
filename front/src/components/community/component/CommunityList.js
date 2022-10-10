import React from "react";
import { Link } from "react-router-dom";
import { RecruitBlueBtn } from "../../common/button/IconBtn";

function CommunityList() {
  return (
    <div>
      <Link to="communityCreate">
        <RecruitBlueBtn />
      </Link>
    </div>
  );
}

export default CommunityList;
