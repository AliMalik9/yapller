import React from "react";

function SenderMsg() {
  return (
    <div className="flex w-[800px] py-[18px] justify-end items-end gap-4">
      <div className="flex max-w-[600px] px-4 py-3 justify-center items-center gap-2 rounded-[20px_20px_0px_20px] bg-[#E6E6E7]">
        <p className="text-[#050100] text-base font-normal leading-6 flex-1">
          Message content here
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
        alt="User avatar"
        className="w-8 h-8 flex-shrink-0 rounded-lg object-cover"
      />
    </div>
  );
}

export default SenderMsg;
