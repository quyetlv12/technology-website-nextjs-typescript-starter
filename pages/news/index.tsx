import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { PostInterface } from "../../interfaces/post.interface";
import PostService from "../../services/post.service";
import * as _ from "lodash";
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
    </div>
  );
};

export default News;
