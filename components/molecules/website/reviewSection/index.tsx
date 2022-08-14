import React, { FC } from 'react'
import CardReview from '../../../atoms/cardReview'
import Title from '../../../atoms/title'
interface Props {
    title : string
}
const ReviewSection:FC<Props> = ({title}) => {
    return (
        <>
        <Title title={title} />
          <div className="w-full flex justify-center gap-10 mb-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
        </div>
        </>
      
    )
}

export default ReviewSection