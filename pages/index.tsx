import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";

import CarouselTop from "../components/molecules/website/carousel";
import ContactFormBottom from "../components/molecules/website/contactFormBottom";
import CourseSection from "../components/molecules/website/courseSection";
import StaticSection from "../components/molecules/website/staticSection";
import { ENG, useAppDispatch, VIE } from "../configs";
import { setEnglishLesson, setVietnamesesLesson } from "../redux/slices/coursesSlide";
import { courseService } from "../services/cours.service";
import PostService from "../services/post.service";
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
