// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
import { GetStaticPaths } from "next";
import { FC } from "react";
import Comment from "../../components/molecules/website/comment/Comment";
import SideBar from "../../components/molecules/website/sidebar";
import { convertISOstringToDate } from "../../configs";
import { PostInterface } from "../../interfaces/post.interface";
import PostService from "../../services/post.service";
interface Props {
  post?: PostInterface;
}
const DetailPost: FC<Props> = ({ post }) => {
  return (
    <div>
      <div className="flex flex-wrap -m-3">
        <div className="md:w-1/4 w-full p-4">
          <SideBar />
        </div>
        <div className="md:w-3/4 w-full">
          <main className="max-w-5xl mx-auto pb-10 pt-10">
            <div className="flex flex-wrap overflow-hidden">
              <div className="w-full">
                <div className="mr-2 md:mr-4 ml-2">
                  <div className="pb-10">
                    {/* first post */}
                    <div>
                      <img
                        className="article-image"
                        src="./images/1-770x518.jpg"
                        alt=""
                      />
                      <h2 className="text-gray-900 font-serif text-3xl my-5 font-thin">
                        <a>{post?.title}</a>
                      </h2>
                      <span className="text-xs text-gray-800 font-thin block mb-5">
                        {post?.author}.{" "}
                        {convertISOstringToDate(post?.createdDate)}
                      </span>
                      <div className="article-body">
                        <p>{post?.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Comment/>
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps({ params }: any) {
  const { id } = params;
  const { data: post } = await PostService.getPost(id); // get info post
  return {
    props: {
      post: post,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await PostService.getPosts(); //fetch api get all products and return props

  // create paths
  const paths = posts.map((post: any) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
  // ==> return path to params
  return {
    paths,
    fallback: false,
  };
};

export default DetailPost;
