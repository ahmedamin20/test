import React from "react";
import { users } from "./userInterface";
import Link from "next/link";

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 20 },
  });
  const userData: users[] = await res.json();

  return (
    <div className="w-[100%]">
      <h1 className="my-2 mx-auto">Time== {new Date().toLocaleTimeString()}</h1>
      <h1 className="my-2 mx-auto">Users</h1>
      <ul className="flex justify-center align-middle flex-col  mx-auto w-[50%] p-4 my-2">
        {userData.map((user) => (
          <div
            key={user.id}
            style={{ border: "1px solid cyan" }}
            className="flex justify-between w-[100%] "
          >
            <li className="p-2" key={user.id}>
              {user.name} - {user.email}
              <br />
              {user.username}
              {user.address.street}
            </li>
            <Link
              href={`users/${user.id}`}
              className="ml-[5%] bg-gray-300 p-3 rounded-md text-red-600"
            >
              Go
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
