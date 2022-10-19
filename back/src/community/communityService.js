import { Post, Comment, User, Mountain } from "../mongoDB/index.js";
import { v4 } from "uuid";

class postService {
    static async addPost({
        user_id,
        nickname,
        title,
        description,
        date,
        person,
        personnel,
        station,
        comment,
        count,
        location,
    }) {
        const post_id = v4();
        const [locationDetail] = await Mountain.findData(location, null, null);

        const newPost = {
            post_id,
            user_id,
            nickname,
            title,
            description,
            date,
            person,
            personnel,
            station,
            comment,
            count,
            location: locationDetail,
        };

        const createdNewPost = await Post.create({ newPost });

        createdNewPost.errorMessage = null;

        return createdNewPost;
    }

    static async getPosts({ user_id }) {
        const posts = await Post.findByUserId({ user_id });
        return posts;
    }

    static async getAPosts({ post_id }) {
        const posts = await Post.findByPostId({ post_id });
        // console.log(post_id);
        return posts;
    }

    static async getAllPosts(send) {
        if (send.station == undefined) {
            if (send.location == undefined) {
                const posts = await Post.findAll();
                const page = Number(send.page || 1);
                const perPage = Number(send.perPage || 5);

                const total = posts.length;
                // console.log(send);
                const postsList = posts.sort((a, b) => {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                });
                const totalPage = Math.ceil(total / perPage);
                const allPostsList = postsList.slice(
                    perPage * (page - 1),
                    perPage * page
                );

                return allPostsList;
            } else {
                const location = send.location;

                const [locationDetail] = await Mountain.findData(
                    location,
                    null,
                    null
                );

                const posts = await Post.findByLocation({ locationDetail });
                const page = Number(send.page || 1);
                const perPage = Number(send.perPage || 5);

                const total = posts.length;

                const postsList = posts.sort((a, b) => {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                });
                const totalPage = Math.ceil(total / perPage);
                const allPostsList = postsList.slice(
                    perPage * (page - 1),
                    perPage * page
                );

                return allPostsList;
            }
        } else {
            if (send.location == undefined) {
                const station = send.station;
                const posts = await Post.findByStation({ station });
                // const posts = await Post.findAll();
                const page = Number(send.page || 1);
                const perPage = Number(send.perPage || 5);

                const total = posts.length;
                // console.log(send);
                const postsList = posts.sort((a, b) => {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                });
                const totalPage = Math.ceil(total / perPage);
                const allPostsList = postsList.slice(
                    perPage * (page - 1),
                    perPage * page
                );

                return allPostsList;
            } else {
                const location = send.location;

                const [locationDetail] = await Mountain.findData(
                    location,
                    null,
                    null
                );

                const station = send.station;

                const posts = await Post.findByLocation({ locationDetail });
                const stationPosts = posts.filter(
                    (posts) => posts.station == station
                );
                const page = Number(send.page || 1);
                const perPage = Number(send.perPage || 5);

                const total = stationPosts.length;

                const postsList = stationPosts.sort((a, b) => {
                    if (a.createdAt > b.createdAt) {
                        return -1;
                    }
                });
                const totalPage = Math.ceil(total / perPage);
                const allPostsList = postsList.slice(
                    perPage * (page - 1),
                    perPage * page
                );

                return allPostsList;
            }
        }
    }

    static async setPost({ post_id, toUpdate }) {
        let post = await Post.findByPostId({ post_id });

        if (!post) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        if (toUpdate.title) {
            const fieldToUpdate = "title";
            const newValue = toUpdate.title;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.description) {
            const fieldToUpdate = "description";
            const newValue = toUpdate.description;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.nickname) {
            const fieldToUpdate = "nickname";
            const newValue = toUpdate.nickname;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.date) {
            const fieldToUpdate = "date";
            const newValue = toUpdate.date;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.person) {
            const fieldToUpdate = "person";
            const newValue = toUpdate.person;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.personnel) {
            const fieldToUpdate = "personnel";
            const newValue = toUpdate.personnel;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.station) {
            const fieldToUpdate = "station";
            const newValue = toUpdate.station;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.comment) {
            const fieldToUpdate = "comment";
            const newValue = toUpdate.comment;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.count) {
            const fieldToUpdate = "count";
            const newValue = toUpdate.count;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        if (toUpdate.location) {
            const fieldToUpdate = "location";
            const newValue = toUpdate.location;
            post = await Post.update({ post_id, fieldToUpdate, newValue });
        }

        return post;
    }

    static async changeNicknamePost({ posts, toUpdate }) {
        const newPosts = posts;
        const newToUpdate = toUpdate;
        // function update(item) {
        //     const post_id = item.post_id;
        //     const updatedPost = postService.setPost({ post_id, toUpdate });
        //     // console.log("updatedPost", updatedPost);
        // }
        // newPosts.forEach(update);
        newPosts.forEach((item) => {
            const post_id = item.post_id;
            const updatedPost = postService.setPost({ post_id, toUpdate });
        });
        return newPosts;
    }

    static async deletePost({ post_id }) {
        let posts = await Post.findByPostId({ post_id });

        if (!posts) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        posts = await Post.deleteByPostId({ post_id });

        return posts;
    }
}

class commentService {
    static async addComment({
        post_id,
        user_id,
        nickname,
        title,
        description,
    }) {
        const comment_id = v4();

        const newComment = {
            comment_id,
            post_id,
            user_id,
            nickname,
            title,
            description,
        };

        const createdNewComment = await Comment.create({ newComment });

        const [toUpdate] = await postService.getAPosts({ post_id });
        toUpdate.comment.push(newComment);

        const createPostComment = await postService.setPost({
            post_id,
            toUpdate,
        });

        createdNewComment.errorMessage = null;

        return createdNewComment;
    }

