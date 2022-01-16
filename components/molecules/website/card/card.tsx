import Image from "next/image";
import { FC } from "react";
import { convertISOstringToDate } from "../../../../configs";
import { PostInterface } from "../../../../interfaces/post.interface";
interface Props {
  item: PostInterface;
  className?: string;
}
const Card: FC<Props> = ({ item ,className }) => {  
  return (
    <div className={`max-w-2xl px-8 py-4 mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800 mb-2 hover:shadow-2xl hover:delay-200 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-light text-gray-600 dark:text-gray-400">
          {convertISOstringToDate(item?.createdDate)}
        </span>
        <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">
          danh mục
        </a>
      </div>
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
        >
          {item?.title}
        </a>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <a
          href="#"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Xem thêm
        </a>
        <div className="flex items-center">
         <Image
           width={40}
           height={40}
           objectFit="cover"
           src={item?.image}
           className="rounded-full mr-2"
           alt=""
         />
          <a className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
            {item?.author}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
