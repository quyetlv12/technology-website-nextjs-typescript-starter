import { InferGetStaticPropsType } from "next";
import { useForm } from "react-hook-form";
import InputCustom from "../../components/atoms/input/InputCustom";
import PostSection from "../../components/molecules/website/postSection/postSection";
import SideBar from "../../components/molecules/website/sidebar";
import BlogTemplate from "../../components/template/blogTemplate/BlogTemplate";
import PostService from "../../services/post.service";
export const getStaticProps = async () => {
  const res = await PostService.getPosts();
  const posts = res.data || [];
  return {
    props: {
      posts,
    },
  };
};
const News = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
   <BlogTemplate children={<PostSection posts={posts}/>} />
  );
};

export default News;
