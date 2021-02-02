import React from "react";
import NavItem from "./NavItem";
import site from "site.config.json";

export default function NavDesktop() {
  return (
    <div className="hidden sm:block sm:ml-6">
      <div className="flex space-x-4">
        {site.nav.map((item) => {
          return (
            <NavItem
              key={item.title}
              url={item.path}
              label={item.title}
              isDesktop
            />
          );
        })}
      </div>
    </div>
  );
}
