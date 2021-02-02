import React from "react";
import { styled } from "@linaria/react";
import HamburgerClosed from "svg/hamburger-closed.svg";
import HamburgerOpen from "svg/hamburger-open.svg";

const Button = styled.button`
  @apply inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white;
`;

export default function HamburgerBtn({ onClick, menuOpen }) {
  return (
    <Button aria-expanded="false" onClick={onClick}>
      <span className="sr-only">Open main menu</span>
      <HamburgerClosed className={menuOpen ? "hidden" : "block h-6 w-6"} />
      <HamburgerOpen className={menuOpen ? "block h-6 w-6" : "hidden"} />
    </Button>
  );
}
