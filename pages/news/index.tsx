import { InferGetStaticPropsType } from "next";
import { useForm } from "react-hook-form";
import InputCustom from "../../components/atoms/input/InputCustom";
import PostSection from "../../components/molecules/website/postSection/postSection";
import SideBar from "../../components/molecules/website/sidebar";
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
  const { register } = useForm();
  return (
    <div>
      <div className="flex flex-wrap -m-3">
        <div className="md:w-1/4 w-full p-4">
          <SideBar />
        </div>
        <div className="md:w-3/4 w-full">
          <PostSection
            title={"Danh sách bài viết"}
            posts={posts}
            maxWidth={2}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
