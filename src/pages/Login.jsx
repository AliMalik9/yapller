import React from "react";
import logo from "../assets/logo.png";

function Login() {
  return (
    <div className="w-full h-screen bg-[#1e1e20] flex items-center justify-center overflow-hidden relative">
      <div className="absolute w-[446px] h-[446px] rounded-full opacity-60 bg-[#adaeb3] blur-[250px] right-[-232px] top-[-232px]"></div>
      <div className="absolute w-[446px] h-[446px] rounded-full opacity-60 bg-[#adaeb3] blur-[250px] left-[-232px] bottom-[-232px]"></div>
      <div className="flex flex-col items-center justify-center w-[386px] gap-11">
        <div className="flex flex-col items-center gap-8">
          <div className="p-2 bg-[#3b3b3e] rounded-3xl">
            <img
              src={logo}
              alt="Yappler Logo"
              className="w-20 h-20 aspect-square"
            />
          </div>
          <div className="flex flex-col items-center gap-3 w-full">
            <h1 className="text-[#f5f5f6] text-center font-['Instrument_Sans'] text-[44px] font-semibold leading-[52px]">
              Hey, Yapllers!
            </h1>
            <p className="text-[#adaeb3] text-center font-['Instrument_Sans'] text-base font-normal leading-6 tracking-[-0.32px]">
              Hey! Welcome to the chat app of giggles and memes!
            </p>
          </div>
        </div>
        <form
          id="magicLinkForm"
          className="flex flex-col items-start gap-6 w-full"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full p-3 bg-[#121213] border border-[#3b3b3e] rounded-2xl text-[#adaeb3] font-['Instrument_Sans'] text-base font-medium leading-6 tracking-[-0.32px] focus:text-[#f5f5f6] outline-none"
          />
          <button
            type="submit"
            className="w-full p-3 bg-[#f5f5f6] text-[#1e1e20] rounded-2xl font-['Instrument_Sans'] text-base font-semibold leading-6 tracking-[-0.32px] hover:bg-[#cfd0d2] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            Send Magic Link
          </button>
        </form>
        <p className="text-[#adaeb3] text-center font-['Instrument_Sans'] text-base font-normal leading-6 tracking-[-0.32px]">
          You acknowledge that you read, and agree, to our{" "}
          <span className="text-[#f5f5f6] font-medium underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and our{" "}
          <span className="text-[#f5f5f6] font-medium underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
