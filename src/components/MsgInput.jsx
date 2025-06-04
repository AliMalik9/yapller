import React from "react";

function MsgInput() {
  return (
    <div className="flex items-center w-[768px] p-3 self-stretch rounded-3xl bg-[#f5f5f6]/10">
      <input
        type="text"
        className="flex-1 bg-transparent text-white ml-2 text-base font-normal leading-6 tracking-[-0.08px] outline-none"
        placeholder="Type a message..."
      />
      <button className="flex justify-center items-center p-2 rounded-xl bg-[#E6E6E7]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clip-path="url(#clip0_27_2618)">
            <path
              d="M14.3724 1.42224L7.03906 8.75557M14.3724 1.42224L9.70573 14.7556L7.03906 8.75557M14.3724 1.42224L1.03906 6.08891L7.03906 8.75557"
              stroke="#151516"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_27_2618">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}

export default MsgInput;
