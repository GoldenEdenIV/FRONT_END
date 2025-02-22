"use client";
import React from 'react';
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex flex-col items-start px-14 py-10 mx-auto w-full text-sm bg-violet-50 max-md:px-5 max-md:mt-9 max-md:max-w-full">
      <h2 className="text-lg font-semibold text-black">Registered Customers</h2>
      <p className="mt-5 font-light leading-loose text-black">
        If you have an account, sign in with your email address.
      </p>
      <form className="w-full">
        <div className="mt-7">
          <label className="text-sm font-semibold leading-loose text-black">
            Email <span className="text-[#C94D3F]">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="self-stretch w-full px-4 py-5 mt-3.5 font-light leading-none text-gray-400 bg-white rounded border border-solid border-[#A2A6B0] focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="mt-5">
          <label className="text-sm font-semibold leading-loose text-black">
            Password <span className="text-[#C94D3F]">*</span>
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your Password"
            className="self-stretch w-full px-4 py-5 mt-3.5 font-light leading-none text-gray-400 bg-white rounded border border-solid border-[#A2A6B0] focus:outline-none focus:border-blue-600"
          />
        </div>
        <div className="flex gap-6 mt-8">
          <button
            type="submit"
            className="px-14 py-5 font-semibold text-center text-white bg-blue-600 rounded-[50px] max-md:px-5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
            Sign In
          </button>
          <a
            href="#"
            className="my-auto leading-none text-blue-600 hover:text-blue-700 transition-colors"
          >
            Forgot Your Password?
          </a>
        </div>
      </form>
    </section>
  );
};

export { LoginForm };
