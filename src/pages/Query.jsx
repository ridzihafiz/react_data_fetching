import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function Query() {
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

  // react query
  const { data, isLoading, isError, refetch } = useQuery(
    ["users_data"],
    getUserData,
    { staleTime: 60000 }
  );

  // jika fetch melakukan proses loading
  if (isLoading) {
    return <div className="App">Loading Please Wait...</div>;
  }

  // jika fetch mengalami kendala
  if (isError) {
    return <div className="App">Terjadi Kendala saat mengambil data</div>;
  }

  return (
    <div className="App">
      <h1>React Query</h1>
      {data.map((e) => (
        <div key={e.id}>
          <h3> {e.username} </h3>
          <p> {e.email} </p>
        </div>
      ))}
    </div>
  );
}
