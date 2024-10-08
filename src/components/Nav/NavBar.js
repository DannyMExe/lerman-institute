import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { links } from "./links";
import styles from "./NavBar.module.css";
// import styled from "styled-components";

// const LinkCont = styled.div`
//   display: flex;
//   gap: 10px;
//   /* justify-content: flex-end; */
// `;

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu right isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
      {links.map((link, idx) => {
        return (
          <Link
            key={idx}
            id={link.id}
            className="menu-item"
            href={link.path}
            onClick={closeSideBar}
          >
            <div>
              {link.icon}
              {link.title}
            </div>
          </Link>
        );
      })}
    </Menu>
  );
};

export default NavBar;
