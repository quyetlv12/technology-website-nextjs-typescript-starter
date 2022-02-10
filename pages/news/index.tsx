import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Card from "../../components/molecules/website/card/card";
import { PostInterface } from "../../interfaces/post.interface";
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
    <div className="mt-2">
      {posts.map((_post: PostInterface, index: number) => (
        <Link href={`/news/${_post.id}`} key={index}>
          <a>
            <Card item={_post} />
          </a>
        </Link>
      ))}
    </div>
  );
};

export default News;
