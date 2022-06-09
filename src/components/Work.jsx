import React from "react";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#000000]">
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-fill h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-red-600'>Work</p>
          <p className='py-6'>// Check out some of my work</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

        {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
                <span>

                </span>
              <div>
            <a href="/">
                <button></button>
            </a>
            <a href="/">
                <button></button>
            </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
