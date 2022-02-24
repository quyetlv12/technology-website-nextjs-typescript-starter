import Link from "next/link";
import Dropdown from "./DropDown";

const HeaderAdmin = () => {
  return (
    <header className="w-full bg-indigo-500 p-4 flex justify-between items-center">
      <nav className="flex items-center">
        <img
          className="w-7 h-7"
          src="https://www.solarwinds.com/-/media/solarwinds/swdcv2/licensed-products/service-desk/integrations/sd-integrations-logo-jira.ashx?rev=701fbaa7f8ac4ae08e0406c8984c43e7&hash=75D4F04DE99B88DE7B2C4193F0616F1F"
        />
        <span className="text-white font-bold text-xl ml-2">MY BLOG</span>
        <div className="text-white text-xs hidden sm:block ml-2">
          <Link href="/">
            <a className="bg-green-600 hover:bg-gray-700 p-2 font-bold rounded cursor-pointer">
              Về website
            </a>
          </Link>
        </div>
      </nav>
      <div className="cursor-pointer">
        <Dropdown />
      </div>
    </header>
  );
};

export default HeaderAdmin;
