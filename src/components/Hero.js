import React from "react";

import { Link } from "react-router-dom";

const Hero = () => {

    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14">
                Gaihaltai
            </h1>
            <Link className="py-6 px-10 bg-yellow-500 rounded-full text-3xl hover:bg-yellow-200 transition duration-150 ease-in-out flex items-center animate-bounce" to="/more"  >
                See more{' '}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"></path></svg>
            </Link>
        </div>
    )
}
export default Hero