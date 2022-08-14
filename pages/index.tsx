import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import HeroSection from "../components/molecules/website/heroSection/HeroSection";

import CarouselTop from "../components/molecules/website/carousel";
import CourseSection from "../components/molecules/website/courseSection";
import ReviewSection from "../components/molecules/website/reviewSection";
import StaticSection from "../components/molecules/website/staticSection";
import ContactFormBottom from "../components/molecules/website/contactFormBottom";
const Home: NextPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
      <link rel="shortcut icon" href="../assests/images/Vietlesson-color.png" />
        <title>Vietlesson</title>
      </Head>
      <CarouselTop />
      <div className="mx-[5%]">
        <div>
          {/* <HeroSection /> */}
          <StaticSection />
          <CourseSection title={"Vietnamese Lesson"} type={'vietnamese'} />
          <CourseSection title="English Lesson" type={'english'} />
          <ContactFormBottom/>
        </div>
      </div>
    </div>
  );
};
//fetch api
export const getStaticProps: GetStaticProps = async () => {
  // const { data } = await PostService.getPosts(); // your fetch function here
  return {
    props: {
      posts: [],
    },
  };
};

export default Home;
