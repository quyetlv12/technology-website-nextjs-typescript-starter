import { FC } from "react";

interface SidebarProps {
    sidebarOpen?: boolean;
    setSidebarOpen?: any;
    toggle?: any ;
  }
const SidebarMobile:FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen  ,toggle}) => {
  return (
    <div className="lg:w-64 h-[100%]">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 top-0 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        // ref={sidebar}
        className={`absolute z-40 left-0 top-0 lg:static lg:left-0 lg:top-0 lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 flex-shrink-0 bg-indigo-500 p-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
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
          {/* Logo */}
          {/* <NavLink
          exact
          to="/"
          className="w-full h-[30px] flex lg:justify-center md:justify-end sm:justify-end leading-[10px] "
        >
          <button className="text-gray-800 bg-white p-2 lg:w-full rounded-lg hover:bg-green-600 hover:text-white hover:border-2  transition ease-in duration-700">
            Website
          </button>
        </NavLink> */}
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xs uppercase text-white font-semibold pl-3 text-center">
            Danh mục quản lý
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
