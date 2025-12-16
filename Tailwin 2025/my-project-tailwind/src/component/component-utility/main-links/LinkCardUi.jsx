import React from "react";

const LinkCardUi = ({ number ,title, date, description }) => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="font-bold text-2xl">
            {`${number} : ${title}`}
        </p>
        <p className="bg-white font-bold mb-0 p-1 px-5 rounded-2xl">{date}</p>
      </div>
      <p className="mt-3">{description}</p>
    </div>
  );
};

export default LinkCardUi;
