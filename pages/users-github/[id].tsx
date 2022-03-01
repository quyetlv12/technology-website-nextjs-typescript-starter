// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths, GetStaticProps } from "next";
import Router, { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { json } from "stream/consumers";
import { UserGoogle } from "../../interfaces/userGoogle.interface";
import authService from "../../services/authService";
interface UserProps {
  user?: UserGoogle;
}
const DetailUser: FC<UserProps> = ({ user }) => {
  const router = useRouter()
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem('login', "true")
    localStorage.setItem('login-method' , 'github')
    Router.push('/')
  }, []);

  return <div>Enter</div>;
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
