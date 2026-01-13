import React from "react";
import { Routes, Route } from "react-router-dom";
import linksData from "./data/linksData";
import MainLayout from "./layout/MainLayout";
import NoSidebarLayout from "./layout/NoSidebarLayout";

const App = () => {
  return (
    <Routes>
      {/* Layout WITH Sidebar */}
      <Route element={<MainLayout />}>
        {linksData.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Route>

      {/* Layout WITHOUT Sidebar */}
      <Route path="/" element={<NoSidebarLayout />}>
        <Route path="/login" element={<h1>Login Page (No Sidebar)</h1>} />
        <Route path="/signup" element={<h1>Signup Page (No Sidebar)</h1>} />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={<h1 className="p-4 text-2xl">404 Page Not Found</h1>}
      />
    </Routes>
  );
};

export default App;
