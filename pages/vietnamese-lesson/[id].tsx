import { GetStaticPaths } from 'next';
import React, { FC } from 'react'
import { courseService } from '../../services/cours.service';
interface Props {
    course : any
}
const VietnameseLesson:FC<Props> = ({course}) => {
  return (
    <div>{course.title}</div>
  )
}

export async function getStaticProps({ params }: any) {
    const { id } = params;
    const { data: course } = await courseService.getCourseByIds(id); 
    return {
      props: {
        course: course,
      },
    };
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const courses = await courseService.getCourse(); //fetch api get all products and return 
    const paths = courses.data.map((course: any) => {
      return {
        params: {
          id: course.id,
        },
      };
    });
    // ==> return path to params
    return {
      paths,
      fallback: false,
    };
  };
  

export default VietnameseLesson