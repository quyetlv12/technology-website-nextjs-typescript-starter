import Link from "next/link";
import { useRouter } from "next/router";
import { NAV_WEBSITE } from "../../../../configs";
import Button from "../../../atoms/button/button";

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="text-white body-font bg-gray-700">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {NAV_WEBSITE.map((_elt, index) => (
            <Link href={_elt.link} key={index}>
              <a
                className={`mr-3 ${
                  pathname === _elt.link
                    ? "text-yellow-500 bg-white p-2 rounded-lg"
                    : ""
                }`}
              >
                {_elt.title}
              </a>
            </Link>
          ))}
        </nav>
        <div className="gap-4">
          <Link href="/login">
            <a><Button title="Đăng nhập" classname={`${pathname === "/login" ? "bg-yellow-500" : "bg-black"}  p-2 rounded-lg ml-2`}/></a>
          </Link>
         <Link href="/signup">
           <a><Button title="Đăng kí" classname={`${pathname === "/signup" ? "bg-yellow-500" : "bg-black"}  p-2 rounded-lg ml-2`}/></a>
         </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
