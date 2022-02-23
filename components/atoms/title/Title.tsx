import { FC } from "react";

interface TitleInterface {
    title ?: string
}
const Title:FC<TitleInterface> = ({title}) => {
  return (
    <div className="flex flex-wrap w-full mb-4 p-4">
      <div className="w-full mb-6 lg:mb-0">
        <h1 className="sm:text-[2rem] md:tex[2xl] lg:text-[5xl]  font-bold title-font mb-2 text-gray-900">
          {title}
        </h1>
        <div className="h-1 w-20 bg-indigo-500 rounded" />
      </div>
    </div>
  );
};

export default Title;
