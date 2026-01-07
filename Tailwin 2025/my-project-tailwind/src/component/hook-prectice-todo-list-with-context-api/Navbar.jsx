import React, { memo } from "react";

const Navbar = ({ adjective, getAdjective }) => {
  console.log("Navbar is rendered");

  return (
    <div>
      <p>I am a {adjective} Navbar</p>

      <button className="bg-green-400" onClick={getAdjective}>Change Adjective</button>
    </div>
  );
};

export default memo(Navbar);
