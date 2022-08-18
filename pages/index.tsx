import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import HeroSection from "../components/molecules/website/heroSection/HeroSection";

import CarouselTop from "../components/molecules/website/carousel";
import CourseSection from "../components/molecules/website/courseSection";
import ReviewSection from "../components/molecules/website/reviewSection";
import StaticSection from "../components/molecules/website/staticSection";
import ContactFormBottom from "../components/molecules/website/contactFormBottom";
import PostService from "../services/post.service";
import { courseService } from "../services/cours.service";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setEnglishLesson, setVietnamesesLesson } from "../redux/slices/coursesSlide";
import { ThunkDispatch } from "redux-thunk";
import { ENG, useAppDispatch, VIE } from "../configs";
const Home: NextPage = ({
  posts, courses
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const dispatch = useAppDispatch()
  const vieLesson = courses.filter((_elt:any)=> {
    return _elt.category.type === VIE
  })
  dispatch(setVietnamesesLesson(vieLesson))
  const engLesson = courses.filter((_elt:any)=> {
    return _elt.category.type === ENG
  })
  dispatch(setEnglishLesson(engLesson))  
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
          <CourseSection title={"Vietnamese Lesson"} type={'vietnamese'} courses={vieLesson} />
          <CourseSection title="English Lesson" type={'english'} courses={engLesson} />
          <ContactFormBottom/>
        </div>
      </div>
    </div>
  );
};
//fetch api
export const getStaticProps: GetStaticProps = async () => {
  const { data : posts } = await PostService.getPosts(); 
  const { data : courses} = await courseService.getCourse()   
  return {
    props: {
      posts: posts,
      courses : courses
    },
  };
};

export default Home;
