function Receiver() {
  return (
    <div className="flex items-center gap-3 bg-[#151516]/60 px-4 py-5 rounded-3xl flex-1">
      <img
        className="w-10 h-10 flex-shrink-0 rounded-lg object-cover bg-gray-300"
        src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
        alt="Luna Nightingale"
      />
      <div className="flex flex-col items-start">
        <p className="text-[#F5F5F6] text-base font-semibold leading-5 overflow-hidden text-ellipsis line-clamp-1">
          Luna Nightingale
        </p>
        <p className="text-[#ADAEB3] text-sm font-normal leading-5 overflow-hidden text-ellipsis line-clamp-1">
          @lunanightingale
        </p>
      </div>
    </div>
  );
}

export default Receiver;
