import { FC } from "react";

interface TitleInterface {
    title ?: String ,
    titleVie ?: String
}
const Title:FC<TitleInterface> = ({title , titleVie}) => {
  return (
    <div className="flex justify-center w-full mb-2 py-4">
      <div className="w-full flex justify-center lg:mb-0">
        <h1 className="sm:text-[1.5rem] md:tex[2xl] text-center lg:text-[5xl] font-bold title-font mb-2 text-gray-900 uppercase">
          {title}
          <div className="h-[2px] w-full bg-blue-500 rounded" />
          {titleVie}
        </h1>
       
      </div>
    </div>
  );
};

export default Title;
