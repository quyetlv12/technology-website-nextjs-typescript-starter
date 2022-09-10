import { GetStaticPaths } from 'next';
import Image from 'next/image';
import React, { FC } from 'react'
import ContactFormBottom from '../../components/molecules/website/contactFormBottom';
import { ENG } from '../../configs';
import PostLayout from '../../layouts/website/postLayout';
import { courseService } from '../../services/cours.service';
interface Props {
  course: any
}
const EnlishLesson: FC<Props> = ({ course }) => {  
  console.log("course" , course);
  
  const opts = [
    {
      name: course.title,
      id: course.id
    }
  ] as any
  return (
    <div className='flex mb-5'>
      <div className='w-2/3' >
        <div className='flex justify-center p-2'>
          <Image src={course.image} width={100} height={100} className={'rounded-full p-5'} />
        </div>
        <div className=''>
          <p className='text-center text-[1.4rem] font-bold mt-2'>
            {
              course.title
            }
          </p>
        </div>
        <div className='w-full h-[2px] bg-gray-400 mt-3 mb-3'></div>
        <div>
          <p dangerouslySetInnerHTML={{ __html: course.content }}></p>
        </div>
      </div>
      <div className='w-1/3' >
        <ContactFormBottom type={ENG} title={"Sign up for an English class"}
          titleVie={"Đăng kí khoá học ngay"} opts={opts || []} animation={'animate__backInRight'} />
        
      </div>
    </div>
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


export default EnlishLesson