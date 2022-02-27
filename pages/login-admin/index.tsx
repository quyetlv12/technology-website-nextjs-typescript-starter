import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import InputCustom from "../../components/atoms/input/InputCustom";
import { UserLoginInterface } from "../../interfaces/user.Interface";

const Login = () => {
  const { handleSubmit, register } = useForm<UserLoginInterface>();
  const onSubmit: SubmitHandler<UserLoginInterface> = (data) => {
    console.log(data);
  };
  return (
    <div className="lg:flex shadow-md mb-3">
      <div className="lg:w-1/2 xl:max-w-screen-sm">
        <div className="py-12 bg-indigo-100 lg:bg-white hidden md:flex justify-center lg:justify-center lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div>
              <svg
                className="w-10 text-indigo-500"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="0 0 225 225"
                // style={{ enableBackground: "new 0 0 225 225" }}
                xmlSpace="preserve"
              >
                <style
                  type="text/css"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                    .st0{fill:none;stroke:currentColor;stroke-width:20;stroke-linecap:round;stroke-miterlimit:3;}\n                                ",
                  }}
                />
                <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                  <g>
                    <path
                      id="Layer0_0_1_STROKES"
                      className="st0"
                      d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">
              My blog
            </div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-2 xl:px-24 xl:max-w-2xl">
          <h2
            className="text-center text-3xl text-indigo-900 font-display font-semibold lg:text-left xl:text-4xl
                xl:text-bold"
          >
            Đăng nhập
          </h2>
          <div className="mt-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">
                  Điạ chỉ email
                </div>
                <InputCustom
                  fieldName="email"
                  placeholder="Nhập email"
                  register={register}
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Mật khẩu
                  </div>
                  <div>
                    <a
                      className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                    cursor-pointer"
                    >
                      Quên mật khẩu ?
                    </a>
                  </div>
                </div>
                <InputCustom
                  fieldName="password"
                  placeholder="Nhập mật khẩu"
                  register={register}
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                            shadow-lg"
                >
                  Đăng nhập
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Bạn chưa có tài khoản ?{" "}
              <Link href="/signup">
                <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">
                  Đăng kí ngay
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
        <div className="max-w-xs transform duration-200 hover:scale-105 cursor-pointer">
         <Image
           width={500}
           height={900}
           objectFit="cover"
           src={"http://placeimg.com/640/480/animals"}
           alt=""
         />
        </div>
      </div>
    </div>
  );
};

export default Login;
