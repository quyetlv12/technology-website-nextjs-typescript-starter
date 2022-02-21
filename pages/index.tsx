import type { InferGetStaticPropsType, NextPage } from "next";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import CategoriesCard from "../components/atoms/card/categories";
import PostSection from "../components/molecules/website/postSection/postSection";
import PostService from "../services/post.service";

const Home: NextPage = ({posts}:InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Blogger</title>
    </Head>
      {/* categories */}
      <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-[2rem] md:tex[2xl] lg:text-[5xl]  font-bold title-font mb-2 text-gray-900">
               Danh mục tìm kiếm nhiều nhất
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
          </div>
      <CategoriesCard/>
      <div>
        {/* featured */}
        <div className="max-w-5xl mx-auto pt-10 pb-10">
          <ul className="flex flex-wrap -mx-2 overflow-hidden">
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
            <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <a>
                <div
                  className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
                  style={{
                    height: "400px",
                    backgroundImage:
                      "url(https://images.pexels.com/photos/7210061/pexels-photo-7210061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                  }}
                >
                  <div className="absolute w-full h-full bg-black z-10 opacity-50" />
                  <div className="relative z-20 text-center p-5">
                    <span className="inline-block text-white uppercase text-xs tracking-wide">
                      Diving
                    </span>
                    <h2 className="text-white font-semibold font-serif text-xl my-5">
                      Diving for Sharks, the best experience in the country
                    </h2>
                    <span className="inline-block text-xs text-white font-sans">
                      Every day of the week
                    </span>
                  </div>
                </div>
              </a>
            </li>
            <li className="my-2 px-2 w-full overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
              <a>
                <div
                  className="mx-2 flex items-center justify-center bg-gray-300 bg-cover bg-center relative rounded overflow-hidden"
                  style={{
                    height: "400px",
                    backgroundImage:
                      "url(https://images.pexels.com/photos/10718779/pexels-photo-10718779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
                  }}
                >
                  <div className="absolute w-full h-full bg-black z-10 opacity-50" />
                  <div className="relative z-20 text-center p-5">
                    <span className="inline-block text-white uppercase text-xs tracking-wide">
                      Food
                    </span>
                    <h2 className="text-white font-semibold font-serif text-xl my-5">
                      Take your tastebuds for a ride with these places
                    </h2>
                    <span className="inline-block text-xs text-white font-sans">
                      Different cuisine
                    </span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <PostSection title={"Tin tức nổi bật"} posts={posts} />
      </div>
    </div>
  );
};
//fetch api
export const getStaticProps: GetStaticProps = async () => {
  const { data } = await PostService.getPosts() // your fetch function here 
  return {
    props: {
      posts : data
    }
  }
}

export default Home;
