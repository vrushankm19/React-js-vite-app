import React from "react";
import { Outlet } from "react-router-dom";
import MainLinks from "../component/component-utility/main-links/MainLinks";

const NoSidebarLayout = () => {
  return (
    <div className="p-4">
      <MainLinks aside={true} />
    </div>
  );
};

export default NoSidebarLayout;
