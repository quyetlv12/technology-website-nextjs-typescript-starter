import React, { FC } from 'react'
interface Props {
  name?: string
}
const CardReview: FC<Props> = () => {
  return (
    <>
      <div className="flex flex-col items-center pt-10 pb-10">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
        <span>Review text</span>
      </div>
    
    </>
  )
}

export default CardReview