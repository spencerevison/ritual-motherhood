import React from "react";
import HamburgerClosed from "../../../static/images/svg/hamburger-closed.svg";
import HamburgerOpen from "../../../static/images/svg/hamburger-open.svg";

export default function HamburgerBtn({ onClick, menuOpen }) {
  return (
    <button
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-expanded="false"
      onClick={onClick}
    >
      <span className="sr-only">Open main menu</span>
      <HamburgerClosed className={menuOpen ? "hidden" : "block h-6 w-6"} />
      <HamburgerOpen className={menuOpen ? "block h-6 w-6" : "hidden"} />
    </button>
  );
}
