import React from "react";
import NavItem from "./NavItem";

export default function NavDesktop() {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <NavItem url="/" label="Home" isDesktop />
        <NavItem url="/blog" label="Blog" isDesktop />
        <NavItem url="/about" label="About" isDesktop />
        <NavItem url="/offerings" label="Offerings" isDesktop />
      </div>
    </div>
  );
}
