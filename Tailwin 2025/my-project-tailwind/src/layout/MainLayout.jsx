import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import MainLinks from "../component/component-utility/main-links/MainLinks";

const MainLayout = () => {
  const [open, setOpen] = useState(false); // default closed

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-gray-200 transition-all duration-300 ${
          open ? "w-1/6" : "w-7"
        }`}
      >
        {/* Arrow Button */}
        <button onClick={() => setOpen(!open)} className="text-xl font-bold">
          {open ? "⬅" : "➡"}
        </button>

        {/* Content only when open */}
        {open && (
          <>
            <Link to="/" className="block p-2 text-dark px-3">
              👈 Back To Home
            </Link>
            <MainLinks aside={false} />
          </>
        )}
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
