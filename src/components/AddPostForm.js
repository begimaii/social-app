import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../store/postSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUsers } from "../store/usersSlice";

function AddPostForm() {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setContent(e.target.value);
  };
  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded(title, content, userId)
        // postAdded({
        //   id: nanoid(),
        //   title,
        //   content,
        // })
      );
      setContent("");
      setTitle("");
      setUserId("");
    }
  };
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
  const onAuthorChange = (e) => {
    setUserId(e.target.value);
  };
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" values={userId} onChange={onAuthorChange}>
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content: </label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChange}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
