import React from "react";
import NavbarBist from "../NavbarBist";
import logo from "../../assets/authentication.png";

const Navbar = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Github", href : "https://github.com/hubertDgomes" },
        { label: "Linkedin", href : "https://www.linkedin.com/in/hubertdgomes/"  },
      ],
    },
    {
      label: "User Panel",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Log In", ariaLabel: "Featured Projects" , href : "/login"},
        { label: "Sign Up", ariaLabel: "Project Case Studies" },
      ],
    },
    // {
    //   label: "Contact",
    //   bgColor: "#271E37",
    //   textColor: "#fff",
    //   links: [
    //     { label: "Email", ariaLabel: "Email us" },
    //     { label: "Twitter", ariaLabel: "Twitter" },
    //     { label: "LinkedIn", ariaLabel: "LinkedIn" },
    //   ],
    // },
  ];
  return (
    <NavbarBist
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#ffffff"
      menuColor="#000000"
      buttonBgColor="#000000"
      buttonTextColor="#ffffff"
      ease="power3.out"
      theme="light"
    />
  );
};

export default Navbar;
