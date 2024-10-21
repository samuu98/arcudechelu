
"use client";

import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const NavBar = () => {
  return (
    <Navbar fluid rounded className="w-full shadow-md">
    <NavbarBrand href="https://flowbite-react.com">
      <img src="/logo.png" className="m-3 mr-5 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Arcu de Chelu B&B</span>
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <NavbarLink className="text-lg md:text-xl" href="#" active>
        Home
      </NavbarLink>
      <NavbarLink className="text-lg md:text-xl" href="#">
        About
      </NavbarLink>
      <NavbarLink className="text-lg md:text-xl" href="#">Services</NavbarLink>
      <NavbarLink className="text-lg md:text-xl" href="#">Pricing</NavbarLink>
      <NavbarLink className="text-lg md:text-xl" href="#">Contact</NavbarLink>
    </NavbarCollapse>
    </Navbar>
  );
};

export default NavBar;
