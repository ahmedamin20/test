import React from "react";
interface props {
  params: { user_id: number; photo_id: number };
}
const UserPhoto = ({ params: { user_id, photo_id } }: props) => {
  return (
    <div>
      user Photo id {user_id} {photo_id}
    </div>
  );
};

export default UserPhoto;
