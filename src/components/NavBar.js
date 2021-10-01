import React from "react";
import { SocialIcon } from "react-social-icons";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header
      style={{
        position: "relative",
        width: "100%",
        zIndex: 2,
        boxShadow: "0 6px 20px 0 rgba(256, 256, 256, 0.4)",
      }}
      className="bg-gray-800"
    >
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="underline"
            className="inline-flex items-center py-6 px-3 mr-4 text-yellow-500 hover:text-white text-3xl font-bold tracking-widest"
          >
            Kody
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="underline bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white text-1xl"
          >
            Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="underline bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white text-1xl"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="underline bg-gray-600"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-yellow-500 hover:text-white text-1xl"
          >
            About Me
          </NavLink>
        </nav>
        <div className="bg-gray-700 inline-flex rounded py-3 px-3 my-6">
          <SocialIcon
            url="http://www.github.com/Kodylow"
            target="_blank"
            fgColor="#fff"
            className="mr-4"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://www.linkedin.com/in/kodylow"
            target="_blank"
            fgColor="#fff"
            className="mr-4"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="http://www.twitter.com/lndevs"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
