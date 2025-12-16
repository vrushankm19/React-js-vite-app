import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LinkCardUi from "./LinkCardUi";
import linksData from "../../../data/linksData";

const MainLinks = () => {
  return (
    <>
      {/* Simple Navbar */}
      <nav className="p-4 px-5 bg-gray-800 text-white flex gap-4">
        <div className="">
          <h1 className="font-bold text-4xl">React Practice Zones</h1>
        </div>
      </nav>
      <div>
        <div className="px-4 py-2">
          {linksData.map((item, index) => (
            <Link key={item.id} to={item.path} className="todo-card">
              <LinkCardUi
                number={index + 1}
                title={item.title}
                date={item.date}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainLinks;
