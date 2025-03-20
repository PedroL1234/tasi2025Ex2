import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">
      <h1>Blog</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
