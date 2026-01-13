import React from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import LinkCardUi from "./LinkCardUi";
import linksData from "../../../data/linksData";
import { isAction } from "@reduxjs/toolkit";

const MainLinks = ({ aside }) => {
  return (
    <>
      {/* Simple Navbar */}
      {aside && (
        <nav className="p-4 px-5 bg-gray-800 text-white flex gap-4">
          <div className="">
            <h1 className="font-bold text-4xl">React Practice Zones</h1>
          </div>
        </nav>
      )}
      <div>
        <div className="px-4 py-2">
          {linksData.map((item, index) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `todo-card border ${
                  isActive
                    ? "border-dark bg-yellow-200"
                    : "border-blue-200 bg-blue-200"
                }`
              }
            >
              <LinkCardUi
                number={index + 1}
                title={item.title}
                date={item.date}
                description={item.description}
                aside={aside}
              />
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainLinks;
