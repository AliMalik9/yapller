import React from "react";

function ReceiverMsg() {
  return (
    <div className="flex w-[800px] py-[18px] justify-start items-end gap-4">
      <img
        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
        alt="User avatar"
        className="w-8 h-8 flex-shrink-0 rounded-lg object-cover"
      />
      <div className="flex flex-col max-w-[600px] justify-end items-start gap-1">
        <p className="text-[rgba(235,213,209,0.62)] font-['Inter'] text-[13px] font-medium leading-4 flex-1">
          Luna
        </p>
        <div className="flex max-w-[600px] px-4 py-3 justify-center items-center gap-2 rounded-[20px_20px_20px_0px] bg-[#f5f5f6]/10">
          <p className="text-[#F5F5F6] text-base font-normal leading-6 flex-1">
            Message content here
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReceiverMsg;
