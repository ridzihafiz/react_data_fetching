import React, { useState, useEffect } from "react";

export default function FetchApi() {
  // state
  const [users, setUsers] = useState();

  // function fetch
  const getUserData = async () => {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      return data;
    } catch (error) {
      return error;
    }
  };

  // component did mount
  useEffect(() => {
    getUserData()
      .then((res) => {
        // console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  // jika useState menggunakan data object {}
  if (!users) {
    return <div>Loading Please Wait...</div>;
  }

  return (
    <div className="App">
      <h1>Fetch API</h1>

      {users.map((e) => (
        <div key={e.id}>
          <h3> {e.username} </h3>
          <p> {e.email} </p>
        </div>
      ))}
    </div>
  );
}
