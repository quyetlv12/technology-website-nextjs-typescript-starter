import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

interface SidebarProps {
  sidebarOpen?: boolean;
  setSidebarOpen?: any;
}
const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useRouter();
  return (
    <aside className="w-80 h-screen bg-gray w-fulll hidden sm:block shadow-lg">
      <div className="flex flex-col justify-between h-screen p-4 bg-indigo-500">
        <div className="text-sm">
          <div
            className={`bg-indigo-700 shadow-sm text-white p-5 rounded cursor-pointer text-center uppercase font-bold text-lg `}
          >
            Danh mục quản lý
          </div>

          <Link href="/admin/">
            <div
              className={` text-white p-2 rounded mt-2 cursor-pointer hover:bg-indigo-600 hover:text-blue-300 ${
                pathname === "/admin" ? "bg-indigo-800" : "bg-indigo-600"
              }`}
            >
              <a>Tổng quan</a>
            </div>
          </Link>

          <Link href="/admin/news">
            <div
              className={` text-white p-2 rounded mt-2 cursor-pointer hover:bg-indigo-600 hover:text-blue-300 ${
                pathname === "/admin/news" ? "bg-indigo-800" : "bg-indigo-600"
              }`}
            >
              <a>Bài viết</a>
            </div>
          </Link>
        </div>
        <div className="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm">
          <button className="rounded inline-flex items-center">
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" />
            </svg>
            <span className="font-semibold">Đăng xuất</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
