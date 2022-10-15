import { Post, Comment, User } from "../mongoDB/index.js";
import { v4 } from "uuid";
// import { ObjectID } from "bson";

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
            location,
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
        const posts = await Post.findOne({ post_id });

        return posts;
    }

    static async getAllPosts() {
        const posts = await Post.findAll();
        return posts;
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

        const twoUpdate = await postService.getAPosts({ post_id });

        const newComment = twoUpdate.comment;

        let beingcomment = newComment.find((item) => {
            return item.comment_id == comment_id;
        });

        const idx = newComment.indexOf(beingcomment);

        newComment.splice(idx, 1, comment);

        twoUpdate.comment = newComment;
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
        const toUpdate = post;

        const people = toUpdate.person;

        let beingPerson = people.find((item) => {
            return item.email == email;
        });

        if (beingPerson !== undefined) {
            const idx = people.indexOf(beingPerson);

            people.splice(idx, 1);

            toUpdate.person = people;

            toUpdate.count = people.length;

            // console.log("뺐어", toUpdate.count);

            const deletedBeingPerson = await postService.setPost({
                post_id,
                toUpdate,
            });

            return deletedBeingPerson;
        } else {
            const newPerson = await User.findByEmail({ email });

            const toUpdate = await postService.getAPosts({ post_id });

            if (toUpdate.count == toUpdate.personnel) {
                const errorMessage = "모집 인원이 마감되었습니다.";
                return { errorMessage };
            } else {
                toUpdate.person.push(newPerson);
                toUpdate.count = toUpdate.person.length;
                // console.log("더했어", toUpdate.count);
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

        console.log(post);

        const people = post.person;

        return people;
    }

    // static async deletePerson({ email, post_id }) {
    //     let person = await User.findByEmail({ email });

    //     if (!person) {
    //         const errorMessage =
    //             "참가 이력이 없습니다. 다시 한 번 확인해 주세요.";
    //         return { errorMessage };
    //     }

    //     const post = await postService.getAPosts({ post_id });

    //     const newPostPeople = post.person;

    //     // console.log(newPostPeople);
    //     console.log(email);
    //     let toDeletePerson = newPostPeople.find((item) => {
    //         return item == person;
    //     });
    //     // console.log(newPostPeople);

    //     const idx = newPostPeople.indexOf(toDeletePerson);

    //     console.log(idx);

    //     newPostPeople.splice(idx, 1);

    //     if (person !== null) {
    //         post.person.push(newPostPeople);

    //         const deletedPostPerson = await postService.setPost({
    //             post_id,
    //             toUpdate: post,
    //         });
    //     }

    //     person.errorMessage = null;

    //     return person;
    // }
}

export { postService, commentService, personService };
