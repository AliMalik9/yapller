import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { supabase } from "../supabaseClient"; // Import Supabase client for authentication
import { useNavigate } from "react-router-dom"; // Import navigation hook

/**
 * Login component for user authentication.
 * Provides magic link sign-in and Google sign-in options.
 */
function Login() {
  // State for email input
  const [email, setEmail] = useState("");
  // State for feedback message (success/error)
  const [message, setMessage] = useState("");
  // State for loading indicator during async actions
  const [loading, setLoading] = useState(false);
  // React Router navigation hook
  const navigate = useNavigate();

  /**
   * Handles magic link form submission.
   * Sends a magic link to the user's email using Supabase.
   */
  const handleMagicLink = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Show loading state
    setMessage(); // Clear previous messages

    const email = e.target.email.value; // Get email from form input

    // Send magic link using Supabase Auth
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/chat`, // Redirect after login
      },
    });

    // Handle response
    if (error) {
      setMessage("❌ Failed to send magic link. Try again.");
      console.error(error.message);
    } else {
      setMessage("✅ Magic link sent! Check your email.");
    }

    setLoading(false); // Reset loading state
  };

  const handleGoogleSignIn = async () => {
  console.log("not completed yet")
};

  /**
   * Checks if the user is already authenticated.
   * If authenticated, redirects to the chat page.
   */
  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        navigate("/chat"); // Redirect if session exists
      }
    };
    checkSession();
  }, [navigate]);

  // Render the login UI
  return (
    <div className="w-full h-screen bg-[#1e1e20] flex items-center justify-center overflow-hidden relative">
      {/* Decorative blurred background circles */}
      <div className="absolute w-[446px] h-[446px] rounded-full opacity-60 bg-[#adaeb3] blur-[250px] right-[-232px] top-[-232px]"></div>
      <div className="absolute w-[446px] h-[446px] rounded-full opacity-60 bg-[#adaeb3] blur-[250px] left-[-232px] bottom-[-232px]"></div>

      {/* Main login card */}
      <div className="flex flex-col items-center justify-center w-[386px] gap-11">
        {/* Logo and welcome message */}
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

        <div className="flex flex-col items-center gap-3 w-full">
          
        {/* Magic link sign-in form */}
        <form
          id="magicLinkForm"
          onSubmit={handleMagicLink}
          className="flex flex-col items-start gap-6 w-full"
        >
          {/* Email input */}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-[#121213] border border-[#3b3b3e] rounded-2xl text-[#adaeb3] font-['Instrument_Sans'] text-base font-medium leading-6 tracking-[-0.32px] focus:text-[#f5f5f6] outline-none"
          />
          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 cursor-pointer bg-[#f5f5f6] text-[#1e1e20] rounded-2xl font-['Instrument_Sans'] text-base font-semibold leading-6 tracking-[-0.32px] hover:bg-[#cfd0d2] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Magic Link"}
          </button>
          {/* Feedback message */}
          {message && (
            <p className="text-sm text-center text-[#adaeb3] w-full">
              {message}
            </p>
          )}
        </form>

        {/* Divider line */}
        <div className="flex items-center justify-center w-full gap-2">
           
        <hr className="w-full border-[#3B3B3E] my-2" />
        <p className="text-[#ADAEB3]">or</p>
        <hr className="w-full border-t border-white/10 my-2" />
        </div>

        {/* Google sign-in button (UI only, no handler) */}
        <button onClick={handleGoogleSignIn} className="cursor-pointer flex items-center leading-6 justify-center gap-2 w-full p-3 rounded-2xl border border-[#3B3B3E] bg-[#151516] text-[#F5F5F6] font-['Instrument_Sans'] text-base font-semibold leading-6 hover:bg-[#15151680]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.255H17.92C17.665 15.63 16.89 16.795 15.725 17.575V20.335H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z"
              fill="#4285F4"
            />
            <path
              d="M11.9999 23C14.9699 23 17.4599 22.015 19.2799 20.335L15.7249 17.575C14.7399 18.235 13.4799 18.625 11.9999 18.625C9.13492 18.625 6.70992 16.69 5.84492 14.09H2.16992V16.94C3.97992 20.535 7.69992 23 11.9999 23Z"
              fill="#34A853"
            />
            <path
              d="M5.845 14.09C5.625 13.43 5.5 12.725 5.5 12C5.5 11.275 5.625 10.57 5.845 9.91V7.06H2.17C1.4 8.59286 0.999321 10.2846 1 12C1 13.775 1.425 15.455 2.17 16.94L5.845 14.09Z"
              fill="#FBBC05"
            />
            <path
              d="M11.9999 5.375C13.6149 5.375 15.0649 5.93 16.2049 7.02L19.3599 3.865C17.4549 2.09 14.9649 1 11.9999 1C7.69992 1 3.97992 3.465 2.16992 7.06L5.84492 9.91C6.70992 7.31 9.13492 5.375 11.9999 5.375Z"
              fill="#EA4335"
            />
          </svg>
          Sign In With Google
        </button>


        </div>


        {/* Terms and privacy policy notice */}
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
