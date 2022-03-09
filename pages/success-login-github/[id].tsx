// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths, GetStaticProps } from "next";
import Router, { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
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
import { useAlert } from "react-alert";

interface UserProps {
  id?: string;
}
const DetailUser: FC<UserProps> = ({id}) => {      
  const [user, setUser] = useState<UserGithub>()
  const alert = useAlert();
  const dispatch = useDispatch();
  useEffect(() => {
    const loadInfoUser = async () =>{
      const {data : user} =  await authService.getInfoUserGithub(id);
      setUser(user)
      const account = _.assign({ methodLogin: "github" }, user);
      localStorage.setItem("user", JSON.stringify(account));
      localStorage.setItem("login", "true");
      localStorage.setItem("login-method", "github");
      dispatch(saveInfoAccount(account));
      dispatch(changeLoginStatus(true));
      alert.success('Đăng nhập thành công !')
      setTimeout(() => {
        Router.push("/");
      }, 3000);
    }
    loadInfoUser()
  }, []);
  return (
    <div>
      <div className="flex justify-center">
        <div>
         
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
  return {
    props: {
      id: id,
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
