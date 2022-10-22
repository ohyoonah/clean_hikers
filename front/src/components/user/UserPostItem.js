import React from "react";
import { Link } from "react-router-dom";

import { StateButton } from "../community/styledComponents/CommunityItemstyled";
import { UserPostBlock } from "./UserPostStyle";

import { Card } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";

import moment from "moment";

function UserPostItem({ post }) {
  const postTime = moment(post.createdAt).fromNow();

  return (
    <UserPostBlock>
      <Link to={`/community/communityDetail/${post.post_id}`}>
        <Card className="card">
          <section>
            <div className="title">
              <StateButton className="tag" station={post.station}>
                {post.station}
              </StateButton>
              <h3>{post.title}</h3>
            </div>
            <p className="location">
              지역 : {<EnvironmentOutlined />}
              {post.location.name} | {post.location.address}
            </p>
            <p className="description">{post.description}</p>
          </section>
          <section className="nameAndTime">
            <p>{post.nickname},</p>
            <p className="time">{postTime}</p>
          </section>
        </Card>
      </Link>
    </UserPostBlock>
  );
}

export default UserPostItem;
