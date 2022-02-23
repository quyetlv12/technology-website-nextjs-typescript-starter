import Link from "next/link";

const PostHightLight = () => {
  return (
    <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
      <Link href={`/news`}>
        <a>
          <div
            className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
            style={{
              height: "400px",
              backgroundImage:
                "url(https://images.pexels.com/photos/10610947/pexels-photo-10610947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
            }}
          >
            <div className="absolute w-full h-full bg-black z-10 opacity-50" />
            <div className="relative z-20 text-center p-5">
              <span className="inline-block text-white uppercase text-xs tracking-wide">
                Hotels
              </span>
              <h2 className="text-white font-semibold font-serif text-xl my-5">
                Places to stay in the island on your visit
              </h2>
              <span className="inline-block text-xs text-white font-sans">
                Comfort and views
              </span>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostHightLight;
