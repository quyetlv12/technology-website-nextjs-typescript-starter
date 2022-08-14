import { InferGetStaticPropsType } from "next";
import PostSection from "../../components/molecules/website/postSection/postSection";
import SideBar from "../../components/molecules/website/sidebar";
import PostService from "../../services/post.service";
// export const getStaticProps = async () => {
//   // const res = await PostService.getPosts();
//   const posts = [] || [];
//   return {
//     props: {
//       posts,
//     },
//   };
// };
//{ posts }: InferGetStaticPropsType<typeof getStaticProps>
const News = () => {
  return (
    <div>
      <div className="flex flex-wrap -m-3">
        <div className="md:w-1/4 w-full p-4">
          <SideBar />
        </div>
        <div className="md:w-3/4 w-full py-10 px-5">
          <PostSection
            title={"Danh sách bài viết"}
            // posts={posts}
            maxWidth={2}
            lg={3}
            md={3}
            sm={1}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
