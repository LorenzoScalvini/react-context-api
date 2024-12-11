import React, { useContext } from "react";
import { PostsContext } from "../../context/PostsContext";
import PostCard from "../../components/Postcard/PostCard";
import styles from "./PostsList.module.css";

const PostsList = () => {
  const posts = useContext(PostsContext);

  return (
    <div className={styles.list}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
