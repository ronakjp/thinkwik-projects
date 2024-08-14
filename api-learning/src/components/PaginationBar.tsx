import React from "react";

type PaginationBarProps = {
  totalPages: number;
  onClick: (num: number) => void;
};

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalPages,
  onClick,
}) => {
  return (
    <div>
      {Array.from({ length: totalPages }, (_, index) => (
        <span>
          <button
            onClick={() => onClick(index + 1)}
            className=" h-5 w-5 font-bold underline"
          >
            {index + 1}
          </button>
          {"  "}
        </span>
      ))}
    </div>
  );
};

export default PaginationBar;
