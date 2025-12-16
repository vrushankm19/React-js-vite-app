import React from "react";
import { Routes, Route } from "react-router-dom";
import linksData from "./data/linksData";
import MainLinks from "./component/component-utility/main-links/MainLinks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLinks />} />

      {linksData.map((item) => (
        <Route key={item.id} path={item.path} element={<item.component />} />
      ))}

      <Route
        path="*"
        element={<h1 className="p-4 text-2xl">404 Page Not Found</h1>}
      />
    </Routes>
  );
};

export default App;
