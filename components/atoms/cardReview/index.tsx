import React, {FC} from 'react'

interface Props {
    name?: string
    avatar: string,
    username: string,
    content: string,
    job: string,
}

const CardReview: FC<Props> = ({
                                   avatar,
                                   username,
                                   content,
                                   job
                               }) => {
    return (
        <>
            <div className="flex flex-col items-center p-10 justify-center rounded-md " >
                <img className="mb-3 w-16 h-16 rounded-full shadow-lg"
                     src={avatar}
                     alt={content}/>
                     <span className="text-sm text-gray-500 dark:text-gray-400">{content}</span>
                <div className='h-[1px] w-full mt-2 mb-2 bg-gray-400'></div>
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                <h3>{job}</h3>
            </div>

        </>
    )
}

export default CardReview