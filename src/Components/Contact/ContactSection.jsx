import React from "react";
import catering from "../Assets/catering.gif";

export default function ContactSection() {
  return (
    <div
      id="table"
      className="min-h-screen container mx-auto flex justify-center"
    >
      <div className="flex-wrap sm:flex-nowrap flex items-center sm:gap-20 lg:gap-20">
        <div className="sm:w-1/2 lg:w-1/2 py-4 px-4">
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <h2 className="text-[#cdaa88] text-xl font-semibold font-mono pb-2">
                Fresh From Foody Hub
              </h2>
              <div className="flex items-center">
                {" "}
                {/* Added flex container for Book and image */}
                <h1 className="text-5xl font-bold tracking-[6px] text-[#412124]">
                  Book
                </h1>
                <img
                  src={catering}
                  alt=""
                  height={80}
                  width={80}
                  className="ml-2"
                />
              </div>
              <h1 className="text-5xl font-bold tracking-[6px] text-[#412124]">
                Table
              </h1>
            </div>
            <p className="text-gray-700 text-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              quam distinctio eaque saepe sed ratione.
            </p>
            <p className="text-gray-700 text-medium">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              quam distinctio eaque saepe sed ratione.
            </p>
            <button
              type="submit"
              className="border-2 rounded-full py-2 px-6 w-36 text-center border-[#412124] hover:bg-[#cdaa88]"
            >
              {" "}
              <a href="#menu"> View menu</a>
            </button>
          </div>
        </div>

        <div className="sm:w-1/2 lg:w-1/2  sm:p-2 lg:p-2 max-w-7xl mx-auto">
          <p className="bold text-center text-3xl font-bold tracking-wide uppercase my-4 text-[#b37646]">
            Book a table
          </p>
          <form action="" className="flex flex-col gap-y-6">
            <input
              type="text"
              placeholder="Name"
              className="border-2 border-[#b37646] rounded placeholder-gray-600 py-4 px-3 focus:border-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-[#b37646] rounded placeholder-gray-600 py-4 px-3 focus:border-none"
            />
            <input
              type="number"
              placeholder="How Many Person?"
              className="border-2 border-[#b37646] rounded placeholder-gray-600 py-4 px-3 focus:border-none"
            />
            <input
              type="date"
              placeholder=""
              className="border-2 border-[#b37646] rounded placeholder-gray-600 py-4 px-3 w-full focus:border-none"
            />
            <div class="flex flex-col items-center space-y-4">
              <button
                type="submit"
                class="self-center bg-[#cdaa88] hover:bg-[#412124] text-white rounded-full py-2 px-6 w-36 text-center"
                onClick={() =>
                  document
                    .getElementById("toast-simple")
                    .classList.toggle("hidden")
                }
              >
                <a href="/#table">Book Table</a>
              </button>

              <div
                id="toast-simple"
                class="toast-bottom-right hidden flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800"
                role="alert"
              >
                <svg
                  class="w-5 h-5 text-green-600 dark:text-green-500 rotate-45"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                  />
                </svg>
                <div class="ps-4 text-sm font-normal">
                  Message sent successfully.
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
