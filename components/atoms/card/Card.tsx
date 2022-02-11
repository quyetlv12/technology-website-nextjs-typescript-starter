import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { PostInterface } from "../../../interfaces/post.interface";
interface CardProps {
  _post: PostInterface;
}
const Card: FC<CardProps> = ({ _post }) => {
  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="bg-white p-6 rounded-lg">
          <div className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 w-full object-cover object-center mb-6 h-[300px] rounded-lg">
            <Link href={`/news/${_post.id}`}>
              <a>
                <Image
                  height={280}
                  width={350}
                  layout="responsive"
                  objectFit="cover"
                  src={_post?.image}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {_post?.tag}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {_post?.title}
          </h2>
          <p className="leading-relaxed text-base">{_post?.content}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
