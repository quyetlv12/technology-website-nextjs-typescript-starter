import Link from "next/link";
import PostHightLight from "../../../atoms/card/PostHightLight";

const PostHightlightCard = () => {
  return (
    <div>
      {/* featured */}
      <div className="max-w-5xl mx-auto pt-10 pb-10">
        <ul className="flex flex-wrap -mx-2 overflow-hidden">
          <PostHightLight />
        </ul>
      </div>
    </div>
  );
};

export default PostHightlightCard;
