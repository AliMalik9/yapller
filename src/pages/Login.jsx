import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { supabase } from "../supabaseClient"; // ✅ import Supabase client
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleMagicLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage();

    const email = e.target.email.value;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/chat`,
      },
    });

    if (error) {
      setMessage("❌ Failed to send magic link. Try again.");
      console.error(error.message);
    } else {
      setMessage("✅ Magic link sent! Check your email.");
    }

    setLoading(false);
  };

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/chat");
      }
    };
    checkSession();
  }, [navigate]);
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
          onSubmit={handleMagicLink}
          className="flex flex-col items-start gap-6 w-full"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-[#121213] border border-[#3b3b3e] rounded-2xl text-[#adaeb3] font-['Instrument_Sans'] text-base font-medium leading-6 tracking-[-0.32px] focus:text-[#f5f5f6] outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 cursor-pointer bg-[#f5f5f6] text-[#1e1e20] rounded-2xl font-['Instrument_Sans'] text-base font-semibold leading-6 tracking-[-0.32px] hover:bg-[#cfd0d2] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Magic Link"}
          </button>
          {message && (
            <p className="text-sm text-center text-[#adaeb3] w-full">
              {message}
            </p>
          )}
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
