import React from "react";
import NavItem from "./NavItem";
import site from "site.config.json";

export default function NavMobile({ menuOpen }) {
  return (
    <div className={menuOpen ? "sm:hidden" : "hidden sm:hidden"}>
      <div className="px-2 pt-2 pb-3 space-y-1">
        {site.nav.map((item) => {
          return (
            <NavItem key={item.title} url={item.path} label={item.title} />
          );
        })}
      </div>
    </div>
  );
}
