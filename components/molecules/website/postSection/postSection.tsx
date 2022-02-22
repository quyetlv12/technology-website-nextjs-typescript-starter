import { FC } from "react";
import { PostInterface } from "../../../../interfaces/post.interface";
import Card from "../../../atoms/card/Card";

interface PostProps {
  title?: string;
  posts: [];
  maxWidth? : number;
}
const PostSection: FC<PostProps> = ({ title = "Tin tức" ,posts , maxWidth }) => {
  return (
    <>
      {/* component */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-1 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-[1rem] md:tex[2xl] lg:text-[3xl]  font-bold title-font mb-2 text-gray-900">
               {title}
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {posts.map((_post: PostInterface) => (
              <Card _post={_post} maxWidth={maxWidth} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSection;
