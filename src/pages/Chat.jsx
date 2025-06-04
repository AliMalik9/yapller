import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import Sidebar from "../components/Sidebar";
import Receiver from "../components/Receiver";
import Sender from "../components/Sender";
import MsgInput from "../components/MsgInput";
import SenderMsg from "../components/SenderMsg";

import ReceiverMsg from "../components/ReceiverMsg";

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
      <div className="flex flex-col items-start gap-5 flex-1">
        <div className="flex items-center gap-5 self-stretch">
          <Receiver />
          <Sender />
        </div>
<div className="flex h-full p-2 flex-col items-center gap-2 self-stretch rounded-3xl bg-[#151516]/60 overflow-hidden">
  <div className="flex flex-col w-fit mx-auto h-full">
        <div className="flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200 flex-grow px-2">
      <ReceiverMsg />
      <SenderMsg />
      <ReceiverMsg />
      <SenderMsg />
      <ReceiverMsg />
      <SenderMsg />
      <ReceiverMsg />
      <SenderMsg />
      <ReceiverMsg />
      <SenderMsg />
      <ReceiverMsg />
      <SenderMsg />
      <SenderMsg />
      <ReceiverMsg />
      <SenderMsg />
    </div>
    <div className="w-full flex items-center justify-center gap-2 px-8 py-4">
      <MsgInput />
    </div>
  </div>
</div>
        
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
