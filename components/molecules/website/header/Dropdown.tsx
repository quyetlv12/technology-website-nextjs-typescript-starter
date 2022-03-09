import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  changeLoginStatus,
  saveInfoAccount,
} from "../../../../redux/slices/authSlice";
import { RootState } from "../../../../redux/store";
import { useAlert } from "react-alert";

const Dropdown = () => {
  const alert = useAlert()
  const { user, loginStatus } = useSelector((state: RootState) => state?.auth);  
  const router = useRouter();
  const pushRouter = (link: string) => {
    router.push(link);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.setItem("login", "false");
    dispatch(saveInfoAccount({}));
    dispatch(changeLoginStatus(false));
    alert.success("Đăng xuất thành công !")
    router.push("/login");
  };
  return (
    <div className="w-56 text-right top-16 hidden lg:block">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center items-center gap-1 w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {loginStatus ? (
              <img
                src={
                  user?.methodLogin === "google"
                    ? user?.photos[0].value
                    : user?.avatar_url
                }
                alt=""
                className="w-[30px] h-[30px] rounded-full"
              />
            ) : (
              <FaUserCircle
                size={23}
                className={`${loginStatus ? "hidden" : "block"}`}
              />
            )}
            <span>
              {user?.methodLogin === "google" ? user?.displayName : user?.login}
            </span>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          {user?.role === 1 ? (
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-indigo-500 text-white" : "text-gray-900"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                      onClick={() => pushRouter("/admin/")}
                    >
                      Quản trị
                    </button>
                  )}
                </Menu.Item>
              </div>
            ) : null}
            {loginStatus ? (
              <>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-indigo-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        onClick={() => handleLogout()}
                      >
                        Đăng xuất
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </>
            ) : (
              <>
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-indigo-500 text-white" : "text-gray-900"
                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        onClick={() => pushRouter("/login")}
                      >
                        Đăng nhập
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
