import React from "react";

export default function Masthead() {
  return (
    <div className="flex-shrin0 flex items-center">
      <img
        className="block sm:hidden h-12 w-auto"
        src="/images/svg/logo.svg"
        alt="Ritual Motherhood"
      />
      <img
        className="hidden sm:block h-8 w-auto"
        src="/images/svg/logo-horizontal.svg"
        alt="Ritual Motherhood"
      />
    </div>
  );
}
