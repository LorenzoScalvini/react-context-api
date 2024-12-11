import React from "react";
import styles from "./PostCard.module.css";

const PostCard = ({ post }) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.description}>{post.content}</p>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
