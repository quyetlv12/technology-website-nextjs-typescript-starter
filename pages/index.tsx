import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import CategoriesCard from "../components/atoms/card/categories";
import Title from "../components/atoms/title/Title";
import CategorySection from "../components/molecules/website/categorySection/CategorySection";
import HeroSection from "../components/molecules/website/heroSection/HeroSection";
import PostHightlightCard from "../components/molecules/website/postHightlightCard/PostHightlightCard";
import PostSection from "../components/molecules/website/postSection/postSection";
import PostService from "../services/post.service";

const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Blogger</title>
      </Head>
      {/* categories */}
      <Title title="Danh mục tìm kiếm nhiều nhất" />
      <CategorySection />
      <PostHightlightCard />
      <div>
        <PostSection title={"Tin tức nổi bật"} posts={posts} />
        <HeroSection />
      </div>
    </div>
  );
};
//fetch api
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await PostService.getPosts(); // your fetch function here
  return {
    props: {
      posts: data,
    },
  };
};

export default Home;
