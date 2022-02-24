import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SidebarMobile from "../sidebarMobile/SidebarMobile";
import Dropdown from "./Dropdown";
const Header = () => {
  const { pathname } = useRouter();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const toggle = () => {
    setIsOpenSideBar(!isOpenSideBar);
    if (!isOpenSideBar) {
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  };
  return (
    <header className="text-white body-font bg-indigo-500">
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between relative">
        <button
          className="absolute left-0 ml-3 mt-2 block md:hidden"
          onClick={toggle}
        >
          <AiOutlineMenu size={30} />
        </button>
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl text-white uppercase">MY BLOG</span>
          </a>
        </Link>
        <div className="hidden lg:block">
          <span>
            <Link href={"/"}>
              <a
                className={` ${
                  pathname === "/"
                    ? "text-yellow-500 bg-white p-2 rounded-lg"
                    : ""
                } mr-3 px-4 font-bold`}
              >
                <span>Trang chủ</span>
              </a>
            </Link>
          </span>
          <span>
            <Link href={"/news"}>
              <a
                className={` ${
                  pathname === "/news"
                    ? "text-yellow-500 bg-white p-2 rounded-lg"
                    : ""
                } mr-3 px-4 font-bold`}
              >
                <span>Tin tức</span>
              </a>
            </Link>
          </span>
          <span>
            <Link href={"/about"}>
              <a
                className={` ${
                  pathname === "/about"
                    ? "text-yellow-500 bg-white p-2 rounded-lg"
                    : ""
                } mr-3 px-4 font-bold`}
              >
                <span>Về chúng tôi</span>
              </a>
            </Link>
          </span>
          <span>
            <Link href={"/contact"}>
              <a
                className={` ${
                  pathname === "/contact"
                    ? "text-yellow-500 bg-white p-2 rounded-lg"
                    : ""
                } mr-3 px-4 font-bold`}
              >
                <span>Liên hệ</span>
              </a>
            </Link>
          </span>
        </div>
        <Dropdown />
      </nav>
      <div className="block md:hidden">
        <SidebarMobile sidebarOpen={isOpenSideBar} toggle={toggle} />
      </div>
    </header>
  );
};

export default Header;
