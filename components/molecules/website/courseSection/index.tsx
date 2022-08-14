import React, { FC } from 'react'
import CardCourse from '../../../atoms/cardCousre'
import Title from '../../../atoms/title'
import Button from '../../../atoms/button'
import { useRouter } from 'next/router'
import Link from 'next/link'
interface Props {
    name?: string,
    title: string,
    data?: [],
    type?: string
}
const CourseSection: FC<Props> = ({ title, data, type }) => {
    const router = useRouter()
    const isLink = type === 'vietnamese' ? '/vietnamese-lesson' : type === 'english' ? '/vietnamese-lesson' : type === 'talk' ? '/coffee-talk' : "/"
    return (
        <>
            <Title title={title} />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mb-10">
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
                <CardCourse />
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