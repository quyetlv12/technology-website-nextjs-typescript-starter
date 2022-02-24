import Link from "next/link";
import { useState } from "react";
import SidebarMobile from "../sidebarMobile/SidebarMobile";
import Dropdown from "./DropDown";
import { AiOutlineMenu } from "react-icons/ai";

const HeaderAdmin = () => {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const toggle = () => {
    setIsOpenSideBar(!isOpenSideBar);
    if (!isOpenSideBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  return (
    <div>
      <header className="w-full bg-indigo-500 p-4 flex justify-between items-center border-b-2 border-b-white">
        <nav className="flex items-center">
          <button
            className="absolute left-0 ml-3 mt-1 block md:hidden"
            onClick={toggle}
          >
            <AiOutlineMenu size={30} color="#fff" />
          </button>
          <div className="ml-[30px]">
            <Link href="/">
              <a className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full mt-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="text-white font-bold text-xl ml-2 mt-1">
                  MY BLOG
                </span>
              </a>
            </Link>
          </div>
        </nav>
        <div className="cursor-pointer">
          <Dropdown />
        </div>
      </header>
      <div className="block md:hidden">
        <SidebarMobile sidebarOpen={isOpenSideBar} toggle={toggle} />
      </div>
    </div>
  );
};

export default HeaderAdmin;
