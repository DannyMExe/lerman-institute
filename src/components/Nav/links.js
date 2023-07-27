import { FaAward, FaHome } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import { RiFilePaper2Fill } from "react-icons/ri";
import { BsFillFileEarmarkPersonFill, BsGlobe2 } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { BiNews } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { IoPeopleCircle } from "react-icons/io5"

export const links = [
  { id: "home", path: "/", title: "HOME", icon: <FaHome /> },
  { id: "videos", path: "/videos", title: "VIDEOS", icon: <GoVideo /> },
  // {
  //   id: "awards",
  //   path: "/awards",
  //   title: "AWARDS",
  //   icon: <FaAward />,
  // },
  {
    id: "board", path: "/board", title: "OUR BOARD", icon: <IoPeopleCircle/>,
  },
  {
    id: "publications",
    path: "/publications",
    title: "PUBLICATIONS",
    icon: <BiNews />,
  },
  {
    id: "contact",
    path: "/contact",
    title: "CONTACT",
    icon: <IoMdContact />,
  },
  // { id: "outreach", path: "/outreach", title: "Outreach" },
  // { id: "gallery", path: "/gallery", title: "Gallery" },
  // { id: "contact", path: "/contact", title: "Contact" },
];
