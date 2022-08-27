import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import CarouselTop from "../components/molecules/website/carousel";
import ContactFormBottom from "../components/molecules/website/contactFormBottom";
import CourseSection from "../components/molecules/website/courseSection";
import StaticSection from "../components/molecules/website/staticSection";
import { ENG, useAppDispatch, useAppSelector, VIE } from "../configs";
import { getEnglishCourses, getVietnamesCourses, setEnglishLesson, setVietnamesesLesson } from "../redux/slices/coursesSlide";
import { getSchedules, setSchedule } from "../redux/slices/schedule";
import { courseService } from "../services/cours.service";
import PostService from "../services/post.service";
import Schedule from './../components/molecules/website/schedule/index';
import { scheduleService } from './../services/schedule.service';
const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const vieLesson = useAppSelector(getVietnamesCourses)
  const engLesson = useAppSelector(getEnglishCourses)
  const schdules = useAppSelector(getSchedules)
  console.log(schdules);

  useEffect(() => {
    const getData = async () => {
      const { data: posts } = await PostService.getPosts();
      const { data: courses } = await courseService.getCourse()
      const { data: schedules } = await scheduleService.getAllSchedules()
      const vieLesson = courses.filter((_elt: any) => {
        return _elt.category.type === VIE
      })
      dispatch(setVietnamesesLesson(vieLesson))
      const engLesson = courses.filter((_elt: any) => {
        return _elt.category.type === ENG
      })
      dispatch(setEnglishLesson(engLesson))
      dispatch(setSchedule(schedules))
    }
    getData()
  }, [])

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
          <CourseSection title="English Lesson" type={'english'} courses={engLesson} titleVie={'Khoá học tiếng việt'} />
          <Schedule schedules={schdules} title="Schedule Vietnamese Class" titleVie={"Lịch khai giảng lớp tiếng việt"} />
          {/* <ContactFormBottom /> */}
          <Schedule schedules={schdules} title="Schedule English Class" titleVie={"Lịch khai giảng lớp tiếng anh"} />
          <div className="grid grid-cols-2">
            <ContactFormBottom title={"Đăng kí khoá học tiếng anh"} />
            <ContactFormBottom title={"Đăng kí khoá học tiếng việt"} />
          </div>

        </div>
      </div>
    </div>
  );
};
export default Home;
