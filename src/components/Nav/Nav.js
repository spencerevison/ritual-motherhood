import React from "react";
import HamburgerBtn from "./HamburgerBtn";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import Masthead from "./Masthead";

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  onMenuStateChange = (isOpen) => {
    this.setState({ menuOpen: isOpen });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <HamburgerBtn
                onClick={() => this.onMenuStateChange(!menuOpen)}
                menuOpen={menuOpen}
              />
            </div>

            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <Masthead />
              <NavDesktop />
            </div>
          </div>
        </div>

        <NavMobile menuOpen={menuOpen} />
      </nav>
    );
  }
}
