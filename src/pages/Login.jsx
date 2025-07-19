import { useState } from "react";
import logo from "../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-pale-950 overflow-hidden">
      <div className="absolute w-[446px] h-[446px] rounded-full bg-pale-300 opacity-60 blur-[250px] right-[-232px] top-[-232px]" />
      <div className="absolute w-[446px] h-[446px] rounded-full bg-pale-300 opacity-60 blur-[250px] left-[-232px] bottom-[-232px]" />
      <div className="flex flex-col items-center justify-center w-[386px] gap-11">
        <div className="flex flex-col items-center gap-8">
          <div className="p-2 bg-pale-900 rounded-3xl">
            <img src={logo} alt="Yappler Logo" className="w-20 h-20 aspect-square" />
          </div>
          <div className="flex flex-col items-center gap-3 w-full text-center">
            <h1 className="text-[44px] font-semibold leading-[52px] text-pale-50 font-['Instrument_Sans']">
              Hey, Yapllers!
            </h1>
            <p className="text-base font-normal leading-6 tracking-[-0.32px] text-pale-300 font-['Instrument_Sans']">
              Hey! Welcome to the chat app of giggles and memes!
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 w-full">
          <form className="flex flex-col items-start gap-6 w-full" id="signin-form">
            <div className="flex flex-col gap-3 w-full">

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleEmailChange}
              className="w-full p-3 bg-pale-1000 border border-pale-900 rounded-2xl text-pale-300 focus:text-pale-50 outline-none text-base font-medium"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 bg-pale-1000 border border-pale-900 rounded-2xl text-pale-300 focus:text-pale-50 outline-none font-['Instrument_Sans'] text-base font-medium leading-6 tracking-[-0.32px]"
            />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-pale-50 text-pale-950 rounded-2xl font-semibold cursor-pointer hover:bg-pale-200 disabled:opacity-70 disabled:cursor-not-allowed font-['Instrument_Sans'] text-base leading-6 tracking-[-0.32px]"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center text-base font-normal leading-6 tracking-[-0.32px] text-pale-300 font-['Instrument_Sans']">
          You acknowledge that you read, and agree, to our{" "}
          <span className="text-pale-50 font-medium underline cursor-pointer">
            Terms of Service
          </span>{" "}
          and our{" "}
          <span className="text-pale-50 font-medium underline cursor-pointer">
            Privacy Policy
          </span>
          .
        </p>
      </div>
    </div>
  );
}

export default Login;
