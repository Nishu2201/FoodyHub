import React from "react";

function Signup() {
  return (
    <>
      <div id="login" className="container mx-auto p-2 bg-[#cdaa88]">
        <div className="max-w-sm mx-auto my-24 bg-[#dcc4a9] px-5 py-10 rounded shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="font-bold text-2xl text-white">
              Register to<span className="text-[#412124]"> Foody</span>{" "}
              <span className="text-[#b37646]">Hub</span>
            </h1>
          </div>
          <form action="#">
            <div className="mt-5">
              <input
                type="text"
                id="Name"
                placeholder="Name"
                className="block w-full p-2 border rounded border-[#84563c]"
              />
            </div>

            <div className="mt-5">
              <input
                type="email"
                id="username"
                placeholder="Email"
                className="block w-full p-2 border rounded border-[#84563c]"
              />
            </div>
            <div className="mt-5 flex items-center">
              <span className="mr-2">Gender:</span>
              <div className="mr-2">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="p-2 border rounded border-[#84563c]"
                />
                <label htmlFor="male"> Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="p-2 border rounded border-[#84563c]"
                />
                <label htmlFor="female"> Female</label>
              </div>
            </div>
            <div className="mt-5">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="block w-full p-2 border rounded border-[#84563c]"
              />
            </div>
            <div className="mt-10">
              <button
                type="submit"
                defaultValue="Login"
                className="py-3 bg-green-500 hover:bg-green-600 rounded text-white text-center w-full"
              >
                Submit
              </button>
            </div>
            <div className="pt-5 text-center text-[#84563c]">
            <a href="/login">Click to Login</a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Signup;
