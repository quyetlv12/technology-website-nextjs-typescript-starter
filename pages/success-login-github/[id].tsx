// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths, GetStaticProps } from "next";
import Router from "next/router";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserGoogle } from "../../interfaces/userGoogle.interface";
import {
  changeLoginStatus,
  saveInfoAccount,
} from "../../redux/slices/authSlice";
import authService from "../../services/authService";
import _ from "lodash";
import { UserGithub } from "../../interfaces/userGithub.interface";
import Image from "next/image";
interface UserProps {
  user?: UserGithub;
}
const DetailUser: FC<UserProps> = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const account = _.assign({ methodLogin: "github" }, user);
    localStorage.setItem("user", JSON.stringify(account));
    localStorage.setItem("login", "true");
    localStorage.setItem("login-method", "github");
    dispatch(saveInfoAccount(account));
    dispatch(changeLoginStatus(true));
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <Image
            width={100}
            height={100}
            objectFit="cover"
            src={user?.avatar_url || ""}
            alt=""
            className="rounded-full w-full"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <h2 className="uppercase text-indigo-500">Chào mừng , {user?.login}</h2>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params;
  const { data } = await authService.getInfoUserGithub(id); // your fetch function here
  return {
    props: {
      user: data,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data: users } = await authService.getAllUserGithub(); //fetch api get all products and return props
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