    static async getComments({ post_id }) {
        const comments = await Comment.findByPostId({ post_id });
        return comments;
    }

    static async pushComments({ toUpdate, newComment }) {
        toUpdate.comment.push(newComment);
        console.log(toUpdate.comment);
        return toUpdate;
    }

    static async setComment({ comment_id, toUpdate }) {
        let comment = await Comment.findByCommentId({ comment_id });

        if (!comment) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        if (toUpdate.nickname) {
            const fieldToUpdate = "nickname";
            const newValue = toUpdate.nickname;
            comment = await Comment.update({
                comment_id,
                fieldToUpdate,
                newValue,
            });
        }

        if (toUpdate.title) {
            const fieldToUpdate = "title";
            const newValue = toUpdate.title;
            comment = await Comment.update({
                comment_id,
                fieldToUpdate,
                newValue,
            });
        }

        if (toUpdate.description) {
            const fieldToUpdate = "description";
            const newValue = toUpdate.description;
            comment = await Comment.update({
                comment_id,
                fieldToUpdate,
                newValue,
            });
        }

        const post_id = comment.post_id;

        const [twoUpdate] = await postService.getAPosts({ post_id });

        const newComment = twoUpdate.comment;

        let beingcomment = newComment.find((item) => {
            return item.comment_id == comment_id;
        });

        const idx = newComment.indexOf(beingcomment);

        newComment.splice(idx, 1, comment);

        twoUpdate.comment = newComment;

        const createPostComment = await postService.setPost({
            post_id,
            toUpdate: twoUpdate,
        });

        console.log(createPostComment);

        return newComment;
    }

    static async deleteComment({ comment_id }) {
        let comments = await Comment.findByCommentId({ comment_id });
        console.log("삭제할 댓글", comments);
        const post_id = comments.post_id;

        if (!comments) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }
        comments = await Comment.deleteByCommentId({ comment_id });
        // console.log("삭제된 댓글", comment_id);
        const newComments = await Comment.findByPostId({ post_id });
        // console.log("댓글 리스트", newComments);
        const twoUpdate = await postService.getAPosts({ post_id });

        twoUpdate.comment = newComments;
        // console.log("새로 출력되야 할", twoUpdate);
        const createPostComment = await postService.setPost({
            post_id,
            toUpdate: twoUpdate,
        });
        // console.log("출력된", createPostComment);
        return newComments;
    }
}

class personService {
    static async addPerson({ post_id, email }) {
        const post = await postService.getAPosts({ post_id });
        const [toUpdate] = post;

        const people = toUpdate.person;

        let beingPerson = people.find((item) => {
            return item.email == email;
        });

        if (beingPerson !== undefined) {
            const idx = people.indexOf(beingPerson);

            people.splice(idx, 1);

            toUpdate.person = people;

            toUpdate.count = people.length;

            if (toUpdate.station == "모집완료") {
                toUpdate.station = "모집중";
            }

            const deletedBeingPerson = await postService.setPost({
                post_id,
                toUpdate,
            });

            return deletedBeingPerson;
        } else {
            const newPerson = await User.findByEmail({ email });

            const [toUpdate] = await postService.getAPosts({ post_id });

            if (parseInt(toUpdate.count) === toUpdate.personnel) {
                const errorMessage = "모집 인원이 마감되었습니다.";
                return { errorMessage };
            } else {
                console.log("toUpdate.person = ", toUpdate);
                console.log("newPerson = ", newPerson);
                console.log(typeof toUpdate.person);

                toUpdate.person.push(newPerson);

                toUpdate.count = toUpdate.person.length;

                const createPostPerson = await postService.setPost({
                    post_id,
                    toUpdate,
                });

                if (parseInt(toUpdate.count) == toUpdate.personnel) {
                    console.log("모집 인원이 마감되었습니다.");

                    toUpdate.station = "모집완료";

                    const createPostPerson = await postService.setPost({
                        post_id,
                        toUpdate,
                    });

                    createPostPerson.errorMessage = null;

                    return createPostPerson;
                } else {
                    createPostPerson.errorMessage = null;

                    return createPostPerson;
                }
            }
        }
    }

    static async getPersons({ post_id }) {
        const post = await postService.getAPosts({ post_id });

        // console.log(post);

        const people = post.person;

        return people;
    }
}

class locationService {
    // static async addLocation({ query }) {
    //     const mountainName = query.mountain || null;
    //     const mountainLocation = query.location || null;
    //     const mountainDifficulty = query.level || null;
    //     console.log(mountainName, mountainLocation, mountainDifficulty);
    //     const Location = await Mountain.findData(
    //         mountainName,
    //         mountainLocation,
    //         mountainDifficulty
    //     );

    //     const toUpdate = await postService.getAPosts({ post_id });

    //     toUpdate.comment.push(newComment);

    //     const createPostComment = await postService.setPost({
    //         post_id,
    //         toUpdate,
    //     });

    //     createdNewComment.errorMessage = null;

    //     return createdNewComment;
    // }

    static async getData() {
        const data = await Mountain.findData();
        // console.log("data", data);
        return data;
    }

    static async detailLocation() {
        const data = await Mountain.findData();
    }
}

export { postService, commentService, personService, locationService };
