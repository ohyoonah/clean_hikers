import { connect } from "mongoose";
import { User } from "../user/userModel.js";
import { Post, Comment } from "../community/communtiyModel.js";
import { Main } from "../main/mainModel.js";
import { Mountain } from "../mountain/mountainModel.js";
import * as url from "url";
import path from "path";

// import * as dotenv from "dotenv";
import dotenv from "dotenv";
// dotenv.config();
const { MONGO_URI } = process.env;

//ejs 모듈에서도 _dirname 사용하기 위한 코드

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

dotenv.config({ path: path.join(__dirname, "../../../.env") });

// console.log(__dirname);

// console.log(MONGO_URI);

connect(MONGO_URI)
    .then(() => console.log("MongoDB와 연결에 성공했습니다"))
    .catch((error) => console.error(error));

export { User, Post, Comment, Main, Mountain };
