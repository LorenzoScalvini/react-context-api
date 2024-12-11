import React from "react";
import { PostsProvider } from "./context/PostsContext";
import PostsPage from "./components/PostsPage/PostsPage";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <PostsProvider>
        <PostsPage />
      </PostsProvider>
    </div>
  );
}

export default App;
