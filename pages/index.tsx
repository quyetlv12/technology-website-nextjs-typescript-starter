import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import HeroSection from "../components/molecules/website/heroSection/HeroSection";

import CarouselTop from "../components/molecules/website/carousel";
import CourseSection from "../components/molecules/website/courseSection";
import ReviewSection from "../components/molecules/website/reviewSection";
import StaticSection from "../components/molecules/website/staticSection";
// {
//   posts,
// }: InferGetStaticPropsType<typeof getStaticProps>
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vietlesson</title>
      </Head>
      <CarouselTop />
      <div className="mx-[10%]">
        <div>
          <HeroSection />
          <StaticSection />
          <CourseSection title={"Vietnamese Lesson"} />
          <CourseSection title="English Lesson" />
          <ReviewSection title="Review"/>
        </div>
      </div>
    </div>
  );
};
//fetch api
// export const getStaticProps: GetStaticProps = async () => {
//   // const { data } = await PostService.getPosts(); // your fetch function here
//   return {
//     props: {
//       posts: [],
//     },
//   };
// };

export default Home;
