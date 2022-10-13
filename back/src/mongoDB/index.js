import { connect } from "mongoose";
// import { User } from "./model/user.js";
import { Post, Comment, Person } from "../community/communtiyModel.js";

import * as dotenv from "dotenv";
dotenv.config();

const { MONGO_URI } = process.env;

connect(MONGO_URI)
    .then(() => console.log("MongoDB와 연결에 성공했습니다"))
    .catch((error) => console.error(error));

// export { User, Post, Person, Comment };
export { Post, Person, Comment };
