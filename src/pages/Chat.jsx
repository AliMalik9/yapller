import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Sidebar from "../components/Sidebar";
import Receiver from "../components/Receiver";
import Sender from "../components/Sender";

function Chat() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        navigate("/");
      } else {
        setUser(session.user);
      }

      setLoading(false);
    };

    checkSession();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full h-screen bg-[#1e1e20] flex gap-5 p-5 overflow-hidden relative">
      <div className="absolute w-[446px] h-[446px] rounded-full opacity-60 bg-[#adaeb3] blur-[250px] right-[-232px] top-[-232px]"></div>
      <div className="absolute w-[446px] h-[446px] rounded-full opacity-60 bg-[#adaeb3] blur-[250px] left-[-232px] bottom-[-232px]"></div>
      <Sidebar />
      <div className="flex-1 h-full">
      <div className="flex items-center gap-5 self-stretch">
        <Receiver />
        <Sender 
          email={user?.email}
          name={user?.user_metadata?.full_name || user?.email?.split('@')[0]}
          image={user?.user_metadata?.avatar_url || user?.user_metadata?.picture} // Google OAuth provides 'picture', some other providers use 'avatar_url'
        />
      </div>
      <div></div>
      </div>

      {/* <p style={{ color: "#aaa" }}>Logged in as: {user?.email}</p> */}
      {/* <button
        onClick={handleLogout}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Logout
      </button> */}
    </div>
  );
}

export default Chat;
