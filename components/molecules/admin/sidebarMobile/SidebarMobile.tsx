import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { AiFillHome } from "react-icons/ai";
import { BiNews, BiMailSend, BiUser, BiLogIn, BiLogOut } from "react-icons/bi";
interface SidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: any;
  toggle?: any;
}
const SidebarMobile: FC<SidebarProps> = ({
  sidebarOpen,
  setSidebarOpen,
  toggle,
}) => {
  const router = useRouter();
  const redirectRouter = (link: any) => {
    router.push(link);
    toggle();
  };
  return (
    <div className="lg:w-64 ">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 top-0 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none "
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        // ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-0 lg:top-0 lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-indigo-500 p-4 transition-transform duration-200 ease-in-out scrollbar scrollbar-thumb-gray-200 scrollbar-track-gray-100 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-start items-center gap-6 mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            // ref={trigger}
            className="lg:hidden text-white hover:text-gray-400"
            onClick={() => toggle()}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          <Link href={"/"}>
            <a
              className="flex title-font font-medium items-center bg-indigo-700 p-1 pb-2 pr-2 pl-2 rounded-lg text-gray-900 md:mb-0"
              onClick={toggle}
            >
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
              <span className="ml-3 text-md lg:text-xl uppercase mt-2 text-white">
                MY BLOG
              </span>
            </a>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-col text-white">
          <Link href="/admin">
            <a
              className={`font-bold text-xl pt-3 pb-3 mt-2 border-b-indigo-300 border-[1px] border-t-0 border-l-0 border-r-0 ${
                router.pathname === "/admin" ? "bg-indigo-600 rounded-lg p-3" : ""
              } flex items-center gap-1`}
              onClick={toggle}
            >
              <AiFillHome />
              <span>Trang chủ</span>
            </a>
          </Link>
          <Link href="/admin/news">
            <a
              className={`font-bold text-xl pt-3 pb-3 mt-2 border-b-indigo-300 border-[1px] border-t-0 border-l-0 border-r-0 ${
                router.pathname === "/admin/news" ? "bg-indigo-600 rounded-lg p-3" : ""
              } flex items-center gap-1`}
              onClick={toggle}
            >
              <AiFillHome />
              <span>Bài viết</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
