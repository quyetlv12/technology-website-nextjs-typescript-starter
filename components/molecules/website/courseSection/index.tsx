import React, { FC } from 'react'
import CardCourse from '../../../atoms/cardCousre'
import Title from '../../../atoms/title'
import Button from '../../../atoms/button'
interface Props {
    name?: string,
    title: string,
    data?: []
}
const CourseSection: FC<Props> = ({ title, data }) => {
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
            <Button classname='p-3 rounded-md' title='More' />
            </div>
        </>

    )
}

export default CourseSection