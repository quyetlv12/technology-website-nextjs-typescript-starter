import React, {FC} from 'react'
import Title from '../../../atoms/title'
import Select from 'react-select'
import {useForm} from 'react-hook-form';
import {AnimationOnScroll} from 'react-animation-on-scroll';
import RegisterCourseService from "../../../../services/registerCourseService";

interface Props {
    name?: string,
    title?: String,
    titleVie?: String,
    opts?: [],
    animation?: string,
    type?: string
}

const ContactFormBottom: FC<Props> = ({title, titleVie, opts = [], animation = 'animate__zoomIn' , type}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = async (data: any) => {
        const {data : resCourse} = await RegisterCourseService.registerCourse(data)
        console.log("resCourse" , resCourse)
    }
    return (
        <section className="text-gray-600 body-font relative">
            <div className="container py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-1">
                    <Title title={title} titleVie={titleVie}/>
                </div>
                <AnimationOnScroll animateIn={animation}>
                    <form className="lg:w-2/2 md:w-2/3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input {...register("fullName", {required: true, maxLength: 80})} type="text"
                                           id="name"
                                           name="fullName"
                                           className={`w-full bg-gray-100 bg-opacity-50 rounded border ${errors['fullName'] ? 'border-red-600' : 'border-gray-300'}  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input {...register("email", {required: true, maxLength: 80})} type="email"
                                           id="email"
                                           name="email"
                                           className={`w-full bg-gray-100 bg-opacity-50 rounded border ${errors['email'] ? 'border-red-600' : 'border-gray-300'} border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}/>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Khoá học</label>
                                <select id="large" {...register("course", {required: true})}
                                        className={`block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border ${errors['course'] ? 'border-red-600' : 'border-gray-300'} focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}>
                                    {opts.map((_elt: any, index: any) => (
                                        <option key={index} value={_elt.id}>{_elt.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message"
                                              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                              defaultValue={""}/>
                                </div>
                            </div>


                            <div className="p-2 w-full">
                                <button type={'submit'}
                                        className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Đăng
                                    kí
                                </button>
                            </div>
                        </div>
                    </form>
                </AnimationOnScroll>

            </div>
        </section>
    )
}

export default ContactFormBottom