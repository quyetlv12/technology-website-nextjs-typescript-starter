import Image from "next/image";
import { FC } from "react";
import { PostInterface } from "../../../../interfaces/post.interface";
interface Props {
  item?: PostInterface;
  className?: string;
}
const Card: FC<Props> = ({ item, className }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 flex items-center gap-3">
          {/* <Image
            width={50}
            height={50}
            objectFit="cover"
            src={item?.image}
            alt=""
          /> */}
          {item?.title}
        </div>
        <p className="text-gray-700 text-base">{item?.content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {/* # {item?.tag} */}
        </span>
      </div>
    </div>
  );
};

export default Card;
