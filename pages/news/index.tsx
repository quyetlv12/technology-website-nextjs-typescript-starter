import Card from "../../components/molecules/website/card/card";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import PostService from "../../services/post.service";
import { PostInterface } from "../../interfaces/post.interface";
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
  console.log(posts);

  return (
    <div className="mt-2">
      {posts.map((_post: PostInterface, index: number) => (
        <Card key={index} item={_post} />
      ))}
    </div>
  );
};

export default News;
