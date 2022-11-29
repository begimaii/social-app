import React from "react";
import { useSelector } from "react-redux";
import { selectAllPost } from "../store/postSlice";
import PostAuthor from "./PostAuthor";

const PostList = () => {
  const posts = useSelector(selectAllPost);

  // const somePosts = [
  //   { id: 0, title: "text1", content: "Sime text content" },
  //   { id: 0, title: "text1", content: "Sime text content" },
  //   { id: 0, title: "text1", content: "Sime text content" },
  // ];

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  ));
  return (
    <section>
      <h1>Posts</h1>
      {renderedPosts}
    </section>
  );
};
export default PostList;
