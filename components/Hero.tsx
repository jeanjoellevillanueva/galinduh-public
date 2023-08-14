import React from "react";


export default function Index() {
  return (
    <div className="overflow-y-hidden">
      <div className="2xl:container flex justify-center items-center 2xl:mx-auto xl:px-20 md:px-6 px-4 py-12">
        <div className=" flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-16 xl:space-x-48">
          <div className="md:flex-shrink-0 flex md:justify-start justify-center items-center md:items-start flex-col space-y-4 lg:space-y-6 ">
            <div className="flex flex-col md:justify-start items-center md:items-start space-y-3 lg:space-y-4">
              <p className="text-base font-medium lg:font-normal md:text-lg lg:text-xl leading-6 text-gray-900">EXPLORE YOUR TRUE STYLE!</p>
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-extrabold lg:font-black md:leading-10 text-pink-500">Galinduh.Co</h1>
              <p className="text-base font-medium lg:font-normal md:text-lg lg:text-xl leading-6 text-gray-900">Trending Collection 2023</p>
            </div>
            <a href="https://shopee.ph/GC-Cotton-Linen-High-Waist-Skort-(Short-Skirt)-with-Buttons-Trendy-Korean-Palda-Short-for-Women-i.8373548.23472556407?xptdk=f02ffff9-886b-4215-97c0-c65072ebf6e7" className="hidden rounded-full md:block text-base font-medium leading-6 text-white py-3 px-10 lg:px-12 bg-pink-500 hover:bg-pink-400">
              Shop Now
            </a>
          </div>
          <div className="w-full">
            <img className="w-full" src="/collage.png" alt="collage"/>
          </div>
        </div>
      </div>
    </div>
  );
}
