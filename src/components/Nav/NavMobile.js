import React from "react";
import NavItem from "./NavItem";

export default function NavMobile({ menuOpen }) {
  return (
    <div className={menuOpen ? "sm:hidden" : "hidden sm:hidden"}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        <NavItem url="/" label="Home" />
        <NavItem url="/blog" label="Blog" />
        <NavItem url="/about" label="About" />
        <NavItem url="/offerings" label="Offerings" />
      </div>
    </div>
  );
}
