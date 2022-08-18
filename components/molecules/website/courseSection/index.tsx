import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { useAppSelector } from '../../../../configs'
import { CourseProps } from '../../../../interfaces/courses'
import { getCourses, getEnglishCourses, getVietnamesCourses } from '../../../../redux/slices/coursesSlide'
import CardCourse from '../../../atoms/cardCousre'
import Title from '../../../atoms/title'
interface Props {
    name?: string,
    title?: string,
    courses: [],
    type?: string
}
const CourseSection: FC<Props> = ({ title, type , courses }) => {  
    const router = useRouter()
    const isLink = type === 'vietnamese' ? '/vietnamese-lesson' : type === 'english' ? '/vietnamese-lesson' : type === 'talk' ? '/coffee-talk' : "/"
    return (
        <>
        {
            title ?<Title title={title} /> : null
        }
            
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10">
                {
                  courses.map((_elt:CourseProps) => (
                    <>
                    <CardCourse id={_elt._id} name={_elt.name} image={_elt.avatar.url} price={_elt.price} />
                    </>
                   ))
                }
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