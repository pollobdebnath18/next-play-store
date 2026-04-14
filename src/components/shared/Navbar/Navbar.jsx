import React from "react";
import LogoImg from "../../../assets/images/logo.png";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import MyLink from "./MyLink";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Apps",
      to: "/apps",
    },
    {
      name: "Installation",
      to: "/installation",
    },
    {
      name: "Dashboard",
      to: "/dashboard",
    },
  ];
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                {/* client component */}
              {links.map((link) => (
                <MyLink key={link.to} href={link.to}>
                  {link.name}
                </MyLink>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Image
              src={LogoImg}
              alt="logo"
              className="hidden md:flex w-[40px]  h-[40px]"
            />
            <a className="btn btn-ghost text-xl">Play Store</a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex justify-center items-center gap-3 px-1">
            {/* Client side */}
            {links.map((link) => (
              <MyLink key={link.to} href={link.to}>
                {link.name}
              </MyLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white">
            <FaGithub></FaGithub> Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
