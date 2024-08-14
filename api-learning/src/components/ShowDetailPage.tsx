import React from "react";
import ShowDetailCard from "./ShowDetailCard";

export type UserData = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

type ShowDetailProps = {
  usersList: UserData[];
};

const ShowDetailPage: React.FC<ShowDetailProps> = ({ usersList }) => {
  return (
    <div className="grid  md:grid-cols-3 sm:grid-cols-2 gap-2 ">
      {usersList.map(({ email, first_name, id, last_name, avatar }) => (
        <div key={id} className="">
          <ShowDetailCard
            email={email}
            name={first_name + " " + last_name}
            className="p-3"
            imgURL={avatar}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowDetailPage;
