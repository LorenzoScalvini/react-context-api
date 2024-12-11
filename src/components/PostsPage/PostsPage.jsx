import React from "react";
import PostsList from "../PostsList/PostsList";
import styles from "./PostsPage.module.css";

const PostsPage = () => {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Lista dei Post</h1>
      <PostsList />
    </div>
  );
};

export default PostsPage;
