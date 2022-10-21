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

    static async getUserPosts({ user_id, pagination }) {
        const posts = await Post.findByUserId({ user_id });
        const page = Number(pagination.page || 1);
        const perPage = Number(pagination.perPage || 5);

        const total = posts.length;

        const postsList = posts.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1;
            }
        });
        // console.log(postsList);
        const totalPage = Math.ceil(total / perPage);
        const allPostsList = postsList.slice(
            perPage * (page - 1),
            perPage * page
        );

        return { allPostsList, totalPage };
    }

    static async getAPosts({ post_id }) {
        const posts = await Post.findByPostId({ post_id });

        return posts;
    }

    static async getAllPosts(send) {
        if (send.station == undefined) {
            if (send.location == undefined) {
                const posts = await Post.findAll();
                const page = Number(send.page || 1);
                const perPage = Number(send.perPage || 5);

                const total = posts.length;
                // console.log("posts ===", posts);
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

                return { allPostsList, totalPage };
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

                return { allPostsList, totalPage };
            }
        } else {
            if (send.location == undefined) {
                const station = send.station;
                const posts = await Post.findByStation({ station });

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

                return { allPostsList, totalPage };
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

                return { allPostsList, totalPage };
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
            post = await Post.update({
                post_id,
                fieldToUpdate: "title",
                newValue: toUpdate.title,
            });
        }

        if (toUpdate.description) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "description",
                newValue: toUpdate.description,
            });
        }

        if (toUpdate.nickname) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "nickname",
                newValue: toUpdate.nickname,
            });
        }

        if (toUpdate.date) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "date",
                newValue: toUpdate.date,
            });
        }

        if (toUpdate.person) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "person",
                newValue: toUpdate.person,
            });
        }

        if (toUpdate.personnel) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "personnel",
                newValue: toUpdate.personnel,
            });
        }

        if (toUpdate.station) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "station",
                newValue: toUpdate.station,
            });
        }

        if (toUpdate.comment) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "comment",
                newValue: toUpdate.comment,
            });
        }

        if (toUpdate.count) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "count",
                newValue: toUpdate.count,
            });
        }

        if (toUpdate.count == 0) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "count",
                newValue: toUpdate.count,
            });
        }

        if (toUpdate.location) {
            post = await Post.update({
                post_id,
                fieldToUpdate: "location",
                newValue: toUpdate.location,
            });
        }

        return post;
    }

    static async changeNicknamePost({ posts, toUpdate }) {
        const newPosts = posts;
        const newToUpdate = toUpdate;

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

        const toUpdate = await postService.getAPosts({ post_id });
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

        return toUpdate;
    }

    static async setComment({ comment_id, toUpdate }) {
        let comment = await Comment.findByCommentId({ comment_id });

        if (!comment) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        if (toUpdate.nickname) {
            comment = await Comment.update({
                comment_id,
                fieldToUpdate: "nickname",
                newValue: toUpdate.nickname,
            });
        }

        if (toUpdate.title) {
            comment = await Comment.update({
                comment_id,
                fieldToUpdate: "title",
                newValue: toUpdate.title,
            });
        }

        if (toUpdate.description) {
            comment = await Comment.update({
                comment_id,
                fieldToUpdate: "description",
                newValue: toUpdate.description,
            });
        }

        const post_id = comment.post_id;

        const twoUpdate = await postService.getAPosts({ post_id });

        const newComment = twoUpdate.comment;

        let beingcomment = newComment.find(
            (item) => item.comment_id == comment_id
        );

        const idx = newComment.indexOf(beingcomment);

        newComment.splice(idx, 1, comment);

        twoUpdate.comment = newComment;

        const createPostComment = await postService.setPost({
            post_id,
            toUpdate: twoUpdate,
        });

        return newComment;
    }

    static async deleteComment({ comment_id }) {
        let comments = await Comment.findByCommentId({ comment_id });

        if (!comments) {
            const errorMessage = "내역이 없습니다. 다시 한 번 확인해 주세요.";
            return { errorMessage };
        }

        const post_id = comments.post_id;

        comments = await Comment.deleteByCommentId({ comment_id });

        const newComments = await Comment.findByPostId({ post_id });

        const twoUpdate = await postService.getAPosts({ post_id });

        twoUpdate.comment = newComments;

        const createPostComment = await postService.setPost({
            post_id,
            toUpdate: twoUpdate,
        });

        return newComments;
    }
}

class personService {
    static async addPerson({ post_id, email }) {
        const posts = await postService.getAPosts({ post_id });

        const toUpdate = posts;

        const people = toUpdate.person;

        let beingPerson = people.find((item) => item.email == email);

        if (beingPerson !== undefined) {
            const idx = people.indexOf(beingPerson);
            people.splice(idx, 1);

            toUpdate.person = people;

            toUpdate.count = people.length;

            if (toUpdate.station == "모집완료") {
                toUpdate.station = "모집중";
                const deletedBeingPerson = await postService.setPost({
                    post_id,
                    toUpdate,
                });

                return deletedBeingPerson;
            } else {
                const deletedBeingPerson = await postService.setPost({
                    post_id,
                    toUpdate,
                });

                return deletedBeingPerson;
            }
        } else {
            const newPerson = await User.findByEmail({ email });

            const toUpdate = await postService.getAPosts({ post_id });

            if (parseInt(toUpdate.count) === toUpdate.personnel) {
                const errorMessage = "모집 인원이 마감되었습니다.";
                return { errorMessage };
            } else {
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
        const people = post.person;
        return people;
    }

    static async beingPerson({ post_id, email }) {
        const post = await postService.getAPosts({ post_id });

        const person = post.person;
        const being = person.map((item) => (item.email = email));
        if (being.length) {
            return "1";
        } else {
            return "0";
        }
    }

    // static async beingPerson({ post_id, email, user_id }) {
    //     const post = await postService.getAPosts({ post_id });

    //     if (post.user_id == user_id) {
    //         const errorMessage = "참여하실 수 없습니다.";
    //         return { errorMessage };
    //     } else {
    //         const person = post.person;
    //         const being = person.map((item) => (item.email = email));
    //         if (being.length) {
    //             return "1";
    //         } else {
    //             return "0";
    //         }
    //     }
    // }
}

class locationService {
    static async getData() {
        return await Mountain.findData();
    }

    static async detailLocation() {
        const data = await Mountain.findData();
    }
}

export { postService, commentService, personService, locationService };
