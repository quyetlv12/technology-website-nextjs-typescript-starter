import React, { FC } from 'react'
import CardCourse from '../../../atoms/cardCousre'
import Title from '../../../atoms/title'
import Button from '../../../atoms/button'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/store'
interface Props {
    name?: string,
    title: string,
    courses?: [],
    type?: string
}
const CourseSection: FC<Props> = ({ title, type }) => {
   const {courses} =  useSelector((state: RootState) => {
    return state.courses;
  })    
  console.log("courses" , courses);
  
    const router = useRouter()
    const isLink = type === 'vietnamese' ? '/vietnamese-lesson' : type === 'english' ? '/vietnamese-lesson' : type === 'talk' ? '/coffee-talk' : "/"
    return (
        <>
            <Title title={title} />
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10">
                {/* {
                  courses.map(_elt => (
                    <CardCourse />
                   ))
                } */}
            </div>
            <div className='flex justify-center'>
                {
                    router.pathname === '/' ? <Link href={isLink}>
                        <span className='bg-green-500 text-white p-2 rounded-lg cursor-pointer hover:bg-orange-500'>More</span>
                    </Link> : null
                }

            </div>
        </>

    )
}

export default CourseSection