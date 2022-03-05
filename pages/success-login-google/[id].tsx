// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import _ from "lodash";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Router from "next/router";
import { FC, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { UserGoogle } from "../../interfaces/userGoogle.interface";
import {
  changeLoginStatus,
  saveInfoAccount
} from "../../redux/slices/authSlice";
import authService from "../../services/authService";
interface UserProps {
  user?: UserGoogle;
}
const DetailUser: FC<UserProps> = ({ user }) => {
  const alert = useAlert()
  const dispatch = useDispatch();
  useEffect(() => {
    const account = _.assign({ methodLogin: "google" }, user);
    localStorage.setItem("user", JSON.stringify(account));
    localStorage.setItem("login", "true");
    localStorage.setItem("login-method", "google");
    dispatch(saveInfoAccount(account));
    dispatch(changeLoginStatus(true));
    alert.success('Đăng nhập thành công !')
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);

  return <div className="flex justify-center pt-2">
     <div>
      <div className="flex justify-center">
        <div>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={user?.photos[0].value || ""}
            alt=""
            className="rounded-full w-full"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="uppercase text-indigo-500">Chào mừng , {user?.displayName}</h2>
      </div>
    </div>
  </div>;
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const { data } = await authService.getInfoUser(id); // your fetch function here
  return {
    props: {
      user: data,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: users } = await authService.getALlUser(); //fetch api get all products and return props
  // create paths
  const paths = users.map((user: any) => {
    return {
      params: {
        id: user._id,
      },
    };
  });
  // ==> return path to params
  return {
    paths,
    fallback: false,
  };
};

export default DetailUser;
