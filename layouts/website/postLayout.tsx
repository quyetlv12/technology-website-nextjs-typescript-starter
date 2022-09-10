import React, { FC } from 'react'
import SideBar from '../../components/molecules/website/sidebar'
interface Props {
    children: React.ReactNode;
}
const PostLayout:FC<Props> = ({children}) => {
    return (

        <div>
            <div className="flex flex-wrap ">
                <div className="md:w-1/4 w-full p-4">
                    <SideBar />
                </div>
                <div className="md:w-3/4 w-full">
                    <main className="max-w-5xl mx-auto pb-10 pt-10">
                        <div className="flex flex-wrap overflow-hidden">
                            <div className="w-full">
                                <div className="mr-2 md:mr-4 ml-2">
                                    <div className="pb-10">
                                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default PostLayout