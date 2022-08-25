import moment from 'moment';
import React, { FC, useEffect, useState } from 'react'
import { convertStringToCurreny, ENG, VIE } from '../../../../configs';
import Button from '../../../atoms/button'
import Title from '../../../atoms/title/Title'
import { ScheduleProps } from './../../../../interfaces/schedule.interface';
interface Props {
    title ?: String, 
    titleVie ? : String,
    schedules: []
}
const Schedule: FC<Props> = ({ schedules ,title , titleVie }) => {    
    return (
        <div className='mt-4'>
            <Title title={title} titleVie={titleVie} />
            <div className="overflow-x-auto mt-2 relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-6 px-6 bg-green-500 text-center text-white dark:bg-gray-800">
                                Tên khoá học
                            </th>
                            <th scope="col" className="py-6 bg-green-500 text-white  px-6">
                                Ngày bắt đầu
                            </th>
                            <th scope="col" className="py-6 px-6 bg-green-500 text-center text-white dark:bg-gray-800">
                                Lịch học
                            </th>
                            <th scope="col" className="py-6 bg-green-500 text-white text-center px-6">
                                Thời gian khoá học
                            </th>
                            <th scope="col" className="py-3 bg-green-500 text-white text-center px-6">
                                Học phí
                            </th>
                            <th scope="col" className="py-3 bg-green-500 text-white text-center px-6">
                                Giảng viên
                            </th>
                            <th scope="col" className="py-3 bg-green-500 text-white  px-6">

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            schedules.map((_elt: ScheduleProps, index: any) => (
                                <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-green-500 cursor-pointer" key={index}>
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white text-center dark:bg-gray-800">
                                        {_elt.name}
                                    </td>
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center bg-gray-50 text-center dark:text-white dark:bg-gray-800">
                                        {moment(`${_elt.startDate}`).format("YYYY-MM-DD H:mm")}
                                    </td>
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {_elt.studyTime}
                                    </td>
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {_elt.duration}
                                    </td>
                                    <td scope="row" className="py-4 px-6 font-medium text-center text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                        {convertStringToCurreny(_elt.price)} VNĐ
                                    </td>
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white text-center dark:bg-gray-800">
                                        {_elt.teacher}
                                    </td>
                                    <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap text-center bg-gray-50 dark:text-white dark:bg-gray-800 flex justify-center">
                                        <Button title='Đăng kí' classname='py-3 px-2 rounded-md' />
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
            </div>

        </div>
    )
}

export default Schedule