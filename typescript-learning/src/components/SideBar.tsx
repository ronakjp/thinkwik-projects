import React from "react";

type SideBarProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SideBar: React.FC<SideBarProps> = ({ onChange }) => {
  return (
    <div className="">
      <div className="flex justify-between relative p-7">
        <input
          className="rounded-md p-2 "
          placeholder="Search Here..."
          type="text"
          name="searchbar"
          onChange={onChange}
        />
        <button className="border border-blue-400 p-2 rounded-md absolute right-3">
          Search
        </button>
      </div>
    </div>
  );
};

export default SideBar;
