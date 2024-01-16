import Link from "next/link";
import React from "react";
interface props {
  params: { user_id: number };
}
interface useData {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}
const OneUser = async ({ params: { user_id } }: props) => {
  const api = `https://jsonplaceholder.typicode.com/users/${user_id}`;
  const oneUserData = await fetch(api, { next: { revalidate: 20 } });
  const data: useData = await oneUserData.json();
  return (
    <div className="w-[100%]">
      <h1 className="my-2 mx-auto">Time== {new Date().toLocaleTimeString()}</h1>
      <h1 className="my-2 mx-auto">
        User {data.name} with id {user_id}
      </h1>
      <ul className="mx-auto w-[50%] p-4 my-2">
        <div key={data.id} style={{ border: "1px solid cyan" }}>
          <li className="p-2" key={data.id}>
            name {data.name} - email {data.email}
            <br />
            userName {data.username}
            <br />
            phone {data.phone}
            <br />
            site {data.website}
          </li>
          {/* <Link
            href={`/photo/${user_id}`}
            className="ml-[5%] bg-gray-300 p-3 rounded-md text-red-600"
          >
            photo
          </Link> */}
        </div>
      </ul>
    </div>
  );
};

export default OneUser;
