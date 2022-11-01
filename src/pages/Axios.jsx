import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Axios() {
  // state
  const [posts, setPosts] = useState([]);

  // get post data
  const getPostData = async () => {
    try {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      return result;
    } catch (error) {
      return error;
    }
  };

  // component did mount
  useEffect(() => {
    getPostData()
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>Axios</h1>
      {posts.map((e) => (
        <div key={e.id}>
          <h3> {e.title} </h3>
          <p> {e.body} </p>
        </div>
      ))}
    </div>
  );
}
