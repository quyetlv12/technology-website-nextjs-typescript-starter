import Link from "next/link";
import { useRouter } from "next/router";
import { NAV_WEBSITE } from "../../../../configs";
import Dropdown from "./Dropdown";
const Header = () => {
  const { pathname } = useRouter();

  return (
    <header className="text-white body-font bg-indigo-500">
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" >
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
        <div className="md:ml-auto md:mr-auto lg:block md:block sm:hidden flex flex-wrap items-center text-base justify-center">
        <Link href="/" >
                <a
                  className={` ${
                    pathname === "/"
                      ? "text-yellow-500 bg-white p-2 rounded-lg"
                      : ""
                  } mr-3 px-4`}
                >
                  <span>Trang chủ</span>
                </a>
              </Link>
        </div>
        <Dropdown />
      </nav>
    </header>
  );
};

export default Header;
