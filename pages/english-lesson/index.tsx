import { GetStaticProps, InferGetStaticPropsType } from 'next';
import React from 'react'
import CourseSection from '../../components/molecules/website/courseSection'
import { ENG, VIE } from '../../configs';
import { courseService } from '../../services/cours.service';

const EnglishLesson = ({
   courses
}: InferGetStaticPropsType<typeof getStaticProps>) => {  
  return (
    <div>
        <CourseSection  courses={courses} />
    </div>
  )
}

//fetch api
export const getStaticProps: GetStaticProps = async () => {
  const { data : courses} = await courseService.getCoursesByCategory(0,9,ENG)   
  return {
    props: {
      courses : courses
    },
  };
};

export default EnglishLesson