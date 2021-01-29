import React from "react";
import { Link } from "gatsby";

export default function NavItem({ url, label, isActive, isDesktop }) {
  const NavItemStates = {
    active: "bg-gray-900 text-white",
    inactive: "text-gray-500 hover:bg-gray-500 hover:text-white",
    mobile: "block text-base",
    desktop: "text-sm",
  };

  return (
    <Link
      to={url}
      className="test"
      getProps={({ isCurrent }) => {
        return {
          className: `rounded-md px-3 py-2 ${
            isCurrent ? NavItemStates.active : NavItemStates.inactive
          } ${isDesktop ? NavItemStates.desktop : NavItemStates.mobile}`,
        };
      }}
    >
      {label}
    </Link>
  );
}
