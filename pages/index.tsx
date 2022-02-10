import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-gray-100">
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
                    backgroundImage: "url(https://images.pexels.com/photos/10610947/pexels-photo-10610947.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
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
                    backgroundImage: "url(https://images.pexels.com/photos/7210061/pexels-photo-7210061.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
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
                    backgroundImage: "url(https://images.pexels.com/photos/10718779/pexels-photo-10718779.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
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
      <main className="max-w-5xl mx-auto pb-10 pt-10">
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* <Card/> */}
        </div>
      </main>
    </div>
  );
};

export default Home;
