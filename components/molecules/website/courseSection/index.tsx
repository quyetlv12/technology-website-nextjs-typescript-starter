import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { checkTypeReturnLink, useAppSelector } from '../../../../configs'
import { CourseProps } from '../../../../interfaces/courses'
import { getCourses, getEnglishCourses, getVietnamesCourses } from '../../../../redux/slices/coursesSlide'
import CardCourse from '../../../atoms/cardCousre'
import Title from '../../../atoms/title'
interface Props {
    name?: string,
    title?: string,
    courses: [],
    type?: string,
    titleVie?: string
}
const CourseSection: FC<Props> = ({ title, type , courses , titleVie }) => {      
    const router = useRouter()
    return (
        <>
        {
            title ?<Title title={title}  titleVie={titleVie} /> : null
        }
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10">
                {
                  courses.map((_elt:CourseProps , key :any) => (
                    <div key={key}>
                    <CardCourse type={type} id={_elt._id} name={_elt.title} image={_elt.image} price={_elt.price}/>
                    </div>
                   ))
                }
            </div>
            <div className='flex justify-center'>
                {
                    router.pathname === '/' ? <Link href={checkTypeReturnLink(type)}>
                        <span className='bg-green-500 text-white p-2 rounded-lg cursor-pointer hover:bg-orange-500'>More</span>
                    </Link> : null
                }

            </div>
        </>

    )
}

export default CourseSection