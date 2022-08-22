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
import Schedule from './../components/molecules/website/schedule/index';
import { scheduleService } from './../services/schedule.service';
const Home: NextPage = ({
  posts, courses , schedules
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log("schedules" , schedules);
  
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
          <CourseSection title={"Vietnamese Lesson"} titleVie={'Khoá học tiếng việt'} type={'vietnamese'} courses={vieLesson} />
          <CourseSection title="English Lesson" type={'english'} courses={engLesson}  titleVie={'Khoá học tiếng việt'} />
          <Schedule schedules={schedules}/>
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
  const { data : schedules} = await scheduleService.getAllSchedules()   
  return {
    props: {
      posts: posts,
      courses : courses,
      schedules :  schedules
    },
  };
};

export default Home;
