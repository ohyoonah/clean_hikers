import { connect } from "mongoose";
import { User } from "../user/userModel.js";
import { Post, Comment } from "../community/communtiyModel.js";
import { Mountain } from "../mountain/mountainModel.js";

// import { Mountain } from "../mountain/mountainModel.js";
//ejs 모듈에서도 _dirname 사용하기 위한 코드
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.join(__dirname, "../../../.env") });

console.log(__dirname);
const { MONGO_URI } = process.env;
console.log(MONGO_URI);

connect(MONGO_URI)
    .then(() => console.log("MongoDB와 연결에 성공했습니다"))
    .catch((error) => console.error(error));

export { User, Post, Comment, Mountain };
