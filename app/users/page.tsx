import React from "react";
import { users } from "./userInterface";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 20 },
  });
  const userData: users[] = await res.json();

  return (
    <div className="w-[100%]">
      <h1 className="my-2 mx-auto">Time== {new Date().toLocaleTimeString()}</h1>
      <h1 className="my-2 mx-auto">Users</h1>
      <ul className="mx-auto w-[50%] p-4 my-2">
        {userData.map((user) => (
          <div key={user.id} style={{ border: "1px solid cyan" }}>
            <li key={user.id} className="">
              {user.name} - {user.email}
              <br />
              {user.username}
              {user.address.street}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
