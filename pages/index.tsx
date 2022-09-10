import type {InferGetStaticPropsType, NextPage} from "next";
import {GetStaticProps} from "next";
import Head from "next/head";
import {useEffect, useState} from "react";

import CarouselTop from "../components/molecules/website/carousel";
import ContactFormBottom from "../components/molecules/website/contactFormBottom";
import CourseSection from "../components/molecules/website/courseSection";
import StaticSection from "../components/molecules/website/staticSection";
import {_LIMIT_START_DOC_SCHEDULE, ENG, scheduleEngHeaderList, useAppDispatch, useAppSelector, VIE} from "../configs";
import {
    getEnglishCourses,
    getVietnamesCourses,
    setEnglishLesson,
    setVietnamesesLesson
} from "../redux/slices/coursesSlide";
import {
    getEngSchedule,
    getEngStartDoc,
    getVieStartDoc,
    setEnglishSchedule,
    setSchedule,
    setVietnamesesSchedule,
    updateVietnamesesStartDoc,
    updateEnglishStartDoc
} from "../redux/slices/schedule";
import {courseService} from "../services/cours.service";
import PostService from "../services/post.service";
import Schedule from './../components/molecules/website/schedule/index';
import {scheduleService} from '../services/schedule.service';
import Pagination from './../components/molecules/website/pagination/Pagination';
import {scheduleVieHeaderList} from '../configs';
import {getVieSchedule} from '../redux/slices/schedule';
import ReviewSection from "../components/molecules/website/reviewSection";

const Home: NextPage = () => {
    const dispatch = useAppDispatch()
    const vieLesson = useAppSelector(getVietnamesCourses)
    const engLesson = useAppSelector(getEnglishCourses)
    const vieSchedule = useAppSelector(getVieSchedule)
    const engSchedule = useAppSelector(getEngSchedule)
    const vieDoc = useAppSelector(getVieStartDoc)
    const engDoc = useAppSelector(getEngStartDoc)
    const handleNextPage = async (type: any) => {
        if (type === VIE) {
            const start = Number(vieDoc + _LIMIT_START_DOC_SCHEDULE)
            const res = await scheduleService.getScheduleByCate(start, _LIMIT_START_DOC_SCHEDULE, VIE)
            dispatch(setVietnamesesSchedule(res.data))
            dispatch(updateVietnamesesStartDoc(start))
        } else {
            const start = Number(engDoc + _LIMIT_START_DOC_SCHEDULE)
            const res = await scheduleService.getScheduleByCate(start, _LIMIT_START_DOC_SCHEDULE, ENG)
            dispatch(setEnglishSchedule(res.data))
            dispatch(updateEnglishStartDoc(start))
        }
    }
    const handlePrevPage = async (type: any) => {
        console.log("type", type)
        if (type === VIE) {
            const start = Number(vieDoc - _LIMIT_START_DOC_SCHEDULE)
            console.log("start", start)
            const res = await scheduleService.getScheduleByCate(start, _LIMIT_START_DOC_SCHEDULE, VIE)
            dispatch(setVietnamesesSchedule(res.data))
            dispatch(updateVietnamesesStartDoc(start))
        } else {
            const start = Number(engDoc - _LIMIT_START_DOC_SCHEDULE)
            const res = await scheduleService.getScheduleByCate(start, _LIMIT_START_DOC_SCHEDULE, ENG)
            dispatch(setEnglishSchedule(res.data))
            dispatch(updateEnglishStartDoc(start))
        }
    }
    useEffect(() => {
        const getData = async () => {
            const {data: courses} = await courseService.getCourse()
            const {data: vieSchedule} = await scheduleService.getScheduleByCate(vieDoc, _LIMIT_START_DOC_SCHEDULE, VIE)
            const {data: engSchedule} = await scheduleService.getScheduleByCate(engDoc, _LIMIT_START_DOC_SCHEDULE, ENG)
            const {data: schedules} = await scheduleService.getAllSchedules()
            const vieLesson = courses.filter((_elt: any) => {
                return _elt.category.type === VIE
            })
            dispatch(setVietnamesesLesson(vieLesson))
            dispatch(setVietnamesesSchedule(vieSchedule))
            const engLesson = courses.filter((_elt: any) => {
                return _elt.category.type === ENG
            })
            dispatch(setEnglishLesson(engLesson))
            dispatch(setEnglishSchedule(engSchedule))
            dispatch(setSchedule(schedules))
        }
        getData()
    }, [])

    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="../assests/images/Vietlesson-color.png"/>
                <title>Vietlesson</title>
            </Head>
            <CarouselTop/>
            <div className="mx-[5%]">
                <div>
                    {/* <HeroSection /> */}
                    <StaticSection/>

                    {/* COURSE SECTION  */}
                    <CourseSection title={"Vietnamese Lesson"} titleVie={'Khoá học tiếng việt'} type={'vietnamese'}
                                   courses={vieLesson} animation={'animate__zoomIn'}/>


                    {/* COURSE SECTION  */}
                    <CourseSection title="English Lesson" type={'english'} courses={engLesson}
                                   titleVie={'Khoá học tiếng việt'} animation={'animate__zoomIn'}/>


                    {/* SCHEUDLE SECTION */}

                    <Schedule type={VIE} schedules={vieSchedule} title="Schedule Vietnamese Class"
                              titleVie={"Lịch khai giảng lớp tiếng việt"} headerList={scheduleVieHeaderList}
                              className={'mt-[3rem]'}/>

                    {/* PAGINATION SECTION */}

                    <Pagination type={VIE} nextFunc={handleNextPage} prevFunc={handlePrevPage} startDoc={vieDoc}/>


                    {/* SCHEDULE SECTION */}

                    <Schedule type={ENG} schedules={engSchedule} title="Schedule English Class"
                              titleVie={"Lịch khai giảng lớp tiếng anh"} headerList={scheduleEngHeaderList}
                              className={'mt-[3rem]'}/>

                    {/* PAGINATION SECTION */}

                    <Pagination type={ENG} nextFunc={handleNextPage} prevFunc={handlePrevPage} startDoc={engDoc}/>

                    {/*REVIEW SECTION */}
                    <ReviewSection title={'What our customers says'}
                                   titleVie={'Những gì khách hàng của chúng tôi nói'}/>
                    {/* FORM SECTION */}

                    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2" id={'form-section-register'}>
                        <ContactFormBottom type={VIE} title={"Sign up for a Vietnamese class"}
                                           titleVie={"Đăng kí khoá học tiếng việt"} opts={vieSchedule} animation={'animate__backInLeft'}/>
                        <ContactFormBottom type={ENG} title={"Sign up for an English class"}
                                           titleVie={"Đăng kí khoá học tiếng anh"} opts={engSchedule} animation={'animate__backInRight'}/>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default Home;
