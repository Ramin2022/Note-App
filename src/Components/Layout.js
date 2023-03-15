import React from "react";
import { Link, Outlet } from "react-router-dom";

// The layout component
const Layout = () => {
  return (
    <>
    {/* This is the navigation part using (LINK) components of react-router */}
      <nav className="bg-gray-900 w-full flex items-center justify-end  fixed  top-0 left-0 h-16 px-5">
        <Link
          className="mr-5 text-sm align-middle text-center font-thin tracking-wider border rounded-xl hover:bg-yellow-50 hover:text-black ease-in duration-100 py-2 px-3"
          to="/"
        >
          Create Note
        </Link>
        <Link
          className="mr-5 text-sm align-middle text-center font-thin tracking-wider border rounded-xl hover:bg-yellow-50 hover:text-black ease-in duration-100 py-2 px-3"
          to="/readnote"
        >
          Read Note
        </Link>

        <Link
          className="mr-5 text-sm align-middle text-center font-thin tracking-wider border rounded-xl hover:bg-yellow-50 hover:text-black ease-in duration-100 py-2 px-3"
          to="/about"
        >
          About
        </Link>
      </nav>

      {/* This is for shared layout using react-router v6 */}
      <Outlet />
    </>
  );
};

export default Layout;
