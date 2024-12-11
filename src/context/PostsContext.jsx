import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3017/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Errore nel recupero dei post:", error);
      });
  }, []);

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};
