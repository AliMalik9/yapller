const Userchat = () => {
  return (
    <div className="flex items-center justify-center gap-3 self-stretch rounded-2xl px-3 py-1 bg-transparent cursor-pointer hover:bg-[#f5f5f61a] transition-colors">
      <img
        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
        alt="Profile"
        className="w-12 h-12 rounded-lg object-cover"
      />
      <div className="flex flex-col items-start flex-1 py-3">
        <div className="flex items-baseline gap-1 self-stretch justify-between">
          <p
            className="text-[#F5F5F6] text-base font-semibold leading-5 flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
          >
            Luna Nightingale
          </p>
          <div className="text-xs font-normal leading-4 text-[#696A71]">
            10:30 AM
          </div>
        </div>
        <p className="text-[15px] font-normal leading-5 text-[#ADAEB3] overflow-hidden text-ellipsis self-stretch line-clamp-2">
          Let's catch up soon!
        </p>
      </div>
    </div>
  );
};

export default Userchat;
