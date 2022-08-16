import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import SidebarMobile from "../sidebarMobile/SidebarMobile";
import Dropdown from "./Dropdown";
import Logo from '../../../../assests/images/Vietlesson-color.svg'
import Image from "next/image";
import { GREEN_COLOR, ORANGE_COLOR } from "../../../../configs";
const Header = () => {
  const { pathname } = useRouter();
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);
  const toggle = () => {
    setIsOpenSideBar(!isOpenSideBar);
    if (!isOpenSideBar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  };
  return (
    <header className={`text-white body-font bg-[${GREEN_COLOR}]`}>
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between relative">
        <button
          className="absolute left-0 ml-3 mt-2 block md:hidden"
          onClick={toggle}
        >
          <AiOutlineMenu size={30} />
        </button>
        <Link href="/">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 bg-white px-1 py-2 rounded-lg hover:bg-gray-100">
            <Image src={Logo} width={100} height={45} />
          </a>
        </Link>
        <div className="hidden lg:block">
          <div className="flex justify-center">
            <span>
              <Link href={"/about"}>
                <a
                  className={` ${pathname === "/about"
                      ? "text-yellow-500 bg-white p-2 rounded-lg"
                      : ""
                    } mr-3 px-4 font-bold hover:bg-[${ORANGE_COLOR}] rounded-lg p-2 transition-all duration-700`}
                >
                  <span>ABOUT US</span>
                </a>
              </Link>
            </span>
            <span>
              <Link href={"/vietnamese-lesson"}>
                <a
                  className={` ${pathname === "/vietnamese-lesson"
                      ? "text-yellow-500 bg-white p-2 rounded-lg"
                      : ""
                    } mr-3 px-4 font-bold hover:bg-[${ORANGE_COLOR}] rounded-lg p-2 transition-all duration-700`}
                >
                  <span className="">VIETNAMESE LESSON</span>
                </a>
              </Link>
            </span>
            <span>
              <Link href={"/english-lesson"}>
                <a
                  className={` ${pathname === "/english-lesson"
                      ? "text-yellow-500 bg-white p-2 rounded-lg"
                      : ""
                    } mr-3 px-4 font-bold hover:bg-[${ORANGE_COLOR}] rounded-lg p-2`}
                >
                  <span className="">ENGLISH LESSON</span>
                </a>
              </Link>
            </span>
            <span>
              <Link href={"/coffee-talk"}>
                <a
                  className={` ${pathname === "/coffee-talk"
                      ? "text-yellow-500 bg-white p-2 rounded-lg"
                      : ""
                    } mr-3 px-4 font-bold hover:bg-[${ORANGE_COLOR}] rounded-lg p-2`}
                >
                  <span className="">CLB COFFEE TALK</span>
                </a>
              </Link>
            </span>
            <span>
              <Link href={"/blog"}>
                <a
                  className={` ${pathname === "/blog"
                      ? "text-yellow-500 bg-white p-2 rounded-lg"
                      : ""
                    } mr-3 px-4 font-bold hover:bg-[${ORANGE_COLOR}] rounded-lg p-2`}
                >
                  <span className="">BLOG</span>
                </a>
              </Link>
            </span>
            <span>
              <Link href={"/contact"}>
                <a
                  className={` ${pathname === "/contact"
                      ? "text-yellow-500 bg-white p-2 rounded-lg"
                      : ""
                    } mr-3 px-4 font-bold hover:bg-[${ORANGE_COLOR}] rounded-lg p-2 transition-all duration-700`}
                >
                  <span className="">CONTACT</span>
                </a>
              </Link>
            </span>
          </div>
        </div>
        {/* <Dropdown /> */}
      </nav>
      <div className="block md:hidden">
        <SidebarMobile sidebarOpen={isOpenSideBar} toggle={toggle} />
      </div>
    </header>
  );
};

export default Header;
