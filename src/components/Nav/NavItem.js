import React from "react";
import { Link } from "gatsby";

export default function NavItem({ url, label, isDesktop }) {
  const classes = {
    base: "uppercase rounded-md px-3 py-2",
    active: "bg-gray-900 text-white",
    inactive: "text-gray-500 hover:bg-gray-500 hover:text-white",
    mobile: "block text-base",
    desktop: "text-sm",
  };

  return (
    <Link
      to={url}
      getProps={({ isCurrent }) => {
        return {
          className: `${classes.base} ${
            isCurrent ? classes.active : classes.inactive
          } ${isDesktop ? classes.desktop : classes.mobile}`,
        };
      }}
    >
      {label}
    </Link>
  );
}
