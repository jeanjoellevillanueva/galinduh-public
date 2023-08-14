"use client";
import React, { useState } from "react";

import "../styles/components/social.css";


export default function Index() {
  const [show, setShow] = useState(1);
  return (
    <div className="overflow-hidden">
      <div className="py-12 px-4 md:px-6 xl:px-20 2xl:container 2xl:mx-auto flex justify-center items-center">
        <div className="flex w-full xl:space-x-28 xl:flex-row flex-col space-y-10 xl:space-y-0 justify-center items-center">
          <div className="w-40 md:w-auto xl:w-80 md:flex-shrink-0 flex justify-center xl:justify-start items-center xl:items-start flex-col space-y-4 md:space-y-6 xl:space-y-8">
            <h1 className="text-2xl text-center md:text-left md:text-4xl xl:text-6xl leading-7 md:leading-10 xl:leading-none text-gray-900">Dress Up Stand Out Own Your <span className="font-extrabold text-pink-400">Story</span></h1>
            <a href="https://www.facebook.com/Galinduh.CoMain" className="py-3 px-9 bg-pink-500 hover:bg-pink-400 rounded-full text-sm md:text-base leading-tight text-white">
              Follow Us
            </a>
          </div>
          <div className="flex flex-col justify-start items-start  space-y-14">
            <div className="w-full flex-col flex justify-start items-start space-y-10">
              <div className="flex justify-center items-center">
                <img id="img1" onMouseOver={() => setShow(1)} onMouseOut={() => setShow(0)} className={`cursor-pointer ${show === 1 ? 'w-36 xl:w-72  md:w-60 z-40' : 'w-36  md:w-60 xl:w-72 z-30'  }    h-full shadow-md hover:shadow-xl`} src="/social1.jpeg" alt="girl in galinduh.co" />
                <img id="img2" onMouseOver={() => setShow(2)} onMouseOut={() => setShow(0)} className={`cursor-pointer ${show === 2 ? 'w-36 xl:w-80 md:w-64 z-40' : 'w-36  md:w-60 xl:w-72 z-20'  }  -ml-16  h-full shadow-md hover:shadow-xl`} src="/social2.jpg" alt="guy wearing polo from galinduh.co" />
                <img id="img3" onMouseOver={() => setShow(3)} onMouseOut={() => setShow(0)} className={`cursor-pointer ${show === 3 ? 'w-32 xl:w-72 md:w-52 z-40' : 'w-32  md:w-44 xl:w-60 z-10'  }  -ml-16  h-full shadow-md hover:shadow-xl`} src="/social8.jpeg" alt="selfie from galinduh.co" />
                <img id="img4" onMouseOver={() => setShow(4)} onMouseOut={() => setShow(0)} className={`cursor-pointer ${show === 4 ? 'w-28 xl:w-60 md:w-40 z-40' : 'w-28 xl:w-52 md:w-36 z-0'  }   -ml-16  h-full shadow-md hover:shadow-xl`} src="/social11.jpeg" alt="model at galinduh.co" />
              </div>
              <div className="w-full flex h-px bg-pink-300">
                <div id="img1border" className={`w-full h-full ${show === 1 ? 'bg-pink-700' : ''} `}></div>
                <div id="img2border" className={`w-full ${show === 2 ? 'bg-pink-700' : ''} h-full  `}></div>
                <div id="img3border" className={`w-full ${show === 3 ? 'bg-pink-700' : ''} h-full  `}></div>
                <div id="img4border" className={`w-full ${show === 4 ? 'bg-pink-700' : ''} h-full  `}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
