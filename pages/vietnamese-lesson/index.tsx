import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react'
import CourseSection from '../../components/molecules/website/courseSection'
import { VIE } from '../../configs';
import { courseService } from '../../services/cours.service';

const VietnameseLesson = ({
  courses
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
        <CourseSection courses={courses} />
    </div>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const { data : courses} = await courseService.getCoursesByCategory(0,9,VIE)   
  return {
    props: {
      courses : courses
    },
  };
};

export default VietnameseLesson