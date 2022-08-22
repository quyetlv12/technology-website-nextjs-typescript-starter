import { GetStaticPaths } from 'next';
import React, { FC } from 'react'
import { courseService } from '../../services/cours.service';
interface Props {
    course : any
}
const EnlishLesson:FC<Props> = ({ course }) => {
    console.log("course",course);
    
  return (
    <div>EnlishLesson</div>
  )
}

export async function getStaticProps({ params }: any) {
    const { id } = params;
    const { data: post } = await courseService.getCourseByIds(id); // get info post
    // const { data: comment } = await commentService.loadAllComment(id);
    return {
      props: {
        post: post,
        // comment: comment,
      },
    };
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const courses = await courseService.getCourse(); //fetch api get all products and return props
    // create paths
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
  

export default EnlishLesson